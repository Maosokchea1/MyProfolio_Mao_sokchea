import { useEffect, useState } from "react";
import { getSkills } from "../services/skillService";

export default function useSkills() {
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getSkills()
            .then((response) => setSkills(response.data ?? []))
            .catch(() => setError("Unable to load skills. Make sure the backend is running."))
            .finally(() => setLoading(false));
    }, []);

    return { skills, loading, error };
}
