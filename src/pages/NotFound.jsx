import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <main className="mx-auto flex min-h-[70vh] max-w-6xl flex-col justify-center px-5 sm:px-8">
            <p className="font-mono text-sm text-[#4f46e5]">Error 404</p>
            <h1 className="mt-4 text-5xl font-bold tracking-tight text-[#172033]">
                Page not found.
            </h1>
            <p className="mt-5 text-slate-600">
                The page you requested does not exist.
            </p>
            <Link
                className="mt-8 w-fit rounded-xl bg-[#4f46e5] px-5 py-3 font-bold text-white"
                to="/"
            >
                Return home
            </Link>
        </main>
    );
}
