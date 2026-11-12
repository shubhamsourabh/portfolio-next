import type { Project } from "../types";

export default async function Projects() {
  // await new Promise((r) => setTimeout(r, 2000));
  const res = await fetch(`${process.env.BASE_URL}/api/projects`);
  if (!res.ok) throw new Error("Failed to load projects");
  const projects: Project[] = await res.json();
  return (
    <main>
      <h1>My Projects</h1>
      {projects.map((p) => (
        <div
          key={p.name}
          className="bg-gray-800 border border-gray-700 rounded-lg p-5 mb-4 max-w-md shadow-sm hover:border-emerald-400 transition-colors"
        >
          <h2 className="text-xl font-semibold mb-1">{p.name}</h2>
          <p className="text-gray-300 mb-3">{p.description}</p>
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="text-emerald-400 hover:underline"
          >
            View on GitHub →
          </a>
        </div>
      ))}
    </main>
  );
}