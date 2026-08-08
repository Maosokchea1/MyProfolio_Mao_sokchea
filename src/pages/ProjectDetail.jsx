import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { getProjectBySlug } from "../services/projectService";

export default function ProjectDetail() {
    const { slug } = useParams();
    const [project, setProject] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        getProjectBySlug(slug)
            .then((response) => setProject(response.data))
            .catch(() => setError("Project not found."));
    }, [slug]);

    if (error) {
        return (
            <div className="mx-auto min-h-[70vh] max-w-4xl px-5 py-24 text-center text-red-400 sm:px-8">
                <p className="inline-block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 backdrop-blur-xl">
                    {error}
                </p>
            </div>
        );
    }

    if (!project) {
        return (
            <div className="flex min-h-[70vh] items-center justify-center bg-slate-950">
                <Loading />
            </div>
        );
    }

    return (
        <article className="relative min-h-[70vh] bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-28">
                {/* Back Link */}
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-400 transition-colors hover:text-indigo-300"
                >
                    <svg className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    <span>Back to projects</span>
                </Link>

                {/* Header Card */}
                <header className="mt-8 rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl sm:p-12">
                    <span className="inline-block rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 backdrop-blur-md">
                        Project Detail
                    </span>
                    <h1 className="mt-4 max-w-4xl text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
                        {project.title}
                    </h1>
                    <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {project.technology}
                    </p>
                </header>

                {/* Content & Action Buttons */}
                <div className="mt-10 grid gap-10 md:grid-cols-[1fr_240px]">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/40 p-8 backdrop-blur-xl">
                        <p className="max-w-3xl text-lg leading-relaxed text-slate-300">
                            {project.description}
                        </p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {project.github_url && (
                            <a
                                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900 px-5 py-3.5 text-center text-sm font-semibold text-slate-300 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white"
                                href={project.github_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>View source</span>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        )}
                        {project.demo_url && (
                            <a
                                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-5 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-indigo-600/35 transition-all duration-300 hover:bg-indigo-500 hover:-translate-y-0.5"
                                href={project.demo_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                <span>Open live site</span>
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}