import { lazy } from 'react';

// Lazy load components for better performance
const HeroContent = lazy(() => import("../components/sections/HeroContent"));
const SkillsContent = lazy(() => import("../components/sections/SkillsContent"));
const ProjectsContent = lazy(() => import("../components/sections/ProjectsContent"));
const AboutContent = lazy(() => import("../components/sections/AboutContent"));
const ContactContent = lazy(() => import("../components/sections/ContactContent"));

export const sections = [
  {
    index:0,
    component: HeroContent,
  },
  {
    index:0,
    component: SkillsContent,
  },
  {
    index:1,
    component: ProjectsContent,
  },
  // {
  //   index:2,
  //   component: AboutContent,
  // },
  {
    index:3,
    component: ContactContent,
  },
];
