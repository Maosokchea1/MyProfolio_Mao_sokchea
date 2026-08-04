import api from "./api";

export const getProjects = async () => {
    const response = await api.get("/projects");
    return response.data;
};

export const getProjectBySlug = async (slug) => {
    const response = await api.get(`/projects/${slug}`);
    return response.data;
};