import { backendAssetUrl } from "../../utils/assetUrl";

export default function SkillCard({ skill }) {
    const iconIsImage =
        /^https?:\/\//i.test(skill.icon || "") ||
        /\.(png|jpe?g|webp|gif|svg)$/i.test(skill.icon || "");

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                    {iconIsImage ? (
                        <img
                            src={backendAssetUrl(skill.icon)}
                            alt=""
                            className="h-11 w-11 rounded-xl border border-slate-200 object-contain p-1"
                            onError={(event) => {
                                event.currentTarget.style.display = "none";
                            }}
                        />
                    ) : (
                        <span className="grid h-11 w-11 place-items-center rounded-xl bg-indigo-100 text-sm font-bold text-[#4f46e5]">
                            {skill.icon || skill.name.slice(0, 2).toUpperCase()}
                        </span>
                    )}

                    <div>
                        <h3 className="font-bold text-[#172033]">
                            {skill.name}
                        </h3>
                        <p className="mt-1 text-sm text-slate-500">
                            {skill.category || "Development"}
                        </p>
                    </div>
                </div>

                <span className="rounded-lg bg-indigo-50 px-2 py-1 font-mono text-sm text-[#4f46e5]">
                    {skill.percentage}%
                </span>
            </div>

            <div className="mt-5 h-2 overflow-hidden rounded-full bg-slate-100">
                <div
                    className="h-full rounded-full bg-[#4f46e5]"
                    style={{ width: `${skill.percentage}%` }}
                    role="progressbar"
                    aria-label={`${skill.name} proficiency`}
                    aria-valuemin="0"
                    aria-valuemax="100"
                    aria-valuenow={skill.percentage}
                />
            </div>
        </article>
    );
}
