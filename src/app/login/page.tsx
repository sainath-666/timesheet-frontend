"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"EMPLOYEE" | "ADMIN">("EMPLOYEE");
  const [email, setEmail] = useState("employee@example.com");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    // No real auth yet – just route based on selected role
    if (role === "ADMIN") router.push("/admin/dashboard");
    else router.push("/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-xl">
        <h1 className="text-2xl font-semibold mb-2 text-slate-50">
          Timesheet Login
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          This is a demo UI – authentication will be wired later.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Role</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole("EMPLOYEE")}
                className={`py-2 rounded-lg text-xs border ${
                  role === "EMPLOYEE"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-slate-950 border-slate-700 text-slate-300"
                }`}
              >
                Employee
              </button>
              <button
                type="button"
                onClick={() => setRole("ADMIN")}
                className={`py-2 rounded-lg text-xs border ${
                  role === "ADMIN"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-slate-950 border-slate-700 text-slate-300"
                }`}
              >
                Admin
              </button>
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-3 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Sign In (Demo)
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-6 text-center">
          Use role buttons above to simulate Employee or Admin login.
        </p>
      </div>
    </main>
  );
}
