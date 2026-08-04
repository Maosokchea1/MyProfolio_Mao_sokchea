import { useEffect, useState } from "react";
import { getExperiences } from "../../services/profileService";
import Loading from "../common/Loading";
import SectionTitle from "../ui/SectionTitle";

export default function ExperienceSection() {
    const [experiences, setExperiences] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    useEffect(() => {
        getExperiences()
            .then((response) => setExperiences(response.data ?? []))
            .catch(() => setError("Unable to load work experience."))
            .finally(() => setLoading(false));
    }, []);

    const formatDate = (date) => {
        if (!date) return "";
        return new Intl.DateTimeFormat("en", {
            month: "short",
            year: "numeric",
        }).format(new Date(`${date.slice(0, 10)}T00:00:00`));
    };

    // Filter experiences based on position or description
    const filteredExperiences = experiences.filter((exp) => {
        const position = exp.position?.toLowerCase() || "";
        const desc = exp.description?.toLowerCase() || "";
        const company = exp.company_name?.toLowerCase() || "";

        if (activeFilter === "frontend") {
            return position.includes("frontend") || desc.includes("frontend") || company.includes("frontend");
        }
        if (activeFilter === "backend") {
            return position.includes("backend") || desc.includes("backend") || company.includes("backend");
        }
        if (activeFilter === "fullstack") {
            return position.includes("full") || desc.includes("full stack") || position.includes("full-stack");
        }
        return true; // "all"
    });

    return (
        <section className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 md:py-28">
                {/* Section Title & Subtitle (Centered) */}
                <div className="flex flex-col items-center text-center">
                    <SectionTitle subtitle="Roles, responsibilities and professional work.">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Work Experience
                        </span>
                    </SectionTitle>

                    {/* Specialized Roles Highlight Text */}
                    <p className="mt-4 text-sm sm:text-base font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl backdrop-blur-md">
                        💼 Professional Experience in Frontend, Backend and Full Stack Developer
                    </p>

                    {/* Filter Buttons (Centered) */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "all"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            All Experience
                        </button>
                        <button
                            onClick={() => setActiveFilter("frontend")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "frontend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Frontend
                        </button>
                        <button
                            onClick={() => setActiveFilter("backend")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "backend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Backend
                        </button>
                        <button
                            onClick={() => setActiveFilter("fullstack")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "fullstack"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Full Stack
                        </button>
                    </div>
                </div>

                {loading && (
                    <div className="flex justify-center py-12">
                        <Loading />
                    </div>
                )}
                {error && <p className="text-center text-red-400 py-6">{error}</p>}

                {!loading && !error && experiences.length === 0 && (
                    <div className="mt-12 text-center">
                        <p className="inline-block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-400 backdrop-blur-xl">
                            Work experience will be available soon.
                        </p>
                    </div>
                )}

                {/* Experience Timeline / Cards */}
                {!loading && !error && filteredExperiences.length > 0 && (
                    <div className="mt-12 space-y-6">
                        {filteredExperiences.map((experience, index) => (
                            <article
                                key={experience.id}
                                className="group relative grid gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 sm:p-8 md:grid-cols-[60px_1fr_auto]"
                            >
                                <span className="font-mono text-sm font-bold text-indigo-400">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        {experience.position}
                                    </h3>
                                    <p className="mt-1 font-semibold text-indigo-400">
                                        {experience.company_name}
                                    </p>
                                    {experience.description && (
                                        <p className="mt-4 leading-relaxed text-slate-300">
                                            {experience.description}
                                        </p>
                                    )}
                                </div>
                                <span className="h-fit rounded-xl border border-slate-800 bg-slate-800/50 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-md">
                                    {formatDate(experience.start_date)} –{" "}
                                    {experience.currently_working
                                        ? "Present"
                                        : formatDate(experience.end_date)}
                                </span>
                            </article>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}