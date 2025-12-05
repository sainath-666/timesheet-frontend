import { AppShell } from "@/components/layout/AppShell";
import {
  employeeTimesheets,
  getEntriesForTimesheet,
  TimesheetStatus,
} from "@/data/mockData";

export default function TimesheetDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  const ts = employeeTimesheets.find((t) => t.id === id);

  if (!ts) {
    return (
      <AppShell role="EMPLOYEE">
        <p className="text-sm text-slate-400">Timesheet not found.</p>
      </AppShell>
    );
  }

  const entries = getEntriesForTimesheet(ts.id);

  return (
    <AppShell role="EMPLOYEE">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold">Timesheet Details</h1>
          <p className="text-xs text-slate-400">{ts.periodLabel}</p>
        </div>
        <div className="space-x-2">
          <button className="text-xs px-3 py-1.5 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800">
            Save Draft (UI only)
          </button>
          <button className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90">
            Submit (UI only)
          </button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3 mb-4">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Total Hours</p>
          <p className="text-2xl font-semibold">{ts.totalHours}h</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Status</p>
          <p className="text-sm">{ts.status}</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
          <p className="text-xs text-slate-400 mb-1">Submitted</p>
          <p className="text-sm">{ts.submittedAt ?? "Not submitted"}</p>
        </div>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <h2 className="text-sm font-semibold mb-3">Daily Entries</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 border-b border-slate-800">
                <th className="text-left py-2">Date</th>
                <th className="text-left py-2">Project</th>
                <th className="text-left py-2">Task</th>
                <th className="text-left py-2">Hours</th>
                <th className="text-left py-2">Billable</th>
              </tr>
            </thead>
            <tbody>
              {entries.map((e) => (
                <tr
                  key={e.id}
                  className="border-b border-slate-900 hover:bg-slate-800/60 transition"
                >
                  <td className="py-2">
                    {new Date(e.date).toLocaleDateString()}
                  </td>
                  <td className="py-2">{e.project}</td>
                  <td className="py-2">{e.task}</td>
                  <td className="py-2">{e.hours}h</td>
                  <td className="py-2">{e.isBillable ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
