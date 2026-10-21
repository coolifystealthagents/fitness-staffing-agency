import type { SiteConfig } from './types';
import { services } from './services';
export const site: SiteConfig = {
  "name": "Fitness Staffing Agency",
  "domain": "fitnessstaffingagency.com",
  "siteId": "fitness-staffing-agency",
  "niche": "fitness businesses",
  "audience": "gym owners, studio operators, and fitness program leaders",
  "design": "kinetic-field",
  "eyebrow": "Operational strength for fitness businesses",
  "hero": "Keep every class, member, and task",
  "heroAccent": "moving with purpose.",
  "heroBody": "Specialist remote staff support class administration, member communication, lead follow up, trainer records, schedule coordination, and back office workflows for growing fitness organizations.",
  "manifesto": "A strong fitness experience depends on an operating rhythm that is just as disciplined as the training floor.",
  "primary": "#1456d8",
  "secondary": "#d9ff38",
  "accent": "#61d9ff",
  "canvas": "#f6f8fb",
  "ink": "#101417",
  "displayFont": "Impact",
  "bodyFont": "Arial",
  "heroImage": "/hero.png",
  "heroAlt": "Modern fitness studio with kettlebells, resistance bands, clipboard, and yellow class markers in dramatic light",
  "services": services,
  "categories": [
    "Class operations",
    "Member experience",
    "Trainer systems",
    "Role design"
  ],
  "principles": [
    "Clear role scope",
    "Named decision owners",
    "Reviewable workflows"
  ],
  "sources": [
    {
      "label": "Physical Activity Guidelines for Americans",
      "url": "https://health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines"
    }
  ]
};
