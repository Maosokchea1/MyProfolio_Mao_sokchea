import { Link } from "react-router-dom";
import { siteConfig } from "../../config/site";

export default function ContactSection() {
    return (
        <section className="relative bg-slate-950 text-white overflow-hidden border-t border-slate-800">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />

            <div className="relative mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-center md:py-24">
                <div className="max-w-xl">
                    <span className="inline-block rounded-xl bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-indigo-400 backdrop-blur-md">
                        Contact
                    </span>
                    <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-white">
                        Have a project in mind?
                    </h2>
                    <p className="mt-3 text-slate-300 text-base leading-relaxed">
                        I am available to discuss work and collaboration. Let's build something amazing together.
                    </p>
                </div>

                <div className="flex flex-wrap gap-4">
                    <a
                        href={siteConfig.telegramUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-2xl bg-[#229ED9] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#229ED9]/25 transition-all duration-300 hover:bg-[#1b8bc2] hover:-translate-y-0.5"
                    >
                        <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.99 1.27-5.62 3.72-.53.36-1.01.54-1.44.53-.47-.02-1.37-.26-2.03-.48-.82-.27-1.47-.42-1.42-.88.03-.25.38-.51 1.05-.78 4.12-1.79 6.87-2.97 8.25-3.54 3.93-1.64 4.74-1.92 5.27-1.93.12 0 .39.03.56.17.14.12.18.28.2.45-.02.07-.02.13-.04.25z"/>
                        </svg>
                        <span>Chat on Telegram</span>
                    </a>

                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 rounded-2xl border border-slate-800 bg-slate-900/60 px-6 py-3.5 text-sm font-semibold text-slate-300 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-slate-700 hover:bg-slate-800 hover:text-white hover:-translate-y-0.5"
                    >
                        <span>Send a message</span>
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}