import { useEffect } from 'react'

type PageMetaProps = {
  title: string
  description: string
  canonicalPath?: string
  type?: 'website' | 'article'
  imagePath?: string
}

const setMetaContent = (
  selector: string,
  attribute: 'name' | 'property',
  key: string,
  content: string,
) => {
  let element = document.querySelector<HTMLMetaElement>(selector)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }

  element.content = content
}

function PageMeta({
  title,
  description,
  canonicalPath = '/',
  type = 'website',
  imagePath = '/og/renan-amador.png',
}: PageMetaProps) {
  useEffect(() => {
    document.title = title

    const origin = window.location.origin
    const canonicalUrl = new URL(canonicalPath, origin).toString()
    const imageUrl = new URL(imagePath, origin).toString()

    setMetaContent('meta[name="description"]', 'name', 'description', description)
    setMetaContent('meta[property="og:type"]', 'property', 'og:type', type)
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', title)
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', description)
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl)
    setMetaContent('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMetaContent('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMetaContent('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = canonicalUrl
  }, [canonicalPath, description, imagePath, title, type])

  return null
}

export default PageMeta
