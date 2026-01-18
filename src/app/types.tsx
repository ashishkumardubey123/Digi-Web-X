import { LucideIcon } from 'lucide-react';

export interface Reason {
  title: string;
  desc: string;
  stat: string;
  statLabel: string;
  icon: LucideIcon;
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}