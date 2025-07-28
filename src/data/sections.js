import HeroContent from "../components/sections/HeroContent";
import SkillsContent from "../components/sections/SkillsContent";
import ProjectsContent from "../components/sections/ProjectsContent";
import AboutContent from "../components/sections/AboutContent";
import ContactContent from "../components/sections/ContactContent";

export const sections = [
  {
    index:0,
    id: "hero",
    title: "Shubham Kondhalkar",
    text: "Fullstack Developer",
    component: HeroContent,
  },
  {
    index:0,
    id: "skills",
    title: "Skills & Tech Stack",
    text: "Technologies I use daily.",
    component: SkillsContent,
  },
  {
    index:1,
    id: "projects",
    title: "Featured Projects",
    text: "Hover over project names to preview.",
    component: ProjectsContent,
  },
  {
    index:2,
    id: "about",
    title: "About Me",
    text: "A deeper dive into my journey.",
    component: AboutContent,
  },
  {
    index:3,
    id: "contact",
    title: "Contact",
    text: "Let’s collaborate and build something great.",
    component: ContactContent,
  },
];
