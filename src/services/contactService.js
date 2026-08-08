import api from "./api";

export const sendContactMessage = async (formData) => {
    const response = await api.post("/contacts", formData);
    return response.data;
};