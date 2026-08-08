import api from "./api";

export const getServices = () => api.get('/services');

export const getServices = async () => {
    const response = await api.get("/services");
    return response.data;
};
