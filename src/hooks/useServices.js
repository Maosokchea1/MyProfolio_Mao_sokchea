import { useEffect, useState } from "react";
import { getServices } from "../services/serviceService";

export default function useServices() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        getServices()
            .then((response) => setServices(response.data ?? []))
            .catch(() => setError("Unable to load services."))
            .finally(() => setLoading(false));
    }, []);

    return { services, loading, error };
}
