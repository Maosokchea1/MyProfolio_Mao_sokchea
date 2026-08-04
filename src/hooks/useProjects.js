import { useEffect, useState } from "react";
import { getProjects } from "../services/projectService";

export default function useProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getProjects()
            .then((response) => setProjects(response.data ?? []))
            .catch(() => setError("Unable to load projects. Make sure the backend is running."))
            .finally(() => setLoading(false));
    }, []);

    return { projects, loading, error };
}
