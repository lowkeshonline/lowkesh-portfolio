export type ProjectStatus = "live" | "in-progress";

export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  year: string;
  status: ProjectStatus;
}

export const projects: Project[] = [
  {
    id: "intentube",
    title: "Intentube",
    description:
      "A Chrome extension that asks why you're on YouTube, then dims or hides feed videos that don't match your intent. It runs entirely in the browser.",
    techStack: ["TypeScript", "Chrome MV3", "AI"],
    githubUrl: "https://github.com/lowkeshonline/Intentube",
    liveUrl: "https://intentube-ai.vercel.app",
    year: "2026",
    status: "live",
  },
  {
    id: "anonmatch",
    title: "Anonmatch",
    description:
      "Anonymous one-on-one chat. Open the page, join the queue, get paired with a stranger, and talk in real time. Either side can skip or leave.",
    techStack: ["React", "Socket.IO", "Node.js"],
    githubUrl: "https://github.com/lowkeshonline/anonmatch",
    liveUrl: "https://anonmatch-chat.vercel.app",
    year: "2026",
    status: "live",
  },
  {
    id: "zero-hunger",
    title: "Zero Hunger",
    description:
      "A place for people to share extra food with neighbors who need it, helping reduce waste and make giving away food feel less complicated.",
    techStack: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    githubUrl: "https://github.com/lowkeshonline/zerohunger",
    liveUrl: "https://zerohungerweb.vercel.app/",
    year: "2026",
    status: "live",
  },
];
