// Manual mobile-money deposit: the player sends money to this number, then
// submits the MoMo transaction ID. An admin verifies and credits the wallet.
// Overridable via NEXT_PUBLIC_* env so it works on both client and server.
export const MANUAL_MOMO = {
  number: process.env.NEXT_PUBLIC_MANUAL_MOMO_NUMBER || '0509182654',
  name: process.env.NEXT_PUBLIC_MANUAL_MOMO_NAME || 'James Quayson',
  network: process.env.NEXT_PUBLIC_MANUAL_MOMO_NETWORK || 'Telecel',
}
