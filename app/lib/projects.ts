import type { Project } from "../types";

export async function getProjects(): Promise<Project[]> {
  return  [
      {
        name: "TaskFlow",
        description: "Full stack task manager with React, Node, MongoDB and TypeScript.",
        github: "https://github.com/shubhamsourabh/taskFlow",
        stack:["React", "Express", "MongoDB", "Docker"],
      },
      {
        name: "Portfolio",
        description:
          "Personal website built with Next.js, TypeScript and Tailwind, deployed on Vercel.",
        github: "https://github.com/shubhamsourabh/portfolio-next",
        stack:["Next.js", "TypeScript", "Tailwind"],
      },
    ]
}