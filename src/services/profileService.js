import api from "./api";

export const getProfile = async () => (await api.get("/profile")).data;
export const getEducations = async () => (await api.get("/educations")).data;
export const getExperiences = async () => (await api.get("/experiences")).data;
