"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const employeeLinks = [
  { href: "/dashboard", label: "My Dashboard" },
  { href: "/timesheets", label: "My Timesheets" },
];

const adminLinks = [
  { href: "/admin/dashboard", label: "Admin Dashboard" },
  { href: "/admin/timesheets", label: "All Timesheets" },
];

function NavLink({ href, label }: { href: string; label: string }) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-lg text-sm transition ${
        isActive
          ? "bg-primary text-primary-foreground"
          : "text-slate-400 hover:bg-slate-800 hover:text-slate-50"
      }`}
    >
      {label}
    </Link>
  );
}

export function AppShell({
  children,
  role = "EMPLOYEE",
}: {
  children: ReactNode;
  role?: "EMPLOYEE" | "ADMIN";
}) {
  const links = role === "EMPLOYEE" ? employeeLinks : adminLinks;

  return (
    <div className="min-h-screen bg-background text-foreground flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-slate-800 bg-slate-950/70 px-4 py-6 flex flex-col">
        <div className="flex items-center gap-2 mb-8 px-2">
          <div className="h-8 w-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary text-lg font-bold">
            T
          </div>
          <div>
            <div className="text-sm font-semibold">Timesheet</div>
            <div className="text-xs text-slate-400">
              {role === "EMPLOYEE" ? "Employee" : "Admin"} Panel
            </div>
          </div>
        </div>

        <nav className="flex-1 space-y-1">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </nav>

        <div className="mt-6 border-t border-slate-800 pt-4 text-xs text-slate-500">
          Logged in as <span className="font-medium">Sai</span>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-950/60 backdrop-blur">
          <div>
            <h1 className="text-lg font-semibold">
              Timesheet Dashboard
            </h1>
            <p className="text-xs text-slate-400">
              Track your hours and approvals.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-xs text-slate-400">Good day, Sai 👋</span>
            <div className="h-9 w-9 rounded-full bg-slate-700 flex items-center justify-center text-xs">
              SR
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6 bg-gradient-to-b from-slate-950 to-slate-900">
          {children}
        </main>
      </div>
    </div>
  );
}
