import { createContext, useContext, useEffect, useMemo, useState } from "react";

const PreferencesContext = createContext(null);

function readStorageValue(key, fallback) {
    try {
        return localStorage.getItem(key) || fallback;
    } catch {
        return fallback;
    }
}

export function PreferencesProvider({ children }) {
    const [theme, setTheme] = useState(() => readStorageValue("theme", "dark"));
    const [language, setLanguage] = useState(() => readStorageValue("language", "en"));

    useEffect(() => {
        try {
            document.documentElement.dataset.theme = theme;
            document.documentElement.classList.toggle("light", theme === "light");
            localStorage.setItem("theme", theme);
        } catch {
            // Ignore storage or document access errors and keep rendering.
        }
    }, [theme]);

    useEffect(() => {
        try {
            document.documentElement.lang = language === "km" ? "km" : "en";
            localStorage.setItem("language", language);
        } catch {
            // Ignore storage or document access errors and keep rendering.
        }
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
    return useContext(PreferencesContext) || {
        theme: "dark",
        language: "en",
        toggleTheme: () => {},
        toggleLanguage: () => {},
    };
}
