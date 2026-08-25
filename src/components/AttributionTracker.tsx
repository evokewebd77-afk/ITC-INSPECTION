'use client';

import { useEffect } from 'react';
import { initLeadAttribution } from '../utils/attribution';

export const AttributionTracker: React.FC = () => {
  useEffect(() => {
    initLeadAttribution();
  }, []);

  return null;
};
