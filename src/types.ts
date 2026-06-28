/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { LucideIcon } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  category: "dev" | "traffic" | "automation" | "design";
  shortDesc: string;
  longDesc: string;
  features: string[];
  iconName: string; // Dynamic icon rendering safely
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  metric: string;
  metricLabel: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatarUrl: string;
  rating: number;
  text: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: "Web" | "Landing Page" | "Automação" | "Identidade Visual";
  image: string;
  description: string;
  stats: { label: string; value: string };
  client: string;
  tags: string[];
}

export interface CRMContactRequest {
  name: string;
  email: string;
  phone: string;
  company?: string;
  interest: string[];
  budget: string;
  notes?: string;
}
