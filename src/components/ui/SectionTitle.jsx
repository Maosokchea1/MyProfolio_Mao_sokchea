export default function SectionTitle({ children, subtitle }) {
    return (
        <header className="mb-10 max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#4f46e5]">
               
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-[#172033] sm:text-4xl">
                {children}
            </h2>
            {subtitle && (
                <p className="mt-4 leading-7 text-slate-600">{subtitle}</p>
            )}
        </header>
    );
}
