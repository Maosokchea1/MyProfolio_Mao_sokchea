import { useEffect, useMemo, useState } from "react";
import { siteConfig } from "../config/site";
import { getProfile } from "../services/profileService";
import { ProfileContext } from "./profileContext";

export default function ProfileProvider({ children }) {
    const [apiProfile, setApiProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getProfile()
            .then((response) => setApiProfile(response.data))
            .catch(() => setApiProfile(null))
            .finally(() => setLoading(false));
    }, []);

    const profile = useMemo(
        () => ({
            full_name: apiProfile?.full_name || siteConfig.ownerName,
            title: apiProfile?.title || siteConfig.role,
            description: apiProfile?.description || siteConfig.description,
            profile_image: apiProfile?.profile_image || "",
            email: apiProfile?.email || "",
            phone: apiProfile?.phone || "",
            address: apiProfile?.address || "",
            cv_file: apiProfile?.cv_file || "",
        }),
        [apiProfile],
    );

    return (
        <ProfileContext.Provider value={{ profile, loading }}>
            {children}
        </ProfileContext.Provider>
    );
}
