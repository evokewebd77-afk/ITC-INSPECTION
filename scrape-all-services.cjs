const fs = require('fs');
const path = require('path');

const servicesList = [
  // Main Categories
  { id: 'explosion-hazardous', file: 'service-explosion-hazardous.html', isMain: true },
  { id: 'advanced-electrical', file: 'service-electrical-electronics.html', isMain: true },
  { id: 'machinery-robotics', file: 'service-robotics-machinery.html', isMain: true },
  { id: 'solar-renewable', file: 'service-solar-renewable.html', isMain: true },
  { id: 'perimeter-security', file: 'service-perimeter-security.html', isMain: true },
  { id: 'cctv-surveillance', file: 'service-cctv-surveillance.html', isMain: true },
  { id: 'building-health', file: 'service-building-health.html', isMain: true },
  { id: 'critical-infrastructure', file: 'service-critical-infrastructure.html', isMain: true },
  { id: 'environment-safety', file: 'service-environment-safety.html', isMain: true },
  { id: 'high-tech', file: 'service-hightech-future.html', isMain: true },

  // Explosion Sub-services
  { id: 'explosion-equipment-inspections', file: 'service-explosion-equipment-inspections.html' },
  { id: 'explosion-area-classification', file: 'service-explosion-area-classification.html' },
  { id: 'explosion-dust-prevention', file: 'service-explosion-dust-prevention.html' },
  { id: 'explosion-hydrogen-plant', file: 'service-explosion-hydrogen-plant.html' },
  { id: 'explosion-bess-assessments', file: 'service-explosion-bess-assessments.html' },

  // Electrical Sub-services
  { id: 'electrical-smart-grid-iot', file: 'service-electrical-smart-grid-iot.html' },
  { id: 'electrical-lithium-battery', file: 'service-electrical-lithium-battery.html' },
  { id: 'electrical-emc-emi', file: 'service-electrical-emc-emi.html' },
  { id: 'electrical-data-center', file: 'service-electrical-data-center.html' },
  { id: 'electrical-cybersecurity', file: 'service-electrical-cybersecurity.html' },

  // Robotics Sub-services
  { id: 'robotics-cobots-safety', file: 'service-robotics-cobots-safety.html' },
  { id: 'robotics-agv-amr', file: 'service-robotics-agv-amr.html' },
  { id: 'robotics-cnc-guarding', file: 'service-robotics-cnc-guarding.html' },
  { id: 'robotics-3d-printing', file: 'service-robotics-3d-printing.html' },
  { id: 'robotics-iot-maintenance', file: 'service-robotics-iot-maintenance.html' },

  // Solar Sub-services
  { id: 'solar-drone-thermographic', file: 'service-solar-drone-thermographic.html' },
  { id: 'solar-wind-turbine', file: 'service-solar-wind-turbine.html' },
  { id: 'solar-floating-plant', file: 'service-solar-floating-plant.html' },
  { id: 'solar-inverter-storage', file: 'service-solar-inverter-storage.html' },
  { id: 'solar-smart-metering', file: 'service-solar-smart-metering.html' },

  // Perimeter Sub-services
  { id: 'perimeter-fiber-optic', file: 'service-perimeter-fiber-optic.html' },
  { id: 'perimeter-drone-surveillance', file: 'service-perimeter-drone-surveillance.html' },
  { id: 'perimeter-cybersecurity', file: 'service-perimeter-cybersecurity.html' },
  { id: 'perimeter-biometric-access', file: 'service-perimeter-biometric-access.html' },
  { id: 'perimeter-critical-infrastructure', file: 'service-perimeter-critical-infrastructure.html' },

  // CCTV Sub-services
  { id: 'cctv-ai-analytics', file: 'service-cctv-ai-analytics.html' },
  { id: 'cctv-ip-network-security', file: 'service-cctv-ip-network-security.html' },
  { id: 'cctv-thermal-imaging', file: 'service-cctv-thermal-imaging.html' },
  { id: 'cctv-drone-integration', file: 'service-cctv-drone-integration.html' },
  { id: 'cctv-chain-of-custody', file: 'service-cctv-chain-of-custody.html' },

  // Building Sub-services
  { id: 'building-air-quality', file: 'service-building-air-quality.html' },
  { id: 'building-iot-safety', file: 'service-building-iot-safety.html' },
  { id: 'building-green-energy', file: 'service-building-green-energy.html' },
  { id: 'building-acoustic-lighting', file: 'service-building-acoustic-lighting.html' },
  { id: 'building-human-centric-lighting', file: 'service-building-human-centric-lighting.html' },

  // Critical Sub-services
  { id: 'critical-airport-security', file: 'service-critical-airport-security.html' },
  { id: 'critical-railway-signaling', file: 'service-critical-railway-signaling.html' },
  { id: 'critical-port-marine', file: 'service-critical-port-marine.html' },
  { id: 'critical-nuclear-perimeter', file: 'service-critical-nuclear-perimeter.html' },
  { id: 'critical-smart-city', file: 'service-critical-smart-city.html' },

  // Environment Sub-services
  { id: 'environment-fire-detection', file: 'service-environment-fire-detection.html' },
  { id: 'environment-radiation-safety', file: 'service-environment-radiation-safety.html' },
  { id: 'environment-water-quality', file: 'service-environment-water-quality.html' },
  { id: 'environment-emr-emf', file: 'service-environment-emr-emf.html' },
  { id: 'environment-drone-compliance', file: 'service-environment-drone-compliance.html' },

  // High-Tech Sub-services
  { id: 'hightech-industry4', file: 'service-hightech-industry4.html' },
  { id: 'hightech-ev-charging', file: 'service-hightech-ev-charging.html' },
  { id: 'hightech-hydrogen-fueling', file: 'service-hightech-hydrogen-fueling.html' },
  { id: 'hightech-ai-predictive', file: 'service-hightech-ai-predictive.html' },
  { id: 'hightech-cyber-physical', file: 'service-hightech-cyber-physical.html' }
];

function cleanText(htmlStr) {
  if (!htmlStr) return '';
  return htmlStr
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function parseContentBlock(html, titleKeyword) {
  const regex = new RegExp(`<div class="content-block">\\s*<h[34]>[^<]*${titleKeyword}[^<]*<\\/h[34]>\\s*<p>([\\s\\S]*?)<\\/p>\\s*<\\/div>`, 'i');
  const match = html.match(regex);
  if (match) {
    return cleanText(match[1]);
  }
  
  // Fallback regex if wrapper div is missing
  const fallbackRegex = new RegExp(`<h[34]>[^<]*${titleKeyword}[^<]*<\\/h[34]>\\s*<p>([\\s\\S]*?)<\\/p>`, 'i');
  const fbMatch = html.match(fallbackRegex);
  return fbMatch ? cleanText(fbMatch[1]) : '';
}

function parsePage(html, item) {
  // Title
  const titleMatch = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  const title = titleMatch ? cleanText(titleMatch[1]) : item.id;

  // Hero Subtitle / Description
  const subMatch = html.match(/<p class="(?:hero-subheadline|service-hero-subtitle|hero-description)"[^>]*>([\s\S]*?)<\/p>/i);
  const desc = subMatch ? cleanText(subMatch[1]) : '';

  // Detail Section H2 Title and paragraph
  const detailH2Match = html.match(/<div class="detail-content">\s*<h2[^>]*>([\s\S]*?)<\/h2>\s*<p[^>]*>([\s\S]*?)<\/p>/i);
  const detailIntroTitle = detailH2Match ? cleanText(detailH2Match[1]) : '';
  const detailIntroDesc = detailH2Match ? cleanText(detailH2Match[2]) : '';

  // Parse Content Blocks
  const overview = parseContentBlock(html, 'Overview') || detailIntroDesc || desc;
  const keyInspectionAreas = parseContentBlock(html, 'Key Inspection Areas');
  const scopeOfInspection = parseContentBlock(html, 'Scope of Inspection');
  const keyTests = parseContentBlock(html, 'Key Tests');
  const qualityIssues = parseContentBlock(html, 'Quality Issues');
  const riskAndSafetyIssues = parseContentBlock(html, 'Risk (?:and|&) Safety Issues');
  const complianceAndCertification = parseContentBlock(html, 'Compliance (?:and|&) Certification');

  // Sub-services or Feature Items list
  const subServices = [];

  // Case A: Main category page with <a href="..." class="service-feature-card"> or subservice cards
  const cardRegex = /<a href="([^"]+)" class="(?:service-feature-card|feature-item-clickable)">[\s\S]*?<h[45]>([\s\S]*?)<\/h[45]>[\s\S]*?<p>([\s\S]*?)<\/p>/gi;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    const rawLink = match[1];
    let routeLink = '#';
    if (rawLink.endsWith('.html')) {
      const pageName = rawLink.replace('.html', '').replace('service-', '');
      routeLink = `/services/${pageName}`;
    }
    subServices.push({
      title: cleanText(match[2]),
      desc: cleanText(match[3]),
      link: routeLink
    });
  }

  // Case B: Subservice page with <li class="feature-item-clickable"> or <ul class="feature-list">
  if (subServices.length === 0) {
    const liRegex = /<li class="feature-item-clickable"[^>]*>[\s\S]*?<strong>([\s\S]*?)<\/strong>[\s\S]*?<p>([\s\S]*?)<\/p>/gi;
    let liMatch;
    while ((liMatch = liRegex.exec(html)) !== null) {
      const itemTitle = cleanText(liMatch[1]);
      const itemDesc = cleanText(liMatch[2]);
      
      // Check if there is an <a> tag inside
      const linkMatch = liMatch[0].match(/href="([^"]+)"/i);
      let routeLink = '#';
      if (linkMatch && linkMatch[1].endsWith('.html')) {
        const pageName = linkMatch[1].replace('.html', '').replace('service-', '');
        routeLink = `/services/${pageName}`;
      }
      
      subServices.push({
        title: itemTitle,
        desc: itemDesc,
        link: routeLink
      });
    }
  }

  // Parse Benefits / Why Choose Us
  const benefits = [];
  const benefitRegex = /<div class="(?:benefit-item|why-choose-item|feature-item)">[\s\S]*?<h[45]>([\s\S]*?)<\/h[45]>[\s\S]*?<p>([\s\S]*?)<\/p>/gi;
  let bMatch;
  while ((bMatch = benefitRegex.exec(html)) !== null) {
    benefits.push({
      title: cleanText(bMatch[1]),
      desc: cleanText(bMatch[2])
    });
  }

  return {
    id: item.id,
    isMain: !!item.isMain,
    title,
    desc,
    detailIntroTitle,
    detailIntroDesc,
    overview,
    keyInspectionAreas,
    scopeOfInspection,
    keyTests,
    qualityIssues,
    riskAndSafetyIssues,
    complianceAndCertification,
    subServices,
    benefits
  };
}

async function scrapeAll() {
  const results = {};
  console.log(`Starting fetch for ${servicesList.length} pages from https://inspection.itcindia.org ...`);

  for (const item of servicesList) {
    const url = `https://inspection.itcindia.org/${item.file}`;
    try {
      const res = await fetch(url);
      if (!res.ok) {
        console.error(`Failed ${url}: ${res.status}`);
        continue;
      }
      const html = await res.text();
      const parsed = parsePage(html, item);
      results[item.id] = parsed;
      console.log(`✓ Scraped: ${item.id} (${parsed.subServices.length} sub-items, ${parsed.benefits.length} benefits)`);
    } catch (err) {
      console.error(`Error ${item.id}:`, err.message);
    }
  }

  fs.writeFileSync('./scraped_services_data.json', JSON.stringify(results, null, 2));
  console.log('Successfully saved complete dataset to scraped_services_data.json!');
}

scrapeAll();
