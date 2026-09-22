import type { Metadata } from 'next';
import { ElectricalSafetyAuditPage } from '../../views/ElectricalSafetyAuditPage';

export const metadata: Metadata = {
  title: 'Electrical Safety Audit Services in India | ITC India',
  description: 'Professional electrical safety audit services for factories, offices, hospitals, schools, residential societies and commercial buildings across India. Request an audit quotation from ITC India.',
  alternates: {
    canonical: 'https://itc-inspection.vercel.app/electrical-safety-audit',
  },
  openGraph: {
    title: 'Electrical Safety Audit Services in India | ITC India',
    description: 'Professional electrical safety audit services for factories, offices, hospitals, schools, residential societies and commercial buildings across India. Request an audit quotation from ITC India.',
    url: 'https://itc-inspection.vercel.app/electrical-safety-audit',
    siteName: 'ITC Inspection Services',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Electrical Safety Audit Services in India | ITC India',
    description: 'Professional electrical safety audit services for factories, offices, hospitals, schools, residential societies and commercial buildings across India.',
  },
};

export default function Page() {
  return <ElectricalSafetyAuditPage />;
}
