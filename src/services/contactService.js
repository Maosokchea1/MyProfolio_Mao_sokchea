import api from "./api";

export const sendContactMessage = async (formData) => {
    // ត្រូវធានាថាវាហៅទៅកាន់ /contacts (ព្រោះ api.js បានថែម /api ឱ្យស្រេចហើយ)
    const response = await api.post("/contacts", formData);
    return response.data;
};