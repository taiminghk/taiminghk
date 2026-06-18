/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type TabKey = 'home' | 'schools' | 'courses' | 'tools' | 'support';

export interface School {
  id: string;
  name: string;
  englishName?: string;
  district: string;
  type: string;
  features: string[];
  image: string;
  isHot?: boolean;
  intro: string;
  pastPaperCount: string;
  interviewProcess: string;
  interviewerPreferences: string;
  sampleUnlocked?: boolean;
}

export interface Course {
  id: string;
  title: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  description: string;
  iconName: string;
  tag?: string;
  isHot?: boolean;
  category: 'package' | 'one-on-one';
  features: string[];
  longDescription: string;
  curriculumSteps: {
    title: string;
    englishTitle: string;
    desc: string;
  }[];
  syllabus: string[];
  testimonials: {
    author: string;
    school: string;
    rating: number;
    text: string;
  }[];
}

export interface ChecklistItem {
  id: string;
  category: 'school' | 'practice' | 'day-prep';
  text: string;
  checked: boolean;
}

export interface Tutor {
  id: string;
  name: string;
  title: string;
  avatar: string;
  tags: string[];
}

export interface UserProfile {
  fullName: string;
  phone: string;
  educationHistory: string;
  awardsCertificates: string;
  currentSchool?: string;
  targetSchool?: string;
}
