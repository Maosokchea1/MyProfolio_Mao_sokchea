import { Link } from "react-router-dom";
import heroImage from "../../assets/hero.jpg";
import { useProfile } from "../../contexts/profileContext";
import { backendAssetUrl } from "../../utils/assetUrl";
import { usePreferences } from "../../contexts/PreferencesContext";
import { useState, useEffect } from "react";

function HeroSection() {
    const { profile } = useProfile();
    const { theme } = usePreferences();
    const light = theme === "light";
    const profileImage = profile.profile_image
        ? backendAssetUrl(profile.profile_image)
        : heroImage;
    const cvUrl = profile.cv_file ? backendAssetUrl(profile.cv_file) : "";

    // State សម្រាប់គ្រប់គ្រងចលនាលុបនិងវាយអក្សរឡើងវិញ
    const [displayedName, setDisplayedName] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const fullName = profile.full_name || "";

    useEffect(() => {
        let timer;
        const handleTyping = () => {
            const i = loopNum % 1;
            const fullText = fullName;

            if (isDeleting) {
                // កំពុងលុបអក្សរចេញ
                setDisplayedName(fullText.substring(0, displayedName.length - 1));
                setTypingSpeed(50); // ល្បឿនពេលលុបលឿនជាងមុនបន្តិច
            } else {
                // កំពុងវាយអក្សរចូល
                setDisplayedName(fullText.substring(0, displayedName.length + 1));
                setTypingSpeed(150); // ល្បឿនពេលវាយធម្មតា
            }

            // បើវាយចប់សព្វគ្រប់ ឱ្យផ្អាកបន្តិចសិនចាំចាប់ផ្តើមលុប
            if (!isDeleting && displayedName === fullText) {
                timer = setTimeout(() => {
                    setIsDeleting(true);
                    setTypingSpeed(50);
                }, 2000); // រង់ចាំ ២វិនាទីពេលវាយចប់
                return;
            } 
            // បើលុបអស់រលីងហើយ ឱ្យចាប់ផ្តើមវាយឡើងវិញ
            else if (isDeleting && displayedName === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            }
        };

        timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayedName, isDeleting, fullName, loopNum, typingSpeed]);

    return (
        <section className={`relative overflow-hidden transition-colors duration-300 ${light ? "bg-linear-to-b from-white via-slate-50 to-slate-100 text-slate-900" : "bg-linear-to-b from-slate-900 via-slate-900 to-slate-950 text-white"}`}>
            {/* Background Decorative Glow Effects */}
            <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />

            {/* Padding ត្រូវបានកាត់បន្ថយដើម្បីឱ្យខិតឡើងលើ */}
            <div className="relative mx-auto grid min-h-[640px] max-w-6xl items-center gap-10 px-5 pt-12 pb-16 sm:px-8 sm:pt-16 md:grid-cols-[1fr_420px] md:py-20">
                {/* Left Content Area */}
                <div>
                    {/* Full Name with Typewriter (Delete & Rewrite) Effect */}
                    <h1 className="max-w-3xl text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl min-h-[1.1em]">
                        <span 
                            className={`bg-linear-to-r bg-clip-text text-transparent ${
                                light 
                                    ? "from-slate-950 via-slate-800 to-slate-600" 
                                    : "from-white via-slate-200 to-slate-400"
                            }`}
                        >
                            {displayedName}
                        </span>
                        {/* និមិត្តសញ្ញា Cursor រព្រិចៗ */}
                        <span className={`inline-block w-1 h-[0.8em] ml-1 align-middle animate-pulse ${light ? "bg-indigo-600" : "bg-indigo-400"}`} />
                    </h1>

                    <p className="mt-3 text-xl font-medium text-indigo-400 sm:text-2xl">
                        {profile.title}
                    </p>

                    <p className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${light ? "text-slate-600" : "text-slate-400"}`}>
                        {profile.description}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        {cvUrl ? (
                            <a
                                href={cvUrl}
                                target="_blank"
                                rel="noreferrer"
                                className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/35 transition-all duration-300 hover:bg-indigo-500 hover:shadow-indigo-500/50 hover:-translate-y-0.5"
                            >
                                <span>View CV</span>
                                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </a>
                        ) : (
                            <span
                                className={`cursor-not-allowed rounded-xl border px-6 py-3.5 text-sm font-semibold ${light ? "border-slate-200 bg-slate-100 text-slate-400" : "border-slate-800 bg-slate-800/50 text-slate-500"}`}
                                title="Add a CV from the backend About page"
                            >
                                View CV
                            </span>
                        )}

                        <Link
                            to="/contact"
                            className={`inline-flex items-center gap-2 rounded-xl border px-6 py-3.5 text-sm font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 ${light ? "border-slate-300 bg-white/70 text-slate-700 hover:border-indigo-300 hover:bg-white" : "border-slate-700 bg-slate-800/40 text-slate-200 hover:border-slate-600 hover:bg-slate-800"}`}
                        >
                            Let's Talk
                        </Link>
                    </div>

                    {/* Tech Stack Grid */}
                    <dl className={`mt-10 grid max-w-xl grid-cols-3 gap-6 border-t pt-6 ${light ? "border-slate-200" : "border-slate-800/80"}`}>
                        <Technology label="Frontend" value="HTML5 / React" light={light} />
                        <Technology label="Backend" value="Laravel" light={light} />
                        <Technology label="Database" value="SQL" light={light} />
                    </dl>
                </div>

                {/* Right Image Card Area (Rounded Circle) */}
                <div className="relative mx-auto flex w-full max-w-sm items-center justify-center md:max-w-none">
                    <div className="absolute h-72 w-72 rounded-full bg-gradient-to-tr from-indigo-500 to-emerald-500 opacity-30 blur-2xl transition duration-500" />
                    
                    <figure className={`relative flex h-64 w-64 items-center justify-center rounded-full border-2 p-2 shadow-2xl backdrop-blur-xl sm:h-80 sm:w-80 ${light ? "border-white bg-white/90 shadow-slate-300" : "border-slate-800 bg-slate-900/90"}`}>
                        <img
                            src={profileImage}
                            alt={profile.full_name}
                            className="h-full w-full rounded-full object-cover object-top transition-transform duration-500 hover:scale-105"
                        />
                    </figure>
                </div>
            </div>
        </section>
    );
}

function Technology({ label, value, light }) {
    return (
        <div className="space-y-1">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">
                {label}
            </dt>
            <dd className={`text-sm font-semibold ${light ? "text-slate-700" : "text-slate-200"}`}>{value}</dd>
        </div>
    );
}

export default HeroSection;