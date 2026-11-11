const projects = [
  {
    name: "TaskFlow",
    description: "Full stack task manager with React, Node, MongoDB and TypeScript.",
    github: "https://github.com/shubhamsourabh/taskFlow",
  },
  {
  name: "Portfolio",
  description: "Personal website built with Next.js, TypeScript and Tailwind, deployed on Vercel.",
  github: "https://github.com/shubhamsourabh/portfolio-next",
},
];
export default function Projects(){
    return (
        <main>
            <h1>My Projects</h1>
            {projects.map((p)=>(
                <div key={p.name}>
                    <h1>{p.name}</h1>
                    <p>{p.description}</p>
                    <a href={p.github} target="_blank" rel="noreferrer">View on GitHub</a>
                </div>
            ))}
        </main>
    )
}