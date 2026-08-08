import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
import { useProfile } from "../../contexts/profileContext";
import { usePreferences } from "../../contexts/PreferencesContext";

const links = [
    { en: "Home", km: "ទំព័រដើម", path: "/" },
    { en: "About", km: "អំពីខ្ញុំ", path: "/about" },
    { en: "Education", km: "ការអប់រំ", path: "/education" },
    { en: "Skills", km: "ជំនាញ", path: "/skills" },
    { en: "Services", km: "សេវាកម្ម", path: "/services" },
    { en: "Projects", km: "គម្រោង", path: "/projects" },
    { en: "Experience", km: "បទពិសោធន៍", path: "/experience" },
    { en: "Contact", km: "ទំនាក់ទំនង", path: "/contact" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const { theme, language, toggleTheme, toggleLanguage } = usePreferences();
    const { profile } = useProfile();

    return (
        <header className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 text-white backdrop-blur-md">
            <nav className="mx-auto max-w-6xl px-5 sm:px-8" aria-label="Main navigation">
                <div className="flex h-20 items-center justify-between gap-6">
                    <NavLink to="/" className="group flex items-center gap-3" onClick={() => setMenuOpen(false)}>
                        <img src={logo} alt="" className="h-10 w-10 rounded-full border border-slate-700 object-cover transition-transform duration-300 group-hover:scale-105" />
                        <span className="hidden bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-lg font-bold text-transparent sm:block">
                            {profile.full_name}
                        </span>
                    </NavLink>

                    <div className="hidden items-center gap-1 md:flex">
                        {links.map((link) => <NavigationLink key={link.path} link={link} language={language} />)}
                    </div>

                    <div className="flex items-center gap-3">
                        <button type="button" onClick={toggleTheme} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white" aria-label="Toggle theme" title={theme === "dark" ? "Light mode" : "Dark mode"}>
                            {theme === "dark" ? "☀️" : "🌙"}
                        </button>
                        <button type="button" onClick={toggleLanguage} className="flex h-10 items-center gap-1.5 rounded-xl border border-slate-800 bg-slate-900 px-3 text-xs font-bold text-slate-300 transition-colors hover:border-slate-700 hover:text-white" aria-label="Toggle language">
                            <span>🌐</span><span>{language === "en" ? "ខ្មែរ" : "EN"}</span>
                        </button>
                        <button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:text-white md:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
                            {menuOpen ? "✕" : "☰"}
                        </button>
                    </div>
                </div>

                {menuOpen && (
                    <div className="grid gap-2 border-t border-slate-800 py-4 md:hidden">
                        {links.map((link) => <NavigationLink key={link.path} link={link} language={language} onClick={() => setMenuOpen(false)} />)}
                    </div>
                )}
            </nav>
        </header>
    );
}

function NavigationLink({ link, language, onClick }) {
    return (
        <NavLink to={link.path} onClick={onClick} className={({ isActive }) => `rounded-xl px-4 py-2 text-center text-sm font-medium transition-all duration-200 ${isActive ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/35" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}>
            {link[language]}
        </NavLink>
    );
}
