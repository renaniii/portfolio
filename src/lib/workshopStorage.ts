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

type StoredValue<T> = {
  savedAt: number
  value: T
}

const PROGRESS_KEY = 'programando-futuro.progress.v2'
const LAB_PREFIX = 'programando-futuro.lab.v2.'
const LEGACY_KEYS = [
  'programando-futuro.progress.v1',
  'programando-futuro.lab.v1.base',
  'programando-futuro.lab.v1.encontro-1',
  'programando-futuro.lab.v1.html-basico',
  'programando-futuro.lab.v1.css-basico',
  'programando-futuro.lab.v1.js-basico',
]
const STORAGE_TTL_MS = 12 * 60 * 60 * 1000

const emptyProgress: EncounterOneProgress = {
  started: false,
  checklist: [false, false, false, false],
  completed: false,
}

const canUseStorage = () =>
  typeof window !== 'undefined' && typeof window.localStorage !== 'undefined'

const removeLegacyData = () => {
  if (!canUseStorage()) return

  LEGACY_KEYS.forEach((key) => window.localStorage.removeItem(key))
}

const readStoredValue = <T,>(key: string): T | null => {
  if (!canUseStorage()) return null

  try {
    const raw = window.localStorage.getItem(key)
    if (!raw) return null

    const parsed = JSON.parse(raw) as StoredValue<T>

    if (
      typeof parsed.savedAt !== 'number' ||
      Date.now() - parsed.savedAt > STORAGE_TTL_MS
    ) {
      window.localStorage.removeItem(key)
      return null
    }

    return parsed.value ?? null
  } catch {
    window.localStorage.removeItem(key)
    return null
  }
}

const writeStoredValue = <T,>(key: string, value: T) => {
  if (!canUseStorage()) return

  const stored: StoredValue<T> = {
    savedAt: Date.now(),
    value,
  }

  window.localStorage.setItem(key, JSON.stringify(stored))
}

export const getEncounterOneProgress = (): EncounterOneProgress => {
  removeLegacyData()

  const parsed = readStoredValue<Partial<EncounterOneProgress>>(PROGRESS_KEY)
  if (!parsed) return emptyProgress

  const checklist = Array.isArray(parsed.checklist)
    ? [0, 1, 2, 3].map((index) => Boolean(parsed.checklist?.[index]))
    : emptyProgress.checklist

  return {
    started: Boolean(parsed.started),
    checklist,
    completed: Boolean(parsed.completed),
  }
}

export const saveEncounterOneProgress = (
  progress: EncounterOneProgress,
): void => {
  writeStoredValue(PROGRESS_KEY, progress)
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

  removeLegacyData()
}

export const getLabDraft = (preset: string): LabDraft | null => {
  const parsed = readStoredValue<Partial<LabDraft>>(`${LAB_PREFIX}${preset}`)
  if (!parsed) return null

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
}

export const saveLabDraft = (preset: string, draft: LabDraft): void => {
  writeStoredValue(`${LAB_PREFIX}${preset}`, draft)
}

export const clearLabDraft = (preset: string): void => {
  if (!canUseStorage()) return

  window.localStorage.removeItem(`${LAB_PREFIX}${preset}`)
}
