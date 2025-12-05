import { AppShell } from "@/components/layout/AppShell";
import { adminAllTimesheets, TimesheetStatus } from "@/data/mockData";

function StatusBadge({ status }: { status: TimesheetStatus }) {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  switch (status) {
    case "APPROVED":
      return (
        <span className={`${base} bg-emerald-500/15 text-emerald-400`}>
          Approved
        </span>
      );
    case "REJECTED":
      return (
        <span className={`${base} bg-rose-500/15 text-rose-400`}>
          Rejected
        </span>
      );
    case "SUBMITTED":
      return (
        <span className={`${base} bg-amber-500/15 text-amber-400`}>
          Submitted
        </span>
      );
    default:
      return (
        <span className={`${base} bg-slate-500/15 text-slate-300`}>
          Draft
        </span>
      );
  }
}

export default function AdminTimesheetsPage() {
  const data = adminAllTimesheets;

  return (
    <AppShell role="ADMIN">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold">All Timesheets</h1>
        <p className="text-xs text-slate-400">
          Demo-only data. Approve/Reject buttons are UI stubs.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 border-b border-slate-800">
                <th className="text-left py-2">Employee</th>
                <th className="text-left py-2">Period</th>
                <th className="text-left py-2">Hours</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Submitted</th>
                <th className="text-right py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((ts) => (
                <tr
                  key={ts.id}
                  className="border-b border-slate-900 hover:bg-slate-800/60 transition"
                >
                  <td className="py-2">{ts.employeeName}</td>
                  <td className="py-2">{ts.periodLabel}</td>
                  <td className="py-2">{ts.totalHours}h</td>
                  <td className="py-2">
                    <StatusBadge status={ts.status} />
                  </td>
                  <td className="py-2 text-slate-400">
                    {ts.submittedAt ?? "—"}
                  </td>
                  <td className="py-2 text-right space-x-2">
                    <a
                      href={`/admin/timesheets/${ts.id}`}
                      className="text-xs px-2 py-1 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800"
                    >
                      Review
                    </a>
                    <button className="text-xs px-2 py-1 rounded-lg bg-emerald-600/80 text-white hover:bg-emerald-500/90">
                      Quick Approve (UI)
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </AppShell>
  );
}

