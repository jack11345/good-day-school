"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const DEMO_ACCOUNTS = [
  { role: "Teacher", email: "teacher@goodday.edu.pk", password: "teacher123", icon: "📚" },
  { role: "Admin", email: "admin@goodday.edu.pk", password: "admin123", icon: "🏫" },
  { role: "Accountant", email: "accounts@goodday.edu.pk", password: "accounts123", icon: "💰" },
  { role: "Parent", email: "parent@example.com", password: "parent123", icon: "👨‍👩‍👧" },
];

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await signIn("credentials", { email, password, redirect: false });
    if (res?.ok) {
      router.push("/lms");
    } else {
      setError("Invalid email or password.");
    }
    setLoading(false);
  }

  async function quickLogin(acc: (typeof DEMO_ACCOUNTS)[0]) {
    setLoading(true);
    const res = await signIn("credentials", { email: acc.email, password: acc.password, redirect: false });
    if (res?.ok) router.push("/lms");
    setLoading(false);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0E8D8] px-4">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[#4A1313] mb-4 shadow-lift">
            <span className="text-[#C9A961] text-2xl font-serif font-semibold">GD</span>
          </div>
          <h1 className="font-serif text-3xl font-semibold text-[#4A1313]">Good Day School</h1>
          <p className="text-sm text-[#7A6A5A] mt-1">Staff & Parent Portal · Rawalpindi</p>
        </div>

        {/* Login form */}
        <div className="bg-white rounded-2xl shadow-card p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#7A6A5A] uppercase tracking-widest mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@goodday.edu.pk"
                required
                className="w-full border border-[#D9CDB5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6B1F1F] bg-[#FAF6EE]"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-[#7A6A5A] uppercase tracking-widest mb-1.5">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full border border-[#D9CDB5] rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-[#6B1F1F] bg-[#FAF6EE]"
              />
            </div>
            {error && (
              <p className="text-xs text-[#C0392B] bg-[#FAEAEA] px-3 py-2 rounded-lg">{error}</p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#4A1313] hover:bg-[#6B1F1F] text-[#FAF6EE] font-semibold py-3 rounded-xl transition-colors disabled:opacity-60"
            >
              {loading ? "Signing in…" : "Sign in →"}
            </button>
          </form>
        </div>

        {/* Quick access demo chips */}
        <div className="mt-6">
          <p className="text-center text-xs text-[#7A6A5A] mb-3 uppercase tracking-widest">Quick demo access</p>
          <div className="grid grid-cols-2 gap-2">
            {DEMO_ACCOUNTS.map(acc => (
              <button
                key={acc.role}
                onClick={() => quickLogin(acc)}
                disabled={loading}
                className="flex items-center gap-2 bg-white hover:bg-[#FAF6EE] border border-[#D9CDB5] hover:border-[#C9A961] rounded-xl px-3 py-2.5 text-sm font-medium text-[#4A1313] transition-all disabled:opacity-60"
              >
                <span>{acc.icon}</span>
                <span>{acc.role}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
