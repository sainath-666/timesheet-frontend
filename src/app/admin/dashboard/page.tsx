import { AppShell } from "@/components/layout/AppShell";
import { StatsCards } from "@/components/dashboard/StatsCards";
import { OverviewChart } from "@/components/dashboard/OverviewChart";
import { ProjectDistribution } from "@/components/dashboard/ProjectDistribution";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { TopEmployees } from "@/components/dashboard/TopEmployees";

export default function AdminDashboardPage() {
  return (
    <AppShell role="ADMIN">
      <div className="flex flex-col space-y-8 pb-8">
        {/* Header Section */}
        <div className="flex items-center justify-between space-y-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-slate-100">
              Dashboard
            </h2>
            <p className="text-slate-400">
              Overview of your team&apos;s performance and project status.
            </p>
          </div>
          <div className="flex items-center space-x-2">
            {/* Add DateRangePicker or similar controls here if needed */}
            <span className="text-sm text-slate-500 bg-slate-900/50 px-3 py-1 rounded-full border border-slate-800">
              Last Updated: Just now
            </span>
          </div>
        </div>

        {/* Stats Row */}
        <StatsCards />

        {/* Charts Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <OverviewChart />
          <ProjectDistribution />
        </div>

        {/* Lists Row */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
          <TopEmployees />
          <RecentActivity />
        </div>
      </div>
    </AppShell>
  );
}
