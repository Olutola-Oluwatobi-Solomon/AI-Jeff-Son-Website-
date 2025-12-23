
// Fix: Import React to resolve 'Cannot find namespace React' errors for ReactNode
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TrustItemProps {
  icon: React.ReactNode;
  label: string;
}

export enum RepairCategory {
  GENERAL = 'General',
  EMERGENCY = 'Emergency',
  ACCESSIBILITY = 'Accessibility'
}
