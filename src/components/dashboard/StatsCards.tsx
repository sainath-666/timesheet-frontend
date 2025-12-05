"use client";

import { Card, CardContent } from "@/components/ui/card";
import { dashboardStats } from "@/data/dashboard-data";
import { Users, Briefcase, Clock, TrendingUp, DollarSign } from "lucide-react";

export function StatsCards() {
  const stats = [
    {
      label: "Total Employees",
      value: dashboardStats.totalEmployees,
      icon: Users,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      trend: "+12% vs last month",
    },
    {
      label: "Active Projects",
      value: dashboardStats.activeProjects,
      icon: Briefcase,
      color: "text-violet-500",
      bg: "bg-violet-500/10",
      trend: "+2 new projects",
    },
    {
      label: "Total Hours",
      value: dashboardStats.totalHours,
      icon: Clock,
      color: "text-amber-500",
      bg: "bg-amber-500/10",
      trend: "+5% vs last week",
    },
    {
      label: "Revenue (Est.)",
      value: dashboardStats.revenue,
      icon: DollarSign,
      color: "text-emerald-500",
      bg: "bg-emerald-500/10",
      trend: "+8% growth",
    },
  ];

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card
          key={index}
          className="border-slate-800 bg-slate-900/50 backdrop-blur-sm overflow-hidden relative group"
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.bg.replace(
              "/10",
              "/5"
            )} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
          />
          <CardContent className="p-6 relative z-10">
            <div className="flex items-center justify-between space-y-0 pb-2">
              <p className="text-sm font-medium text-slate-400">{stat.label}</p>
              <div className={`p-2 rounded-full ${stat.bg}`}>
                <stat.icon className={`h-4 w-4 ${stat.color}`} />
              </div>
            </div>
            <div className="flex flex-col mt-2">
              <div className="text-3xl font-bold text-slate-100">
                {stat.value}
              </div>
              <p className="text-xs text-slate-500 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1 text-emerald-500" />
                <span className="text-emerald-500 font-medium">
                  {stat.trend}
                </span>
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
