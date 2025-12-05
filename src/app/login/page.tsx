export default function LoginPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl p-8 shadow-lg">
        <h1 className="text-2xl font-semibold mb-2 text-slate-50">
          Welcome back
        </h1>
        <p className="text-sm text-slate-400 mb-6">
          Sign in to access your timesheets.
        </p>

        <form className="space-y-4">
          <div className="space-y-1">
            <label className="text-sm text-slate-300">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="you@example.com"
            />
          </div>

          <div className="space-y-1">
            <label className="text-sm text-slate-300">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 rounded-lg bg-slate-950 border border-slate-700 text-slate-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full mt-2 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-xs text-slate-500 mt-6 text-center">
          Demo only – login logic will come later.
        </p>
      </div>
    </main>
  );
}
