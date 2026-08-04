import { useEffect, useState } from "react";
import { getEducations } from "../../services/profileService";
import SectionTitle from "../ui/SectionTitle";
import Loading from "../common/Loading";
import { usePreferences } from "../../contexts/PreferencesContext";

export default function EducationSection() {
    const [items, setItems] = useState([]);
    const [activeFilter, setActiveFilter] = useState("all");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const { language } = usePreferences();

    useEffect(() => {
        getEducations()
            .then((response) => setItems(Array.isArray(response) ? response : response.data ?? []))
            .catch(() => setError("Unable to load education records."))
            .finally(() => setLoading(false));
    }, []);

    const labels = language === "km" ? {
        title: "ការអប់រំ", subtitle: "ការសិក្សា និងប្រវត្តិការអប់រំរបស់ខ្ញុំ។",
        all: "ទាំងអស់", primary: "បឋមសិក្សា", secondary: "អនុវិទ្យាល័យ",
        highschool: "វិទ្យាល័យ", university: "សាកលវិទ្យាល័យ",
        empty: "មិនមានទិន្នន័យការអប់រំនៅក្នុងប្រភេទនេះទេ។",
    } : {
        title: "Education", subtitle: "Formal study and academic background.",
        all: "All Education", primary: "Primary School", secondary: "Secondary School",
        highschool: "High School", university: "University",
        empty: "No education records found in this category.",
    };

    // Filter education items based on button selection
    const filteredItems = items.filter((item) => {
        if (activeFilter !== "all" && item.level) {
            return item.level === activeFilter;
        }

        const degree = (item.degree || "").toLowerCase();
        const school = (item.school_name || "").toLowerCase();
        const desc = (item.description || "").toLowerCase();
        const combined = `${degree} ${school} ${desc}`;

        if (activeFilter === "primary") {
            return combined.includes("primary") || combined.includes("បឋមសិក្សា");
        }
        if (activeFilter === "secondary") {
            return combined.includes("secondary") || combined.includes("អនុវិទ្យាល័យ") || combined.includes("middle");
        }
        if (activeFilter === "highschool") {
            return combined.includes("high") || combined.includes("វិទ្យាល័យ");
        }
        if (activeFilter === "university") {
            return combined.includes("university") || combined.includes("bachelor") || combined.includes("degree") || combined.includes("មហាវិទ្យាល័យ") || combined.includes("សាកលវិទ្យាល័យ");
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
                    <SectionTitle subtitle={labels.subtitle}>
                        <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            {labels.title}
                        </span>
                    </SectionTitle>

                    {/* Education Level Filter Buttons (Centered) */}
                    <div className="mt-8 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "all"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            {labels.all}
                        </button>
                        <button
                            onClick={() => setActiveFilter("primary")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "primary"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            {labels.primary}
                        </button>
                        <button
                            onClick={() => setActiveFilter("secondary")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "secondary"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            {labels.secondary}
                        </button>
                        <button
                            onClick={() => setActiveFilter("highschool")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "highschool"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            {labels.highschool}
                        </button>
                        <button
                            onClick={() => setActiveFilter("university")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "university"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            {labels.university}
                        </button>
                    </div>
                </div>

                {loading && <div className="flex justify-center py-12"><Loading /></div>}
                {error && <p className="py-8 text-center text-red-400">{language === "km" ? "មិនអាចទាញយកទិន្នន័យការអប់រំបានទេ។" : error}</p>}

                {/* Education List Cards */}
                {!loading && !error && (
                <div className="mt-12 space-y-6">
                    {filteredItems.length === 0 ? (
                        <p className="text-center text-slate-500 py-12">{labels.empty}</p>
                    ) : (
                        filteredItems.map((item) => (
                            <article
                                key={item.id}
                                className="group grid gap-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-900 sm:p-8 md:grid-cols-[1fr_auto]"
                            >
                                <div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
                                        {item.degree || item.field}
                                    </h3>
                                    <p className="mt-1 font-semibold text-indigo-400">
                                        {item.school_name}
                                    </p>
                                    {item.description && (
                                        <p className="mt-4 leading-relaxed text-slate-300">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                                <div className="h-fit rounded-xl border border-slate-800 bg-slate-800/50 px-3 py-2 text-xs font-medium text-slate-300 backdrop-blur-md">
                                    {item.start_year || "—"} – {item.end_year || "Present"}
                                </div>
                            </article>
                        ))
                    )}
                </div>
                )}
            </div>
        </section>
    );
}
