import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PreferencesContext = createContext(null);

export function PreferencesProvider({ children }) {
    const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "dark");
    const [language, setLanguage] = useState(() => localStorage.getItem("language") || "en");

    useEffect(() => {
        document.documentElement.dataset.theme = theme;
        document.documentElement.classList.toggle("light", theme === "light");
        localStorage.setItem("theme", theme);
    }, [theme]);

    useEffect(() => {
        document.documentElement.lang = language === "km" ? "km" : "en";
        localStorage.setItem("language", language);
    }, [language]);

    const value = useMemo(() => ({
        theme,
        language,
        toggleTheme: () => setTheme((value) => (value === "dark" ? "light" : "dark")),
        toggleLanguage: () => setLanguage((value) => (value === "en" ? "km" : "en")),
    }), [theme, language]);

    return <PreferencesContext.Provider value={value}>{children}</PreferencesContext.Provider>;
}

export function usePreferences() {
    return useContext(PreferencesContext);
}
