import { getLeadAttribution, trackFormSubmissionEvent } from './attribution';

export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0jul1NB4G06i8Dl3wvbAoljVDKFIcrexSqjwEuzpeUIwTvNAzUOXUHnct4HwCDsvmiw/exec';

export interface FormDataPayload {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  formName?: string;
}

export const sendFormToGoogleSheet = async (data: FormDataPayload): Promise<boolean> => {
  try {
    const attribution = getLeadAttribution();
    const submissionPage = typeof window !== 'undefined' ? window.location.href : '';
    const submittedAt = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Track Form Event in GA4 / Google Tag Manager
    trackFormSubmissionEvent(data.formName || 'Quote Request Form', data.service);

    // 1. Send via Hidden HTML Form + Iframe (Bypasses Chrome 302 redirect & CORS issues)
    const iframeName = 'hidden_iframe_' + Date.now();
    const iframe = document.createElement('iframe');
    iframe.name = iframeName;
    iframe.style.display = 'none';
    document.body.appendChild(iframe);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = APPS_SCRIPT_URL;
    form.target = iframeName;

    const fields: Record<string, string> = {
      fullName: data.fullName || '',
      company: data.company || '',
      email: data.email || '',
      phone: data.phone || '',
      service: data.service || '',
      message: data.message || '',
      gclid: attribution.gclid || '',
      fbclid: attribution.fbclid || '',
      utm_source: attribution.utm_source || '',
      utm_medium: attribution.utm_medium || '',
      utm_campaign: attribution.utm_campaign || '',
      utm_term: attribution.utm_term || '',
      utm_content: attribution.utm_content || '',
      landingPage: attribution.landingPage || '',
      referrer: attribution.referrer || '',
      submissionPage: submissionPage,
      submittedAt: submittedAt
    };

    Object.keys(fields).forEach((key) => {
      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = key;
      input.value = fields[key];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();

    // 2. Also send via fetch query string as secondary fallback
    const queryParams = new URLSearchParams(fields).toString();
    fetch(`${APPS_SCRIPT_URL}?${queryParams}`, {
      method: 'GET',
      mode: 'no-cors'
    }).catch(() => {});

    // Clean up DOM after submit
    setTimeout(() => {
      try {
        if (form.parentNode) document.body.removeChild(form);
        if (iframe.parentNode) document.body.removeChild(iframe);
      } catch (e) {
        // ignore cleanup error
      }
    }, 3000);

    return true;
  } catch (error) {
    console.error('Error submitting form to Apps Script:', error);
    return false;
  }
};
