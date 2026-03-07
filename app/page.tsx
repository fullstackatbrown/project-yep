"use client";

import { FormEvent, useState } from "react";

export default function Home() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);

    const formElement = e.currentTarget;
    const data = Object.fromEntries(new FormData(formElement));

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message ?? "Failed to send message.");
      }

      setStatus("Message sent successfully.");
      formElement.reset();
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send message.";
      setStatus(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <input name="first" placeholder="First name" required className="w-full rounded border px-3 py-2" />
        <input name="last" placeholder="Last name" required className="w-full rounded border px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
        <textarea name="message" placeholder="Message" required className="w-full rounded border px-3 py-2 h-24" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="rounded bg-black text-white px-4 py-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending..." : "Send"}
        </button>
        {status ? <p className="text-sm">{status}</p> : null}
      </form>
    </main>
  );
}
