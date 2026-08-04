import { useState } from "react";
import SectionTitle from "../components/ui/SectionTitle";
import { sendContactMessage } from "../services/contactService";

const emptyForm = {
    name: "",
    email: "",
    subject: "",
    message: "",
};

export default function Contact() {
    const [form, setForm] = useState(emptyForm);
    const [status, setStatus] = useState({ type: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const updateField = (event) => {
        setForm((currentForm) => ({
            ...currentForm,
            [event.target.name]: event.target.value,
        }));
    };

    const submitForm = async (event) => {
        event.preventDefault();
        setSubmitting(true);
        setStatus({ type: "", message: "" });

        try {
            const response = await sendContactMessage(form);
            setStatus({ type: "success", message: response.message });
            setForm(emptyForm);
        } catch (error) {
            const validationErrors = error.response?.data?.errors;
            const message = validationErrors
                ? Object.values(validationErrors).flat()[0]
                : "Unable to send your message.";

            setStatus({ type: "error", message });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <section className="mx-auto min-h-[70vh] max-w-3xl px-5 py-20 sm:px-8 md:py-24">
            <SectionTitle subtitle="I will get back to you as soon as possible">
                Contact Me
            </SectionTitle>

            <form
                onSubmit={submitForm}
                className="space-y-5 rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
            >
                <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Your name" htmlFor="name">
                        <input
                            id="name"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                            name="name"
                            value={form.name}
                            onChange={updateField}
                            autoComplete="name"
                            required
                        />
                    </FormField>
                    <FormField label="Email address" htmlFor="email">
                        <input
                            id="email"
                            className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                            name="email"
                            type="email"
                            value={form.email}
                            onChange={updateField}
                            autoComplete="email"
                            required
                        />
                    </FormField>
                </div>

                <FormField label="Subject" htmlFor="subject">
                    <input
                        id="subject"
                        className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                        name="subject"
                        value={form.subject}
                        onChange={updateField}
                    />
                </FormField>

                <FormField label="Message" htmlFor="message">
                    <textarea
                        id="message"
                        className="min-h-44 w-full rounded-xl border border-slate-300 bg-white px-4 py-3"
                        name="message"
                        value={form.message}
                        onChange={updateField}
                        required
                    />
                </FormField>

                {status.message && (
                    <p
                        className={
                            status.type === "success"
                                ? "text-emerald-700"
                                : "text-red-700"
                        }
                    >
                        {status.message}
                    </p>
                )}

                <button
                    disabled={submitting}
                    className="w-full rounded-xl bg-[#4f46e5] px-6 py-3 font-bold text-white hover:bg-[#4338ca] disabled:opacity-60"
                >
                    {submitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </section>
    );
}

function FormField({ label, htmlFor, children }) {
    return (
        <div>
            <label
                className="mb-2 block text-sm font-bold text-slate-700"
                htmlFor={htmlFor}
            >
                {label}
            </label>
            {children}
        </div>
    );
}
