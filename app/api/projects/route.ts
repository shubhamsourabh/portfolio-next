import type { Project } from "../../types";
const projects:Project[] = [
  {
    name: "TaskFlow",
    description: "Full stack task manager with React, Node, MongoDB and TypeScript.",
    github: "https://github.com/shubhamsourabh/taskFlow",
  },
  {
    name: "Portfolio",
    description:
      "Personal website built with Next.js, TypeScript and Tailwind, deployed on Vercel.",
    github: "https://github.com/shubhamsourabh/portfolio-next",
  },
];

export async function GET(){
    return Response.json(projects);
}

