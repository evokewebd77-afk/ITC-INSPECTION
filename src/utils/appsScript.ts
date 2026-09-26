/**
 * Shared Apps Script endpoint.
 * Kept in its own module so both `submitForm` (form posts) and `attribution`
 * (contact-click beacons) can reference it without a circular import.
 */
export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbyIEcBoampRq7Cry0jGfOkL9HUCbZ5P5O1VpZxRWiJkkSdqX5uUBecKdDzIlXyuYdLUSQ/exec';
