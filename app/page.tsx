"use client";

export default function Home() {
  const form = new FormData();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    form.append("first", data.first);
    form.append("last", data.last);
    form.append("email", data.email);
    form.append("message", data.message);
    alert("Sent: " + JSON.stringify(data));
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-3">
        <input name="first" placeholder="First name" required className="w-full rounded border px-3 py-2" />
        <input name="last" placeholder="Last name" required className="w-full rounded border px-3 py-2" />
        <input name="email" type="email" placeholder="Email" required className="w-full rounded border px-3 py-2" />
        <textarea name="message" placeholder="Message" required className="w-full rounded border px-3 py-2 h-24" />
        <button type="submit" className="rounded bg-black text-white px-4 py-2">Send</button>
      </form>
    </main>
  );
}
