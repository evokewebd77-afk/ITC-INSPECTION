const fs = require('fs');
const path = require('path');

const jsonPath = path.join(__dirname, 'scraped_services_data.json');
const tsPath = path.join(__dirname, 'src', 'data', 'services.tsx');

if (!fs.existsSync(jsonPath)) {
  console.error('scraped_services_data.json not found!');
  process.exit(1);
}

const scrapedData = JSON.parse(fs.readFileSync(jsonPath, 'utf8'));
let servicesTsContent = '';
if (fs.existsSync(tsPath)) {
  servicesTsContent = fs.readFileSync(tsPath, 'utf8');
}

// Icon mappings for main service categories
const iconMap = {
  'explosion-hazardous': '<Flame size={32} strokeWidth={1.5} />',
  'advanced-electrical': '<Zap size={32} strokeWidth={1.5} />',
  'machinery-robotics': '<Settings size={32} strokeWidth={1.5} />',
  'solar-renewable': '<Sun size={32} strokeWidth={1.5} />',
  'perimeter-security': '<ShieldAlert size={32} strokeWidth={1.5} />',
  'cctv-surveillance': '<Camera size={32} strokeWidth={1.5} />',
  'building-health': '<Building size={32} strokeWidth={1.5} />',
  'critical-infrastructure': '<Map size={32} strokeWidth={1.5} />',
  'environment-safety': '<ShieldAlert size={32} strokeWidth={1.5} />',
  'high-tech': '<Zap size={32} strokeWidth={1.5} />'
};

// Default subservice icon
const defaultSubIcon = '<Settings size={32} strokeWidth={1.5} />';

// Extract existing image URLs if available
const imgMap = {};
const imgRegex = /id:\s*'([^']+)'[\s\S]*?img:\s*'([^']+)'/g;
let m;
while ((m = imgRegex.exec(servicesTsContent)) !== null) {
  imgMap[m[1]] = m[2];
}

function esc(str) {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\n/g, ' ');
}

const newServiceEntries = [];

for (const [id, data] of Object.entries(scrapedData)) {
  const icon = iconMap[id] || defaultSubIcon;
  const img = imgMap[id] || 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';

  const subServicesArray = (data.subServices || []).map(sub => {
    return `{ title: '${esc(sub.title)}', desc: '${esc(sub.desc)}', link: '${esc(sub.link)}' }`;
  }).join(',\n        ');

  const defaultWhyChoose = [
    { title: 'International Standards Compliance', desc: 'Certified inspection processes following IEC, ISO, IEEE, and local regulatory standards' },
    { title: 'Fast & Non-Intrusive Audits', desc: 'State-of-the-art diagnostic technology ensuring thorough inspection with minimal operational downtime' },
    { title: 'Expert Certified Engineers', desc: 'Certified professionals with extensive domain expertise across industrial categories' },
    { title: 'Comprehensive Regulatory Documentation', desc: 'Detailed inspection reports with photographic evidence, findings, and support for regulatory submissions' }
  ];

  const rawWhyChoose = (data.benefits && data.benefits.length > 0) ? data.benefits : defaultWhyChoose;
  const whyChooseArray = rawWhyChoose.map(item => {
    return `{ title: '${esc(item.title)}', desc: '${esc(item.desc)}' }`;
  }).join(',\n        ');

  const entry = `  { 
    id: '${id}',
    isMain: ${data.isMain ? 'true' : 'false'},
    icon: ${icon}, 
    title: '${esc(data.title)}', 
    desc: '${esc(data.desc)}',
    longDesc: '${esc(data.desc || data.overview)}',
    img: '${img}',
    extendedContent: {
      detailIntroTitle: '${esc(data.detailIntroTitle || '')}',
      detailIntroDesc: '${esc(data.detailIntroDesc || '')}',
      subServices: [
        ${subServicesArray}
      ],
      whyChooseUs: [
        ${whyChooseArray}
      ],
      overview: '${esc(data.overview || data.desc)}',
      keyInspectionAreas: '${esc(data.keyInspectionAreas || 'International standards (IEC, ISO, IEEE), national codes (IS/IEC standards), local regulatory requirements, industry best practices, and facility-specific protocols.')}',
      scopeOfInspection: '${esc(data.scopeOfInspection || 'Documentation review, visual inspection of systems and equipment, functional testing, compliance assessment, safety evaluation, and risk identification.')}',
      keyTests: '${esc(data.keyTests || 'Functional testing, performance measurements, safety system verification, quality assurance checks, and operational testing.')}',
      qualityIssues: '${esc(data.qualityIssues || 'Common nonconformities include improper installation, non-compliance with standards, missing documentation, and inadequate safety measures.')}',
      riskAndSafetyIssues: '${esc(data.riskAndSafetyIssues || 'Primary risks include system failures, safety hazards, non-compliance penalties, and operational disruptions.')}',
      complianceAndCertification: '${esc(data.complianceAndCertification || 'Deliverables include detailed inspection reports with photographic evidence, nonconformity register, compliance certificates, and regulatory support.')}'
    }
  }`;

  newServiceEntries.push(entry);
}

const newTsFileContent = `import { 
  Flame, Zap, Settings, Sun, 
  ShieldAlert, Camera, Building, 
  Map
} from 'lucide-react';

export const servicesData = [
${newServiceEntries.join(',\n')}
];

export const mainServiceIds = [
  'explosion-hazardous', 'advanced-electrical', 'machinery-robotics', 
  'solar-renewable', 'perimeter-security', 'cctv-surveillance', 
  'building-health', 'critical-infrastructure', 'environment-safety', 'high-tech'
];
`;

fs.writeFileSync(tsPath, newTsFileContent, 'utf8');
console.log('Successfully updated src/data/services.tsx with exact content from scraped_services_data.json!');
