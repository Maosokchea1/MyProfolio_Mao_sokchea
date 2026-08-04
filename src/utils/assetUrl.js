const apiUrl = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000/api";
const backendUrl = apiUrl.replace(/\/api\/?$/, "");

export function backendAssetUrl(path) {
    if (!path) return "";
    if (/^https?:\/\//i.test(path)) return path;

    const cleanPath = path.replace(/^\/+/, "");
    const storagePath = cleanPath.startsWith("storage/")
        ? cleanPath
        : `storage/${cleanPath}`;

    return `${backendUrl}/${storagePath}`;
}
