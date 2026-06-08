// Client-side session: just the user id + name in localStorage (demo-grade,
// same model as the reference platform).
export const USER_ID_KEY = 'towerrush_user_id'
export const USER_NAME_KEY = 'towerrush_user_name'

export function saveUserSession(id: string, name?: string): void {
  if (typeof window === 'undefined') return
  localStorage.setItem(USER_ID_KEY, id)
  if (name) localStorage.setItem(USER_NAME_KEY, name)
}

export function clearUserSession(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem(USER_ID_KEY)
  localStorage.removeItem(USER_NAME_KEY)
}

export function getUserId(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(USER_ID_KEY)
}

export function getUserName(): string | null {
  if (typeof window === 'undefined') return null
  return localStorage.getItem(USER_NAME_KEY)
}

/** Accepts 0244XXXXXXX, 233244XXXXXXX, +233244XXXXXXX → returns 0XXXXXXXXX. */
export function normalizeGhPhone(raw: string): string | null {
  const s = (raw || '').replace(/\s|-/g, '')
  let local = s
  if (s.startsWith('+233')) local = '0' + s.slice(4)
  else if (s.startsWith('233')) local = '0' + s.slice(3)
  return /^0\d{9}$/.test(local) ? local : null
}
