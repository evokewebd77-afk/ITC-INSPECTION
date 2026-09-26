/**
 * ITC Inspection - Google Apps Script endpoint
 *
 * Handles two request types on one /exec URL:
 *   1. Form submissions   (eventType absent)  -> sheet row + email
 *   2. Contact clicks     (eventType = 'contact_click') -> email only
 *
 * ------------------------------------------------------------------
 * IMPORTANT - MERGE, DO NOT OVERWRITE
 * ------------------------------------------------------------------
 * This project's Apps Script source was not in the repository, so the
 * form-submission handler below (handleFormSubmission_) is a RECONSTRUCTED
 * placeholder based on the field names the front end sends
 * (see src/utils/submitForm.ts).
 *
 * If you already have a working Apps Script, do NOT paste this over it.
 * Instead copy across ONLY these parts into your existing file:
 *   - CONFIG
 *   - doGet / doPost (routing)
 *   - parseRequest_ / isClickEvent_ / handleContactClick_ / sendMail_ / gifResponse_
 * and point your existing form handler at handleFormSubmission_.
 *
 * If you DO paste this over the top, you must set SHEET_ID below and then
 * re-test the quote/enquiry forms before going live.
 */

/** Where click + form notification emails are delivered. */
var NOTIFICATION_EMAIL = 'damnart.seo@gmal.com';

/** Subject line prefix, so click alerts are easy to filter in Gmail. */
var EMAIL_SUBJECT_PREFIX = '[ITC]';

/** Only used by handleFormSubmission_. Safe to leave blank if you merge. */
var SHEET_ID = '';
var SHEET_NAME = 'Leads';

/** Ignore repeat clicks on the same button within this many ms. */
var CLIENT_SIDE_THROTTLE_MS = 3000;

/* -------------------------------------------------------------------------
 * Entry points
 * ---------------------------------------------------------------------- */

function doGet(e) {
  return route_(parseRequest_(e));
}

function doPost(e) {
  return route_(parseRequest_(e));
}

function route_(data) {
  try {
    if (isClickEvent_(data)) {
      handleContactClick_(data);
    } else {
      handleFormSubmission_(data);
    }
    return textResponse_('OK');
  } catch (err) {
    // Never surface a stack trace to the browser; log it for the developer.
    console.error('Apps Script error', err);
    return textResponse_('ERROR: ' + err);
  }
}

/* -------------------------------------------------------------------------
 * Request parsing
 *
 * Accepts all three transports the front end uses:
 *   - GET  query string        (fetch / image-pixel fallback)
 *   - POST application/x-www-form-urlencoded  (hidden <form> submit)
 *   - POST text/plain JSON     (navigator.sendBeacon)
 * ---------------------------------------------------------------------- */

function parseRequest_(e) {
  var data = {};

  if (e && e.parameter) {
    Object.keys(e.parameter).forEach(function (k) {
      data[k] = e.parameter[k];
    });
  }

  if (e && e.postData && e.postData.contents) {
    var raw = e.postData.contents;
    var type = (e.postData.type || '').toLowerCase();

    if (type.indexOf('application/json') !== -1 || raw.charAt(0) === '{') {
      try {
        var parsed = JSON.parse(raw);
        Object.keys(parsed).forEach(function (k) {
          data[k] = parsed[k];
        });
      } catch (err) {
        // not JSON, fall through to urlencoded parsing
      }
    }

    if (Object.keys(data).length === 0 || type.indexOf('form-urlencoded') !== -1) {
      raw.split('&').forEach(function (pair) {
        if (!pair) return;
        var idx = pair.indexOf('=');
        var key = idx === -1 ? pair : pair.slice(0, idx);
        var val = idx === -1 ? '' : pair.slice(idx + 1);
        data[decodeURIComponent(key.replace(/\+/g, ' '))] = decodeURIComponent(val.replace(/\+/g, ' '));
      });
    }
  }

  return data;
}

function isClickEvent_(data) {
  return data && data.eventType === 'contact_click';
}

/* -------------------------------------------------------------------------
 * Contact click -> email notification
 * ---------------------------------------------------------------------- */

function handleContactClick_(data) {
  var clickType = data.clickType || 'unknown';
  var typeLabel = clickType === 'phone' ? 'CALL'
    : clickType === 'whatsapp' ? 'WHATSAPP'
    : clickType === 'email' ? 'EMAIL'
    : String(clickType).toUpperCase();

  var buttonName = data.buttonName || '(unlabelled)';
  var serviceLabel = serviceLabel_(data);
  var subject = EMAIL_SUBJECT_PREFIX + ' ' + serviceLabel + ' - ' + typeLabel + ' click - ' + buttonName;

  var rows = [
    ['Service', serviceLabel],
    ['Button', buttonName],
    ['Action', typeLabel],
    ['Source (page)', data.source || data.pagePath || ''],
    ['Clicked at (IST)', safeFormatIst_(data.clickedAt)]
  ];

  // A bad attribution value must never stop the alert from being sent.
  try {
    appendAttributionRows_(rows, data);
  } catch (err) {
    console.error('attribution row build failed', err);
  }

  sendMail_(subject, buildClickHtml_(typeLabel, buttonName, rows), buildClickText_(typeLabel, buttonName, rows));
}

/** formatIst_ that can never throw - falls back to the raw value. */
function safeFormatIst_(iso) {
  try {
    return formatIst_(iso);
  } catch (err) {
    console.error('formatIst_ failed', err);
    return iso ? String(iso) : '';
  }
}

/**
 * Derives a human-readable service name from the page the click happened on, so
 * the alert subject identifies the service without the client having to send it.
 *   /electrical-safety-audit      -> Electrical Safety Audit
 *   /services/fire-safety-audit   -> Fire Safety Audit
 *   /contact                      -> Contact
 */
function serviceLabel_(data) {
  var raw = data.pagePath || '';

  if (!raw && data.source) {
    try {
      raw = new URL(data.source).pathname;
    } catch (err) {
      raw = '';
    }
  }

  raw = String(raw).split('?')[0].split('#')[0];
  var segments = raw.split('/').filter(Boolean);
  if (!segments.length) return 'Home';

  return titleCaseSlug_(segments[segments.length - 1]);
}

function titleCaseSlug_(slug) {
  var words = String(slug)
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .split(' ')
    .filter(Boolean)
    .map(function (w) {
      return w.charAt(0).toUpperCase() + w.slice(1);
    });

  return words.length ? words.join(' ') : 'Website';
}

/** Appends attribution rows only when the value is actually present. */
function appendAttributionRows_(rows, data) {
  var attributionFields = [
    ['GCLID', 'gclid'],
    ['FBCLID', 'fbclid'],
    ['UTM Source', 'utm_source'],
    ['UTM Medium', 'utm_medium'],
    ['UTM Campaign', 'utm_campaign'],
    ['UTM Term', 'utm_term'],
    ['UTM Content', 'utm_content'],
    ['Referrer', 'referrer'],
    ['First landing page', 'landingPage']
  ];

  attributionFields.forEach(function (pair) {
    var label = pair[0];
    var key = pair[1];
    var value = data[key] ? String(data[key]).trim() : '';
    if (value) rows.push([label, value]);
  });
}

function buildClickHtml_(typeLabel, buttonName, rows) {
  var accent = typeLabel === 'WHATSAPP' ? '#25D366' : typeLabel === 'CALL' ? '#0d9488' : '#2563eb';

  var trs = rows.map(function (r) {
    return '<tr>'
      + '<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#64748b;font-family:Arial,sans-serif;font-size:13px;white-space:nowrap;vertical-align:top;">' + escapeHtml_(r[0]) + '</td>'
      + '<td style="padding:8px 12px;border-bottom:1px solid #e2e8f0;color:#0f172a;font-family:Arial,sans-serif;font-size:13px;word-break:break-all;">' + escapeHtml_(r[1]) + '</td>'
      + '</tr>';
  }).join('');

  return '<div style="font-family:Arial,sans-serif;max-width:640px;">'
    + '<div style="background:' + accent + ';color:#fff;padding:14px 18px;font-size:16px;font-weight:bold;">'
    + escapeHtml_(typeLabel) + ' button clicked</div>'
    + '<div style="padding:16px 18px;border:1px solid #e2e8f0;border-top:none;">'
    + '<div style="font-size:15px;color:#0f172a;margin-bottom:12px;">'
    + escapeHtml_(buttonName) + ' was clicked on the website.</div>'
    + '<table style="width:100%;border-collapse:collapse;">' + trs + '</table>'
    + '</div></div>';
}

function buildClickText_(typeLabel, buttonName, rows) {
  var lines = [typeLabel + ' button clicked', '', buttonName + ' was clicked on the website.', ''];
  rows.forEach(function (r) {
    lines.push(r[0] + ': ' + r[1]);
  });
  return lines.join('\n');
}

/* -------------------------------------------------------------------------
 * Form submission -> sheet + email
 *
 * RECONSTRUCTED PLACEHOLDER. Replace the body of handleFormSubmission_ with
 * your existing working logic when merging into your live script.
 * ---------------------------------------------------------------------- */

function handleFormSubmission_(data) {
  var subject = EMAIL_SUBJECT_PREFIX + ' New enquiry - ' + (data.service || data.formName || 'Website form');

  var rows = [
    ['Name', data.fullName || ''],
    ['Company', data.company || ''],
    ['Email', data.email || ''],
    ['Phone', data.phone || ''],
    ['Service', data.service || ''],
    ['Site location', data.siteLocation || ''],
    ['Facility type', data.facilityType || ''],
    ['Message', data.message || ''],
    ['Form', data.formName || ''],
    ['Submitted at (IST)', data.submittedAt || safeFormatIst_(new Date().toISOString())]
  ];

  appendAttributionRows_(rows, data);
  rows.push(['Submission page', data.submissionPage || '']);

  if (SHEET_ID) {
    try {
      var sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
      if (sheet) {
        sheet.appendRow(rows.map(function (r) { return r[1]; }));
      }
    } catch (err) {
      console.error('Sheet append failed', err);
    }
  }

  sendMail_(subject, buildClickHtml_('ENQUIRY', data.fullName || 'Website form', rows),
    buildClickText_('ENQUIRY', data.fullName || 'Website form', rows));
}

/* -------------------------------------------------------------------------
 * Helpers
 * ---------------------------------------------------------------------- */

function sendMail_(subject, htmlBody, textBody) {
  if (!NOTIFICATION_EMAIL) {
    console.warn('NOTIFICATION_EMAIL is not set - email not sent');
    return;
  }
  MailApp.sendEmail({
    to: NOTIFICATION_EMAIL,
    subject: subject,
    body: textBody,
    htmlBody: htmlBody
  });
}

function escapeHtml_(value) {
  return String(value === undefined || value === null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function formatIst_(iso) {
  if (!iso) return '';
  var d = new Date(iso);
  if (isNaN(d.getTime())) return String(iso);
  // Every unquoted character in a Utilities.formatDate pattern is treated as a
  // pattern character, so the zone label is appended rather than embedded -
  // embedding it makes Apps Script throw "Invalid argument".
  return Utilities.formatDate(d, 'Asia/Kolkata', 'dd MMM yyyy, HH:mm:ss') + ' IST';
}

function textResponse_(message) {
  return ContentService.createTextOutput(message).setMimeType(ContentService.MimeType.TEXT);
}

/**
 * Not used by the current front end (it posts/GETs rather than loading an
 * Image), but kept so the endpoint is safe if anyone adds a pixel fallback.
 */
function gifResponse_() {
  var gif = 'R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  var encoded = Utilities.base64Decode(gif);
  return ContentService.createOutput(encoded).setMimeType('image/gif');
}
