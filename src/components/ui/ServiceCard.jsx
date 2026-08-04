import { backendAssetUrl } from "../../utils/assetUrl";

export default function ServiceCard({ service, number }) {
    const iconIsImage =
        /^https?:\/\//i.test(service.icon || "") ||
        /\.(png|jpe?g|webp|gif|svg)$/i.test(service.icon || "");

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                {iconIsImage ? (
                    <img
                        src={backendAssetUrl(service.icon)}
                        alt=""
                        className="h-12 w-12 rounded-xl border border-slate-200 object-cover"
                    />
                ) : (
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-indigo-100 text-lg font-bold text-[#4f46e5]">
                        {service.icon || String(number).padStart(2, "0")}
                    </span>
                )}
                <span className="font-mono text-xs text-slate-400">
                    {String(number).padStart(2, "0")}
                </span>
            </div>
            <h3 className="mt-6 text-xl font-bold tracking-tight text-[#172033]">
                {service.name}
            </h3>
            {service.description && (
                <p className="mt-3 leading-7 text-slate-600">
                    {service.description}
                </p>
            )}
        </article>
    );
}
