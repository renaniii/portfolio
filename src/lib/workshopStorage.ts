export type EncounterOneProgress = {
  started: boolean
  checklist: boolean[]
  completed: boolean
}

export type LabDraft = {
  html: string
  css: string
  js: string
}

const PROGRESS_KEY = 'programando-futuro.progress.v1'
const LAB_PREFIX = 'programando-futuro.lab.v1.'

const emptyProgress: EncounterOneProgress = {
  started: false,
  checklist: [false, false, false, false],
  completed: false,
}

const canUseStorage = () =>
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

export const getEncounterOneProgress = (): EncounterOneProgress => {
  if (!canUseStorage()) return emptyProgress

  try {
    const raw = window.localStorage.getItem(PROGRESS_KEY)
    if (!raw) return emptyProgress

    const parsed = JSON.parse(raw) as Partial<EncounterOneProgress>
    const checklist = Array.isArray(parsed.checklist)
      ? [0, 1, 2, 3].map((index) => Boolean(parsed.checklist?.[index]))
      : emptyProgress.checklist

    return {
      started: Boolean(parsed.started),
      checklist,
      completed: Boolean(parsed.completed),
    }
  } catch {
    return emptyProgress
  }
}

export const saveEncounterOneProgress = (
  progress: EncounterOneProgress,
): void => {
  if (!canUseStorage()) return

  window.localStorage.setItem(PROGRESS_KEY, JSON.stringify(progress))
}

export const markEncounterOneStarted = (): EncounterOneProgress => {
  const current = getEncounterOneProgress()

  const next = {
    ...current,
    started: true,
  }

  saveEncounterOneProgress(next)
  return next
}

export const clearWorkshopProgress = (): void => {
  if (!canUseStorage()) return

  window.localStorage.removeItem(PROGRESS_KEY)

  Object.keys(window.localStorage)
    .filter((key) => key.startsWith(LAB_PREFIX))
    .forEach((key) => window.localStorage.removeItem(key))
}

export const getLabDraft = (preset: string): LabDraft | null => {
  if (!canUseStorage()) return null

  try {
    const raw = window.localStorage.getItem(`${LAB_PREFIX}${preset}`)
    if (!raw) return null

    const parsed = JSON.parse(raw) as Partial<LabDraft>

    if (
      typeof parsed.html !== 'string' ||
      typeof parsed.css !== 'string' ||
      typeof parsed.js !== 'string'
    ) {
      return null
    }

    return {
      html: parsed.html,
      css: parsed.css,
      js: parsed.js,
    }
  } catch {
    return null
  }
}

export const saveLabDraft = (preset: string, draft: LabDraft): void => {
  if (!canUseStorage()) return

  window.localStorage.setItem(
    `${LAB_PREFIX}${preset}`,
    JSON.stringify(draft),
  )
}

export const clearLabDraft = (preset: string): void => {
  if (!canUseStorage()) return

  window.localStorage.removeItem(`${LAB_PREFIX}${preset}`)
}
