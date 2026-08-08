import axios from "axios";

// ធានាថា baseURL មិនមានសញ្ញា / លើសនៅចុងបញ្ចប់ និងបន្ថែម /api ຖ້າចាំបាច់
const getBaseUrl = () => {
    const envUrl = import.meta.env.VITE_API_URL;
    if (!envUrl) return "http://127.0.0.1:8000/api";
    
    // លុបសញ្ញា / ខាងចុងចេញ ប្រសិនបើមាន ដើម្បីការពារបញ្ហា double slash //
    const cleanUrl = envUrl.replace(/\/+$/, "");
    
    // បញ្ចូល /api ទៅជាមួយ ប្រសិនបើ Link ក្នុង env មិនទាន់มีคำว่า /api
    return cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;
};

const api = axios.create({
    baseURL: getBaseUrl(),
    withCredentials: true,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error:", error.response?.data || error.message);
        return Promise.reject(error);
    }
);

export default api;