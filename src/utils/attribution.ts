/**
 * Lead Attribution & Form Conversion Event Tracker
 * Automatically captures GCLID (Google Click ID), FBCLID, UTM Parameters, Referrer, and Landing Page
 */

import { APPS_SCRIPT_URL } from './appsScript';

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

export const getWhatsAppTrackedUrl = (phone: string = '919056544487', customMsg?: string): string => {
  const attribution = getLeadAttribution();
  let baseMsg = customMsg || 'Hello ITC Inspection Team! I am interested in your inspection & certification services. Please share details.';

  const refInfo: string[] = [];
  if (attribution.gclid) refInfo.push(`GCLID: ${attribution.gclid}`);
  if (attribution.utm_source) refInfo.push(`Source: ${attribution.utm_source}`);
  if (attribution.utm_campaign) refInfo.push(`Campaign: ${attribution.utm_campaign}`);

  if (refInfo.length > 0) {
    baseMsg += `\n\n[Ref Code: ${refInfo.join(' | ')}]`;
  }

  return `https://wa.me/${phone}?text=${encodeURIComponent(baseMsg)}`;
};

export const trackClickEvent = (type: 'whatsapp' | 'phone' | 'email', label?: string): void => {
  if (typeof window === 'undefined') return;

  const attribution = getLeadAttribution();

  // 1. GA4 Event
  if ((window as any).gtag) {
    (window as any).gtag('event', `${type}_click`, {
      event_category: 'Direct Lead Contact',
      event_label: label || type,
      gclid: attribution.gclid || '',
      utm_source: attribution.utm_source || 'Direct',
      utm_medium: attribution.utm_medium || '',
      utm_campaign: attribution.utm_campaign || '',
      value: 1,
    });
  }

  // 2. GTM Event
  if ((window as any).dataLayer) {
    (window as any).dataLayer.push({
      event: `${type}_click`,
      contact_type: type,
      gclid: attribution.gclid || '',
      utm_source: attribution.utm_source || '',
      utm_campaign: attribution.utm_campaign || '',
    });
  }

  // 3. Email notification via Apps Script
  sendContactClickNotification(type, label || type);
};

export type ContactClickType = 'whatsapp' | 'phone' | 'email';

const CONTACT_CLICK_MIN_INTERVAL_MS = 3000;
let lastContactClick: { key: string; at: number } | null = null;

const sendContactClickNotification = (type: ContactClickType, buttonName: string): void => {
  if (typeof window === 'undefined') return;

  // Suppress accidental double-taps without hiding genuine repeat clicks.
  const key = `${type}:${buttonName}`;
  const now = Date.now();
  if (lastContactClick && lastContactClick.key === key && now - lastContactClick.at < CONTACT_CLICK_MIN_INTERVAL_MS) {
    return;
  }
  lastContactClick = { key, at: now };

  const attribution = getLeadAttribution();

  const fields: Record<string, string> = {
    eventType: 'contact_click',
    clickType: type,
    buttonName: buttonName,
    source: window.location.href,
    pagePath: window.location.pathname,
    referrer: attribution.referrer || '',
    landingPage: attribution.landingPage || '',
    gclid: attribution.gclid || '',
    fbclid: attribution.fbclid || '',
    utm_source: attribution.utm_source || '',
    utm_medium: attribution.utm_medium || '',
    utm_campaign: attribution.utm_campaign || '',
    utm_term: attribution.utm_term || '',
    utm_content: attribution.utm_content || '',
    clickedAt: new Date().toISOString(),
  };

  const query = new URLSearchParams(fields).toString();

  // sendBeacon survives the immediate unload caused by tel: links and new-tab
  // navigation. text/plain is CORS-safelisted, so no preflight is required.
  if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
    try {
      const blob = new Blob([JSON.stringify(fields)], { type: 'text/plain;charset=UTF-8' });
      if (navigator.sendBeacon(APPS_SCRIPT_URL, blob)) return;
    } catch (e) {
      // fall through to fetch
    }
  }

  // keepalive also outlives unload
  try {
    fetch(`${APPS_SCRIPT_URL}?${query}`, { method: 'GET', mode: 'no-cors', keepalive: true }).catch(() => {});
    return;
  } catch (e) {
    // fall through to image pixel
  }

  // Last resort: image pixel GET
  try {
    const img = new Image();
    img.src = `${APPS_SCRIPT_URL}?${query}`;
  } catch (e) {
    // give up silently - never block the user's click
  }
};
