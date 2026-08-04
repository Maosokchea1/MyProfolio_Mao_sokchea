import { Link } from "react-router-dom";

export default function ProjectCard({ project, number }) {
    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-100 text-lg font-bold text-[#4f46e5]">
                    {String(number).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs text-slate-400">
                    {project.status === "published" ? "Published" : "Project"}
                </span>
            </div>

            <h3 className="mt-6 text-xl font-bold tracking-tight text-[#172033]">
                {project.title}
            </h3>
            {project.description && (
                <p className="mt-3 leading-7 text-slate-600">
                    {project.description}
                </p>
            )}

            <div className="mt-5 flex items-end justify-between gap-4">
                <p className="text-xs font-bold uppercase tracking-[0.1em] text-[#4f46e5]">
                    {project.technologies || project.technology}
                </p>
                <Link
                    className="shrink-0 text-sm font-bold text-[#4f46e5] hover:text-[#3730a3]"
                    to={`/projects/${project.slug}`}
                >
                    View project →
                </Link>
            </div>
        </article>
    );
}
