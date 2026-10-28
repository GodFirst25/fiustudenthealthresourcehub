export type Resource = {
  id: string;
  name: string;
  category: string;
  description: string;
  services: string[];
  location: string;
  hours: string;
  contactPhone: string;
  website: string;
};

export const resources: Resource[] = [
  {
    id: "student-health-services",
    name: "Student Health Services",
    category: "Physical Health",
    description: "Primary care and basic medical support for FIU students.",
    services: ["General check-ups", "Immunizations", "Preventive care"],
    location: "MMC Campus Health Clinic",
    hours: "Mon–Fri, 8:30 AM–5:00 PM",
    contactPhone: "(305) 348-2401",
    website: "https://dasa.fiu.edu/all-departments/student-health/"
  },
  {
    id: "counseling-center",
    name: "Counseling & Psychological Services",
    category: "Mental & Emotional Wellbeing",
    description: "Confidential counseling and mental health support.",
    services: ["Individual counseling", "Crisis support", "Group therapy"],
    location: "MMC Campus, Student Services Building",
    hours: "Mon–Fri, 8:30 AM–5:00 PM",
    contactPhone: "(305) 348-2277",
    website: "https://counseling.fiu.edu/"
  },
  {
    id: "food-pantry",
    name: "FIU Food Pantry",
    category: "Food & Housing",
    description: "Food support resources for students facing food insecurity.",
    services: ["Food packages", "Referral support", "Community programs"],
    location: "BBC & MMC (varies)",
    hours: "Check site for updated distribution times",
    contactPhone: "(305) 348-2797",
    website: "https://studentaffairs.fiu.edu/get-support/pantry/"
  }
];

export const categories = [
  "Mental & Emotional Wellbeing",
  "Physical Health",
  "Insurance & Medication",
  "Food & Housing",
  "Student Support"
];
