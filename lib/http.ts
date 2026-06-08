export function originFromRequest(req: Request): string {
  const explicit = process.env.NEXT_PUBLIC_APP_URL?.trim()
  if (explicit) return explicit.replace(/\/$/, '')
  const url = new URL(req.url)
  return `${url.protocol}//${url.host}`
}

export function sanitizeReturnPath(raw: string | null | undefined): string {
  if (!raw || !raw.startsWith('/') || raw.startsWith('//')) return '/me'
  return raw
}

/** Stable per-user placeholder email — gateways require one but we don't share real addresses. */
export function placeholderEmail(userId: string): string {
  return `customer+${userId}@customer.app`
}
