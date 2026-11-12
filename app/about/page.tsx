export default function About() {
  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>

      <p className="text-gray-300 mb-4">
        I'm a computer science engineer and full stack developer. I like
        building complete products: the database, the API and the interface
        people actually use.
      </p>

      <h2 className="text-xl font-semibold text-emerald-400 mb-2">
        What I work with
      </h2>
      <ul className="text-gray-300 mb-4 list-disc list-inside">
        <li>React and Next.js</li>
        <li>Node.js and Express</li>
        <li>MongoDB</li>
        <li>TypeScript</li>
      </ul>

      <h2 className="text-xl font-semibold text-emerald-400 mb-2">
        What I'm building
      </h2>
      <p className="text-gray-300">
        TaskFlow, a full stack task manager, and this portfolio, built with
        Next.js and deployed on Vercel. I'm looking for a full stack developer
        role.
      </p>
    </main>
  );
}