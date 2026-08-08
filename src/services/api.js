import axios from "axios";

// ធានាថា baseURL មិនមានសញ្ញា / លើសនៅចុងបញ្ចប់ និងបន្ថែម /api ຖ້າចាំបាច់
const getBaseUrl = () => {
    // យកតម្លៃពី VITE_API_URL ឬប្រើ Link Railway ផ្ទាល់
    const envUrl = import.meta.env.VITE_API_URL || 'https://myprofoliobackend-production.up.railway.app/api';
    
    // លុបសញ្ញា / ខាងចុងចេញ ប្រសិនបើមាន ដើម្បីការពារបញ្ហា double slash //
    const cleanUrl = envUrl.replace(/\/+$/, "");
    
    // បញ្ចូល /api ទៅជាមួយ ប្រសិនបើ Link ក្នុង env មិនទាន់មានពាក្យ /api
    return cleanUrl.endsWith("/api") ? cleanUrl : `${cleanUrl}/api`;
};

const api = axios.create({
    baseURL: getBaseUrl(),
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