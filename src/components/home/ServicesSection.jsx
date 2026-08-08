import { useState } from "react";
import useServices from "../../hooks/useServices";
import Loading from "../common/Loading";
import ServiceCard from "../ui/ServiceCard";
import SectionTitle from "../ui/SectionTitle";

export default function ServicesSection() {
    const { services, loading, error } = useServices();
    const [activeFilter, setActiveFilter] = useState("all");

    // Filter services based on category/title
    const serviceList = Array.isArray(services) ? services : [];

    const filteredServices = serviceList.filter((service) => {
        const title = service.title?.toLowerCase() || "";
        const desc = service.description?.toLowerCase() || "";

        if (activeFilter === "frontend") {
            return title.includes("frontend") || desc.includes("frontend") || title.includes("react") || title.includes("ui");
        }
        if (activeFilter === "backend") {
            return title.includes("backend") || desc.includes("backend") || title.includes("api") || title.includes("server");
        }
        if (activeFilter === "fullstack") {
            return title.includes("full") || desc.includes("full stack") || title.includes("web app");
        }
        return true; // "all"
    });

    return (
        <section className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 right-0 h-96 w-96 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
                {/* Section Title & Subtitle (Centered) */}
                <div className="flex flex-col items-center text-center">
                    <SectionTitle subtitle="Practical development services for web applications and digital products.">
                        <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            My Services
                        </span>
                    </SectionTitle>

                    {/* Specialized Roles Highlight Text */}
                    <p className="mt-4 text-sm sm:text-base font-medium text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-4 py-2 rounded-xl backdrop-blur-md">
                         មានទទួលធ្វើ Frontend, Backend and Full Stack Developer
                    </p>

                    {/* Service Filter Buttons (Centered) */}
                    <div className="mt-6 flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 p-2 backdrop-blur-xl">
                        <button
                            onClick={() => setActiveFilter("all")}
                            className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-semibold transition-all duration-300 ${
                                activeFilter === "all"
                                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35"
                                    : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                            }`}
                        >
                            All Services
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
                </div>

                {loading && (
                    <div className="flex justify-center py-12">
                        <Loading />
                    </div>
                )}
                {error && <p className="text-center text-red-400 py-6">{error}</p>}

                {!loading && !error && services.length === 0 && (
                    <div className="mt-12 text-center">
                        <p className="inline-block rounded-2xl border border-slate-800 bg-slate-900/60 p-6 text-slate-400 backdrop-blur-xl">
                            Services will be available soon.
                        </p>
                    </div>
                )}

                {/* Services Cards Grid */}
                {!loading && !error && filteredServices.length > 0 && (
                    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {filteredServices.map((service, index) => (
                            <ServiceCard
                                key={service.id}
                                service={service}
                                number={index + 1}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}