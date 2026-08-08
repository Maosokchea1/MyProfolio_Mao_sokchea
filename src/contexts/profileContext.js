import { createContext, useContext } from "react";

export const ProfileContext = createContext(null);

export function useProfile() {
    return useContext(ProfileContext) || {
        profile: {
            full_name: "Mao Sokchea",
            title: "Full Stack Developer",
            description: "Passionate Software Developer and Computer Science student focused on React, Laravel, C#, SQL Server and MySQL.",
            profile_image: "",
            email: "",
            phone: "",
            address: "",
            cv_file: "",
        },
        loading: false,
    };
}
