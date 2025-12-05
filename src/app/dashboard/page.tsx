import { AppShell } from "@/components/layout/AppShell";

const dummySummary = {
  weekRange: "Dec 1 – Dec 7, 2025",
  totalHours: 40,
  pendingTimesheets: 1,
  approvedTimesheets: 8,
};

const recentTimesheets = [
  {
    id: 1,
    period: "Nov 24 – Nov 30",
    totalHours: 42,
    status: "APPROVED",
    submittedAt: "Nov 30",
  },
  {
    id: 2,
    period: "Nov 17 – Nov 23",
    totalHours: 38,
    status: "REJECTED",
    submittedAt: "Nov 23",
  },
  {
    id: 3,
    period: "Nov 10 – Nov 16",
    totalHours: 40,
    status: "PENDING",
    submittedAt: "Nov 16",
  },
];

function StatusBadge({ status }: { status: string }) {
  const base = "px-2 py-1 rounded-full text-xs font-medium";
  if (status === "APPROVED")
    return <span className={`${base} bg-emerald-500/15 text-emerald-400`}>Approved</span>;
  if (status === "REJECTED")
    return <span className={`${base} bg-rose-500/15 text-rose-400`}>Rejected</span>;
  return <span className={`${base} bg-amber-500/15 text-amber-400`}>Pending</span>;
}

export default function DashboardPage() {
  return (
    <AppShell role="EMPLOYEE">
      {/* Top summary cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs text-slate-400 mb-1">This Week</div>
          <div className="text-lg font-semibold mb-1">
            {dummySummary.weekRange}
          </div>
          <div className="text-3xl font-bold text-primary">
            {dummySummary.totalHours}h
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Total logged hours
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs text-slate-400 mb-1">Pending</div>
          <div className="text-3xl font-bold text-amber-400">
            {dummySummary.pendingTimesheets}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Timesheets waiting for approval
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4">
          <div className="text-xs text-slate-400 mb-1">Approved</div>
          <div className="text-3xl font-bold text-emerald-400">
            {dummySummary.approvedTimesheets}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Timesheets approved so far
          </div>
        </div>
      </div>

      {/* Recent timesheets table */}
      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-slate-100">
            Recent Timesheets
          </h2>
          <button className="text-xs px-3 py-1.5 rounded-lg bg-primary text-primary-foreground hover:opacity-90">
            + New Timesheet
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 border-b border-slate-800">
                <th className="text-left py-2">Period</th>
                <th className="text-left py-2">Hours</th>
                <th className="text-left py-2">Status</th>
                <th className="text-left py-2">Submitted</th>
                <th className="text-right py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {recentTimesheets.map((ts) => (
                <tr
                  key={ts.id}
                  className="border-b border-slate-900 hover:bg-slate-800/60 transition"
                >
                  <td className="py-2">{ts.period}</td>
                  <td className="py-2">{ts.totalHours}h</td>
                  <td className="py-2">
                    <StatusBadge status={ts.status} />
                  </td>
                  <td className="py-2 text-slate-400">{ts.submittedAt}</td>
                  <td className="py-2 text-right">
                    <button className="text-xs px-2 py-1 rounded-lg border border-slate-700 text-slate-200 hover:bg-slate-800">
                      View
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
