import { AppShell } from "@/components/layout/AppShell";
import { adminDashboardSummary } from "@/data/mockData";

export default function AdminDashboardPage() {
  const summary = adminDashboardSummary;

  return (
    <AppShell role="ADMIN">
      <div className="grid gap-4 md:grid-cols-3 mb-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Employees</p>
          <p className="text-3xl font-bold text-slate-100">
            {summary.totalEmployees}
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Hours (This Week)</p>
          <p className="text-3xl font-bold text-primary">
            {summary.totalHoursThisWeek}h
          </p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Pending Timesheets</p>
          <p className="text-3xl font-bold text-amber-400">
            {summary.pendingTimesheets}
          </p>
        </div>
      </div>

      <p className="text-xs text-slate-400">
        This is just a sample admin dashboard. Below we’ll use the "All
        Timesheets" page for approvals.
      </p>
    </AppShell>
  );
}
