export interface LeaveCalculation {
  otHours: number;
  calculatedHours: number;
  finalHours: number;
  breakdown: string[];
  isEligible: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}

export interface StepProps {
  number: number;
  title: string;
  description: string;
  actor: string;
  isLast?: boolean;
}
