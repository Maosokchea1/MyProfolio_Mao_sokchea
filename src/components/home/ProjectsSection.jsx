import { useState } from "react";
import { Link } from "react-router-dom";
import useProjects from "../../hooks/useProjects";
import Loading from "../common/Loading";
import ProjectCard from "../ui/ProjectCard";
import SectionTitle from "../ui/SectionTitle";

export default function ProjectsSection() {
    const { projects, loading, error } = useProjects();
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter projects based on category/technologies
    const filteredProjects = projects.filter((project) => {
        const category = project.category?.toLowerCase() || "";
        const tech = project.technologies?.toLowerCase() || "";
        const title = project.title?.toLowerCase() || "";

        if (activeFilter === "frontend") {
            return category.includes("frontend") || tech.includes("react") || tech.includes("vue") || tech.includes("tailwind");
        }
        if (activeFilter === "backend") {
            return category.includes("backend") || tech.includes("node") || tech.includes("laravel") || tech.includes("php") || tech.includes("sql");
        }
        if (activeFilter === "fullstack") {
            return category.includes("full") || (tech.includes("react") && (tech.includes("node") || tech.includes("laravel")));
        }
        return true; // "all"
    });

    return (
        <section className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
                {/* Centered Title, Role Highlight, & Filter Buttons */}
                <div className="flex flex-col items-center text-center">
                    <SectionTitle subtitle="Selected applications and systems I have built.">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            My Projects
                        </span>
                    </SectionTitle>

                    {/* Specialized Roles Highlight Text */}
                    <p className="mt-4 text-sm sm:text-base font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl backdrop-blur-md">
                        🚀 Showcase of Frontend, Backend and Full Stack Developer Projects
                    </p>

                    {/* Filter Buttons (Centered) */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "all"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            All Projects
                        </button>
                        <button
                            onClick={() => setActiveFilter("frontend")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "frontend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Frontend Developer
                        </button>
                        <button
                            onClick={() => setActiveFilter("backend")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "backend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Backend Developer
                        </button>
                        <button
                            onClick={() => setActiveFilter("fullstack")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "fullstack"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Full Stack Developer
                        </button>
                    </div>

                    <Link
                        to="/projects"
                        className="mt-6 inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900 px-6 py-3 text-sm font-semibold text-indigo-400 transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-indigo-300 hover:-translate-y-0.5 shadow-lg shadow-indigo-600/10"
                    >
                        <span>All projects page</span>
                        <svg className="h-4 w-4 transition-transform duration-300 hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>

                {loading && (
                    <div className="flex justify-center py-12">
                        <Loading />
                    </div>
                )}
                {error && <p className="text-center text-red-400 py-6">{error}</p>}

                {/* Projects Grid Area */}
                {!loading && !error && (
                    <div className="mt-12">
                        {filteredProjects.length === 0 ? (
                            <p className="text-center text-slate-500 py-12">No projects found in this category.</p>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
                                {filteredProjects.slice(0, 4).map((project, index) => (
                                    <ProjectCard
                                        key={project.id}
                                        project={project}
                                        number={index + 1}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}