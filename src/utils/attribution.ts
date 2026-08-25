/**
 * Lead Attribution & Form Conversion Event Tracker
 * Automatically captures GCLID (Google Click ID), FBCLID, UTM Parameters, Referrer, and Landing Page
 */

export interface LeadAttributionData {
  gclid?: string;
  fbclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  landingPage?: string;
  referrer?: string;
  submissionPage?: string;
  submittedAt?: string;
}

const STORAGE_KEY = 'itc_lead_attribution';

export const initLeadAttribution = (): void => {
  if (typeof window === 'undefined') return;

  try {
    const urlParams = new URLSearchParams(window.location.search);
    const existing = getLeadAttribution();

    const gclid = urlParams.get('gclid') || existing.gclid || '';
    const fbclid = urlParams.get('fbclid') || existing.fbclid || '';
    const utm_source = urlParams.get('utm_source') || existing.utm_source || '';
    const utm_medium = urlParams.get('utm_medium') || existing.utm_medium || '';
    const utm_campaign = urlParams.get('utm_campaign') || existing.utm_campaign || '';
    const utm_term = urlParams.get('utm_term') || existing.utm_term || '';
    const utm_content = urlParams.get('utm_content') || existing.utm_content || '';
    const landingPage = existing.landingPage || window.location.href;
    const referrer = existing.referrer || (document.referrer ? document.referrer : 'Direct');

    const updatedData: LeadAttributionData = {
      gclid,
      fbclid,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      landingPage,
      referrer,
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(updatedData));
  } catch (err) {
    // Ignore storage quota or cross-origin restrictions
  }
};

export const getLeadAttribution = (): LeadAttributionData => {
  if (typeof window === 'undefined') return {};

  try {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) return JSON.parse(sessionData);

    const localData = localStorage.getItem(STORAGE_KEY);
    if (localData) return JSON.parse(localData);
  } catch (e) {
    // Fallback
  }

  return {};
};

export const trackFormSubmissionEvent = (formName: string, serviceName?: string): void => {
  if (typeof window === 'undefined') return;

  const attribution = getLeadAttribution();

  // 1. Google Analytics 4 (GA4) / GTAG Conversion Event
  if ((window as any).gtag) {
    (window as any).gtag('event', 'generate_lead', {
      event_category: 'Lead Form',
      event_label: serviceName || formName,
      gclid: attribution.gclid || '',
      utm_source: attribution.utm_source || 'Direct',
      utm_medium: attribution.utm_medium || '',
      utm_campaign: attribution.utm_campaign || '',
      value: 1,
    });
  }

  // 2. Google Tag Manager / dataLayer Event
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: 'form_submission',
      form_name: formName,
      service_name: serviceName || '',
      gclid: attribution.gclid || '',
      utm_source: attribution.utm_source || '',
      utm_medium: attribution.utm_medium || '',
      utm_campaign: attribution.utm_campaign || '',
    });
  }
};
