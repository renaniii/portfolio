const COOKIE_NAME = "pf_educator_session"
const SESSION_SECONDS = 8 * 60 * 60

const encoder = new TextEncoder()

const hex = (bytes) =>
  Array.from(new Uint8Array(bytes))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("")

const sha256 = async (value) =>
  hex(await crypto.subtle.digest("SHA-256", encoder.encode(value)))

const safeEqual = (left, right) => {
  if (left.length !== right.length) return false

  let diff = 0
  for (let index = 0; index < left.length; index += 1) {
    diff |= left.charCodeAt(index) ^ right.charCodeAt(index)
  }

  return diff === 0
}

const escapeHtml = (value) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")

const securityHeaders = {
  "cache-control": "no-store",
  "content-security-policy":
    "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
  "referrer-policy": "no-referrer",
  "x-content-type-options": "nosniff",
  "x-frame-options": "DENY",
  "x-robots-tag": "noindex, nofollow, noarchive",
}

const loginPage = ({ error = "", configured = true } = {}) => {
  const notice = configured
    ? error
      ? `<p class="error" role="alert">${escapeHtml(error)}</p>`
      : `<p class="hint">Use o acesso compartilhado do educador.</p>`
    : `<p class="error" role="alert">A área ainda não foi configurada pelo responsável do site.</p>`

  return `<!doctype html>
<html lang="pt-BR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <meta name="robots" content="noindex,nofollow,noarchive">
  <title>Acesso do educador — Programando o Futuro</title>
  <style>
    :root { color-scheme: dark; font-family: Inter, system-ui, sans-serif; background:#0b0911; color:#f6f2ff; }
    * { box-sizing:border-box; }
    body { margin:0; min-height:100vh; display:grid; place-items:center; padding:24px; background:#0b0911; }
    main { width:min(100%,420px); border:1px solid rgba(255,255,255,.09); background:#12101a; padding:28px; }
    .path { margin:0 0 22px; color:#9b87f5; font:10px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; }
    h1 { margin:0; font-size:clamp(2.2rem,8vw,3.4rem); line-height:.96; letter-spacing:-.055em; font-weight:560; }
    .hint,.error { margin:18px 0 0; font-size:13px; line-height:1.6; color:#a6a0b2; }
    .error { color:#ff9cab; }
    form { margin-top:28px; display:grid; gap:16px; }
    label { display:grid; gap:7px; color:#a6a0b2; font:10px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; }
    input { width:100%; min-height:44px; border:1px solid rgba(255,255,255,.12); outline:none; padding:10px 12px; background:#0a0910; color:#f6f2ff; font:14px system-ui,sans-serif; }
    input:focus { border-color:#9b87f5; }
    button { min-height:44px; margin-top:4px; border:1px solid rgba(155,135,245,.35); background:rgba(155,135,245,.1); color:#c4b5fd; font:11px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; cursor:pointer; }
    a { display:inline-block; margin-top:22px; color:#6c6579; font:10px ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; text-decoration:none; }
  </style>
</head>
<body>
  <main>
    <p class="path">~/oficina/educador</p>
    <h1>Área do educador.</h1>
    ${notice}
    ${configured ? `
      <form method="post" action="/oficina/educador" autocomplete="off">
        <label>
          login
          <input name="username" type="text" autocomplete="username" required maxlength="80" autofocus>
        </label>
        <label>
          senha
          <input name="password" type="password" autocomplete="current-password" required maxlength="160">
        </label>
        <button type="submit">entrar →</button>
      </form>
    ` : ""}
    <a href="/oficina">← voltar para a oficina</a>
  </main>
</body>
</html>`
}

const htmlResponse = (html, status = 200, extraHeaders = {}) =>
  new Response(html, {
    status,
    headers: {
      "content-type": "text/html; charset=utf-8",
      ...securityHeaders,
      ...extraHeaders,
    },
  })

export default async (request, context) => {
  const username = Netlify.env.get("EDUCATOR_USERNAME")
  const password = Netlify.env.get("EDUCATOR_PASSWORD")

  if (!username || !password) {
    return htmlResponse(loginPage({ configured: false }), 503)
  }

  const url = new URL(request.url)
  const expectedSession = await sha256(
    `programando-futuro:educator:${username}:\0:${password}`,
  )

  if (url.searchParams.get("logout") === "1") {
    return new Response(null, {
      status: 303,
      headers: {
        location: "/oficina/educador",
        "set-cookie": `${COOKIE_NAME}=; Path=/oficina/educador; Max-Age=0; HttpOnly; Secure; SameSite=Strict`,
        ...securityHeaders,
      },
    })
  }

  const session = context.cookies.get(COOKIE_NAME)
  if (session && safeEqual(session, expectedSession)) {
    return context.next()
  }

  if (request.method === "POST") {
    const form = await request.formData()
    const suppliedUsername = String(form.get("username") ?? "")
    const suppliedPassword = String(form.get("password") ?? "")

    const suppliedHash = await sha256(
      `credentials:${suppliedUsername}:\0:${suppliedPassword}`,
    )
    const expectedHash = await sha256(
      `credentials:${username}:\0:${password}`,
    )

    if (safeEqual(suppliedHash, expectedHash)) {
      return new Response(null, {
        status: 303,
        headers: {
          location: "/oficina/educador",
          "set-cookie": `${COOKIE_NAME}=${expectedSession}; Path=/oficina/educador; Max-Age=${SESSION_SECONDS}; HttpOnly; Secure; SameSite=Strict`,
          ...securityHeaders,
        },
      })
    }

    await new Promise((resolve) => setTimeout(resolve, 350))
    return htmlResponse(
      loginPage({ error: "Login ou senha incorretos." }),
      401,
    )
  }

  return htmlResponse(loginPage())
}

export const config = {
  path: ["/oficina/educador", "/oficina/educador/*"],
}
