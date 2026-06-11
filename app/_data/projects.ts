export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

export const projects: Project[] = [
  {
    id: "zero-hunger",
    title: "Zero Hunger",
    description:
      "ZeroHunger is a community-driven food sharing platform designed to reduce food waste by connecting people with excess food (Donors) to those who need it (Receivers).",
    techStack: ["Tailwind", "React", "MongoDB", "NodeJS"],
    githubUrl: "https://github.com/lowkeshonline/zerohunger",
    liveUrl: "https://zerohunger-phi.vercel.app/",
  },
  {
    id: "chatwadi-chatapp",
    title: "Chatwadi",
    description:
      "A modern real-time messaging platform for Marwadi University students, featuring instant communication, user authentication, and an intuitive chat interface.",
    techStack: ["Python Flask", "Websockets", "MongoDB", "ReactJS"],
    githubUrl: "https://github.com/lowkeshonline/chatwadi-chatapp",
    liveUrl: "https://chatwadi.vercel.app/",
  },
];
