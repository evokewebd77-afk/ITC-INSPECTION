/**
 * Shared Apps Script endpoint.
 * Kept in its own module so both `submitForm` (form posts) and `attribution`
 * (contact-click beacons) can reference it without a circular import.
 */
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbz6fYdvQWJ8f5GrRwrIB2r24jxadk1uCtWlsM-z1-hEsnr-XV2UQHle4vYCKtD7M2oO8A/exec';
