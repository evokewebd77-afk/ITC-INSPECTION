/**
 * Shared Apps Script endpoint.
 * Kept in its own module so both `submitForm` (form posts) and `attribution`
 * (contact-click beacons) can reference it without a circular import.
 */
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbUzHBjqopBioIRPC0bFwGP0OYU_QYUiFwdmSAOsbBmeYXcoQ5JAFhJZTVbscMR_7hK/exec';
