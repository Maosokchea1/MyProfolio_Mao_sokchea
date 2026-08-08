import { useEffect, useState } from "react";
import api from "../services/api"; // ហៅ api.js ផ្ទាល់

export default function useProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        api.get('/projects') // ប្រើ api.get ត្រង់នេះ
            .then((response) => setProjects(response.data.data ?? []))
            .catch(() => setError("Unable to load projects."))
            .finally(() => setLoading(false));
    }, []);

    return { projects, loading, error };
}