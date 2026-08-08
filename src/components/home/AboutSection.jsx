import { useProfile } from "../../contexts/profileContext";
import SectionTitle from "../ui/SectionTitle";

export default function AboutSection() {
    const { profile, loading } = useProfile();

    return (
        <section className="relative border-b border-slate-800 bg-slate-950 text-white overflow-hidden">
            {/* Background Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-indigo-500/5 blur-3xl pointer-events-none" />

            <div className="relative mx-auto max-w-4xl px-5 py-20 sm:px-8 md:py-28 text-center">
                {/* Section Title Area (Centered) */}
                <div className="flex flex-col items-center">
                    <SectionTitle subtitle={profile.title}>
                        <span className="bg-linear-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                            About me
                        </span>
                    </SectionTitle>
                </div>

                {/* Content Card Area (Centered) */}
                <div className="mt-12 relative rounded-3xl border border-slate-800 bg-slate-900/60 p-8 shadow-2xl backdrop-blur-xl sm:p-12 text-left">
                    {/* Inner Glow Border Effect */}
                    <div className="absolute -inset-px rounded-3xl bg-linear-to-b from-indigo-500/20 via-transparent to-transparent opacity-50 pointer-events-none" />

                    <div className="relative">
                        {loading ? (
                            <div className="flex items-center justify-center py-10">
                                <div className="flex items-center gap-3 text-slate-400">
                                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-indigo-500 border-t-transparent" />
                                    <span className="text-sm font-medium">Loading profile...</span>
                                </div>
                            </div>
                        ) : (
                            <>
                                <p className="text-base leading-relaxed text-slate-300 sm:text-lg text-center">
                                    {profile.description}
                                </p>

                                <dl className="mt-8 grid gap-4 border-t border-slate-800/80 pt-8 sm:grid-cols-3">
                                    {profile.email && (
                                        <ProfileItem label="Email" value={profile.email} />
                                    )}
                                    {profile.phone && (
                                        <ProfileItem label="Phone" value={profile.phone} />
                                    )}
                                    {profile.address && (
                                        <ProfileItem
                                            label="Location"
                                            value={profile.address}
                                        />
                                    )}
                                </dl>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}

function ProfileItem({ label, value }) {
    return (
        <div className="group rounded-2xl border border-slate-800/60 bg-slate-900/40 p-4 text-center transition-all duration-300 hover:border-slate-700 hover:bg-slate-800/50">
            <dt className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-indigo-400 transition-colors">
                {label}
            </dt>
            <dd className="mt-1.5 text-sm font-semibold text-slate-200 wrap-break-word">
                {value}
            </dd>
        </div>
    );
}