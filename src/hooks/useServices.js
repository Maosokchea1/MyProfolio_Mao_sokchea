import { useEffect, useState } from "react";
import api from "../services/api";

export default function useSkills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        api.get('/skills')
            .then((response) => setSkills(response.data.data ?? []))
            .catch(() => setError("Unable to load skills."))
            .finally(() => setLoading(false));
    }, []);

    return { skills, loading, error };
}