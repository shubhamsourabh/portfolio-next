const links = [
    { label: "GitHub", href: "https://github.com/shubhamsourabh", text: "github.com/shubhamsourabh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-sourabh-496039130/", text: "linkedin.com/in/shubham-sourabh" },
];

export default function Contact() {
    return (
        <main className="max-w-2xl mx-auto p-8">
            <h1 className="text-3xl font-bold">Contact me</h1>
            <p className="mt-2 text-gray-400">
                I'm open to full stack developer roles.
            </p>

            <div className="mt-8 flex flex-col gap-4">
                {links.map((l) => (
                    <div key={l.label} className="rounded-lg bg-gray-800 p-6">
                        <p className="text-sm text-gray-400">{l.label}</p>
                        <a
                            href={l.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 block text-lg text-emerald-400 hover:underline break-all"
                        >
                            {l.text}
                        </a>
                    </div>
                ))}

                <div className="rounded-lg bg-gray-800 p-6 ">
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="mt-1 text-lg text-white break-all">
                        sourabhshubham007@gmail.com
                    </p>

                    <div className="mt-5 flex flex-wrap gap-3">
                        <a
                            href="https://mail.google.com/mail/?view=cm&to=sourabhshubham007@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="rounded-md bg-emerald-500 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-emerald-400"
                        >
                            Write in Gmail
                        </a>
                        <a
                            href="mailto:sourabhshubham007@gmail.com"
                            className="rounded-md border border-gray-600 px-4 py-2 text-sm text-gray-200 hover:border-emerald-400 hover:text-emerald-400"
                        >
                            Open mail app
                        </a>
                    </div>
                </div>
            </div>
        </main>
    );
}