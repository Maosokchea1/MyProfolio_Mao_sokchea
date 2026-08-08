import api from "./api";
export const getSkills = () => api.get('/skills');

export const getSkills = async () => {
    const response = await api.get("/skills");
    return response.data;
};