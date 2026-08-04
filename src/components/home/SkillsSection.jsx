import { useState } from "react";
import useSkills from "../../hooks/useSkills";
import Loading from "../common/Loading";
import SectionTitle from "../ui/SectionTitle";
import SkillCard from "../ui/SkillCard";

export default function SkillsSection() {
    const { skills, loading, error } = useSkills();
    const [activeTab, setActiveTab] = useState("all");

    // Filter skills based on category/keywords
    const frontendSkills = skills.filter(
        (skill) =>
            skill.category?.toLowerCase() === "frontend" ||
            ["react", "vue", "html", "css", "tailwind", "javascript", "typescript"].some((keyword) =>
                skill.name?.toLowerCase().includes(keyword)
            )
    );

    const backendSkills = skills.filter(
        (skill) =>
            skill.category?.toLowerCase() === "backend" ||
            ["node", "express", "laravel", "php", "python", "django", "java"].some((keyword) =>
                skill.name?.toLowerCase().includes(keyword)
            )
    );

    const otherSkills = skills.filter(
        (skill) => !frontendSkills.includes(skill) && !backendSkills.includes(skill)
    );

    // Get displayed skills based on active button tab
    const getDisplayedSkills = () => {
        if (activeTab === "frontend") return frontendSkills;
        if (activeTab === "backend") return backendSkills;
        if (activeTab === "other") return otherSkills;
        return skills; // "all"
    };

    const displayedSkills = getDisplayedSkills();

    return (
        <section className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/3 right-0 h-96 w-96 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
                {/* Section Title (Centered) */}
                <div className="flex flex-col items-center text-center">
                    <SectionTitle subtitle="The tools I use to design, build and maintain web applications.">
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            Skills & Expertise
                        </span>
                    </SectionTitle>

                    {/* Filter Buttons (Centered) */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveTab("all")}
                            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "all"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            All Skills
                        </button>
                        <button
                            onClick={() => setActiveTab("frontend")}
                            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "frontend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Frontend
                        </button>
                        <button
                            onClick={() => setActiveTab("backend")}
                            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "backend"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Backend
                        </button>
                        <button
                            onClick={() => setActiveTab("other")}
                            className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-300 ${
                                activeTab === "other"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            Tools & Others
                        </button>
                    </div>
                </div>

                {loading && (
                    <div className="flex justify-center py-12">
                        <Loading />
                    </div>
                )}
                {error && <p className="text-center text-red-400 py-6">{error}</p>}

                {!loading && !error && (
                    <div className="mt-12">
                        {displayedSkills.length === 0 ? (
                            <p className="text-center text-slate-500 py-12">No skills found in this category.</p>
                        ) : (
                            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {displayedSkills.map((skill) => (
                                    <SkillCard key={skill.id} skill={skill} />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}