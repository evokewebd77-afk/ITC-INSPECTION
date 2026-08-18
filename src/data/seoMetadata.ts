export interface SEOMetadata {
  title: string;
  description: string;
}

export const seoMetadataMap: Record<string, SEOMetadata> = {
  // Static Pages
  '/': {
    title: 'ITC Inspection Services | Industrial Safety & Compliance',
    description: 'Explore ITC Inspection inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance today.'
  },
  '/about': {
    title: 'About ITC Inspection | Safety & Compliance Experts',
    description: 'Explore about ITC Inspection inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  '/services': {
    title: 'Inspection Services | Industrial Safety & Compliance',
    description: 'Explore inspection services inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  '/blog': {
    title: 'ITC Inspection Blog | Safety & Compliance Insights',
    description: 'Explore inspection blog inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance today.'
  },
  '/contact': {
    title: 'Contact ITC Inspection | Inspection & Compliance Services',
    description: 'Explore contact ITC Inspection inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  '/privacy': {
    title: 'ITC Inspection Privacy Policy | Website Data Use & Compliance',
    description: 'Explore privacy policy inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance today.'
  },
  '/terms': {
    title: 'ITC Inspection Terms & Conditions | Website Use & Compliance',
    description: 'Explore terms and conditions inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },

  // Service & Sub-service Routes
  'explosion-hazardous': {
    title: 'Explosion Hazardous | ITC Inspection Services & Compliance',
    description: 'Explore explosion hazardous inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'advanced-electrical': {
    title: 'Advanced Electrical | ITC Inspection Services & Compliance',
    description: 'Explore advanced electrical inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'machinery-robotics': {
    title: 'Machinery Robotics | ITC Inspection Services & Compliance',
    description: 'Explore machinery robotics inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-renewable': {
    title: 'Solar Renewable | ITC Inspection Services & Compliance',
    description: 'Explore solar renewable inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance today.'
  },
  'perimeter-security': {
    title: 'Perimeter Security | ITC Inspection Services & Compliance',
    description: 'Explore perimeter security inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-surveillance': {
    title: 'CCTV Surveillance | ITC Inspection Services & Compliance',
    description: 'Explore CCTV surveillance inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-health': {
    title: 'Building Health | ITC Inspection Services & Compliance',
    description: 'Explore building health inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance today.'
  },
  'critical-infrastructure': {
    title: 'Critical Infrastructure Inspection | ITC India Services',
    description: 'Explore critical infrastructure inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-safety': {
    title: 'Environment Safety | ITC Inspection Services & Compliance',
    description: 'Explore environment safety inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'high-tech': {
    title: 'High-Tech Inspection & Compliance Services | ITC India',
    description: 'Explore high tech inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance requirements.'
  },
  'explosion-equipment-inspections': {
    title: 'Explosion Equipment Inspections | ITC Inspection Services',
    description: 'Explore explosion equipment inspections inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'explosion-area-classification': {
    title: 'Explosion Area Classification | ITC Inspection Services',
    description: 'Explore explosion area classification inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'explosion-dust-prevention': {
    title: 'Explosion Dust Prevention | ITC Inspection Services',
    description: 'Explore explosion dust prevention inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'explosion-hydrogen-plant': {
    title: 'Explosion Hydrogen Plant | ITC Inspection Services',
    description: 'Explore explosion hydrogen plant inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'explosion-bess-assessments': {
    title: 'Explosion BESS Assessments | ITC Inspection Services',
    description: 'Explore explosion BESS assessments inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'electrical-smart-grid-iot': {
    title: 'Electrical Smart Grid IoT | ITC Inspection Services',
    description: 'Explore electrical smart grid IoT inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'electrical-lithium-battery': {
    title: 'Electrical Lithium Battery | ITC Inspection Services',
    description: 'Explore electrical lithium battery inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'electrical-emc-emi': {
    title: 'Electrical EMC EMI | ITC Inspection Services & Compliance',
    description: 'Explore electrical EMC EMI inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'electrical-data-center': {
    title: 'Electrical Data Center Inspection | ITC India',
    description: 'Explore electrical data center inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'electrical-cybersecurity': {
    title: 'Electrical Cybersecurity | ITC Inspection Services',
    description: 'Explore electrical cybersecurity inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'robotics-cobots-safety': {
    title: 'Robotics & Cobots Safety Inspection | ITC India',
    description: 'Explore robotics cobots safety inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'robotics-agv-amr': {
    title: 'Robotics AGV AMR | ITC Inspection Services & Compliance',
    description: 'Explore robotics AGV AMR inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'robotics-cnc-guarding': {
    title: 'Robotics CNC Guarding | ITC Inspection Services & Compliance',
    description: 'Explore robotics CNC guarding inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'robotics-3d-printing': {
    title: 'Robotics 3D Printing | ITC Inspection Services & Compliance',
    description: 'Explore robotics 3D printing inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'robotics-iot-maintenance': {
    title: 'Robotics IoT Maintenance | ITC Inspection Services',
    description: 'Explore robotics IoT maintenance inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-drone-thermographic': {
    title: 'Solar Drone Thermographic | ITC Inspection Services',
    description: 'Explore solar drone thermographic inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-wind-turbine': {
    title: 'Solar Wind Turbine | ITC Inspection Services & Compliance',
    description: 'Explore solar wind turbine inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-floating-plant': {
    title: 'Solar Floating Plant | ITC Inspection Services & Compliance',
    description: 'Explore solar floating plant inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-inverter-storage': {
    title: 'Solar Inverter & Storage Inspection | ITC India',
    description: 'Explore solar inverter storage inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'solar-smart-metering': {
    title: 'Solar Smart Metering | ITC Inspection Services & Compliance',
    description: 'Explore solar smart metering inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'perimeter-fiber-optic': {
    title: 'Perimeter Fiber Optic | ITC Inspection Services & Compliance',
    description: 'Explore perimeter fiber optic inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'perimeter-drone-surveillance': {
    title: 'Perimeter Drone Surveillance | ITC Inspection Services',
    description: 'Explore perimeter drone surveillance inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'perimeter-cybersecurity': {
    title: 'Perimeter Cybersecurity Inspection | ITC India',
    description: 'Explore perimeter cybersecurity inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'perimeter-biometric-access': {
    title: 'Perimeter Biometric Access | ITC Inspection Services',
    description: 'Explore perimeter biometric access inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'perimeter-critical-infrastructure': {
    title: 'Perimeter Critical Infrastructure | ITC Inspection Services',
    description: 'Explore perimeter critical infrastructure inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-ai-analytics': {
    title: 'CCTV AI Analytics | ITC Inspection Services & Compliance',
    description: 'Explore CCTV AI analytics inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-ip-network-security': {
    title: 'CCTV IP Network Security | ITC Inspection Services',
    description: 'Explore CCTV IP network security inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-thermal-imaging': {
    title: 'CCTV Thermal Imaging | ITC Inspection Services & Compliance',
    description: 'Explore CCTV thermal imaging inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-drone-integration': {
    title: 'CCTV & Drone Integration Inspection | ITC India',
    description: 'Explore CCTV drone integration inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'cctv-chain-of-custody': {
    title: 'CCTV Chain Of Custody | ITC Inspection Services & Compliance',
    description: 'Explore CCTV chain of custody inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-air-quality': {
    title: 'Building Air Quality | ITC Inspection Services & Compliance',
    description: 'Explore building air quality inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-iot-safety': {
    title: 'Building IoT Safety | ITC Inspection Services & Compliance',
    description: 'Explore building IoT safety inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-green-energy': {
    title: 'Building Green Energy | ITC Inspection Services & Compliance',
    description: 'Explore building green energy inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-acoustic-lighting': {
    title: 'Building Acoustic Lighting | ITC Inspection Services',
    description: 'Explore building acoustic lighting inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'building-human-centric-lighting': {
    title: 'Building Human Centric Lighting | ITC Inspection Services',
    description: 'Explore building human centric lighting inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'critical-airport-security': {
    title: 'Critical Airport Security | ITC Inspection Services',
    description: 'Explore critical airport security inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'critical-railway-signaling': {
    title: 'Critical Railway Signaling | ITC Inspection Services',
    description: 'Explore critical railway signaling inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'critical-port-marine': {
    title: 'Critical Port Marine | ITC Inspection Services & Compliance',
    description: 'Explore critical port marine inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'critical-nuclear-perimeter': {
    title: 'Critical Nuclear Perimeter | ITC Inspection Services',
    description: 'Explore critical nuclear perimeter inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'critical-smart-city': {
    title: 'Critical Smart City | ITC Inspection Services & Compliance',
    description: 'Explore critical smart city inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-fire-detection': {
    title: 'Environment Fire Detection | ITC Inspection Services',
    description: 'Explore environment fire detection inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-radiation-safety': {
    title: 'Environment Radiation Safety | ITC Inspection Services',
    description: 'Explore environment radiation safety inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-water-quality': {
    title: 'Environment Water Quality | ITC Inspection Services',
    description: 'Explore environment water quality inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-emr-emf': {
    title: 'Environment EMR EMF | ITC Inspection Services & Compliance',
    description: 'Explore environment EMR EMF inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'environment-drone-compliance': {
    title: 'Environment Drone Compliance | ITC Inspection Services',
    description: 'Explore environment drone compliance inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'hightech-industry4': {
    title: 'Hightech Industry4 | ITC Inspection Services & Compliance',
    description: 'Explore Hightech Industry4 inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'hightech-ev-charging': {
    title: 'Hightech EV Charging | ITC Inspection Services & Compliance',
    description: 'Explore Hightech EV charging inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'hightech-hydrogen-fueling': {
    title: 'Hightech Hydrogen Fueling | ITC Inspection Services',
    description: 'Explore Hightech hydrogen fueling inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'hightech-ai-predictive': {
    title: 'AI Predictive Inspection Services | ITC India',
    description: 'Explore Hightech AI predictive inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  },
  'hightech-cyber-physical': {
    title: 'Cyber-Physical Systems Inspection | ITC India',
    description: 'Explore Hightech cyber physical inspection and assessment services from ITC India, supporting safety, reliability, risk management and applicable compliance.'
  }
};
