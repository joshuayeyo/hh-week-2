export type RepeatType = 'none' | 'daily' | 'weekly' | 'monthly' | 'yearly';

export interface RepeatInfoProps {
  type: RepeatType;
  interval: number;
  endDate?: string;
}
