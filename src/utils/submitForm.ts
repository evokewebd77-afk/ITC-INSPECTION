export const APPS_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby0jul1NB4G06i8Dl3wvbAoljVDKFIcrexSqjwEuzpeUIwTvNAzUOXUHnct4HwCDsvmiw/exec';

export interface FormDataPayload {
  fullName?: string;
  company?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
}

export const sendFormToGoogleSheet = async (data: FormDataPayload): Promise<boolean> => {
  try {
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
      message: data.message || ''
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
