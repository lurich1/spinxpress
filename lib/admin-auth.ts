/** Demo admin gate: the request must carry the ADMIN_PASSWORD in a header. */
export function isAdmin(request: Request): boolean {
  const pw = process.env.ADMIN_PASSWORD?.trim()
  if (!pw) return false
  const provided = (request.headers.get('x-admin-password') ?? '').trim()
  return provided.length > 0 && provided === pw
}
