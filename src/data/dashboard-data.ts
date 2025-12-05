export interface MonthlyData {
  name: string;
  hours: number;
  billable: number;
}

export interface ProjectData {
  name: string;
  hours: number;
  color: string;
}

export interface EmployeePerformance {
  id: string;
  name: string;
  role: string;
  hours: number;
  efficiency: number; // 0-100
  avatar?: string;
}

export interface Activity {
  id: string;
  user: string;
  action: string;
  project: string;
  time: string; // "2m ago"
}

export const monthlyData: MonthlyData[] = [
  { name: "Jan", hours: 1200, billable: 900 },
  { name: "Feb", hours: 1100, billable: 850 },
  { name: "Mar", hours: 1300, billable: 1100 },
  { name: "Apr", hours: 1250, billable: 1050 },
  { name: "May", hours: 1400, billable: 1300 },
  { name: "Jun", hours: 1550, billable: 1400 },
  { name: "Jul", hours: 1600, billable: 1450 },
];

export const projectData: ProjectData[] = [
  { name: "Website Redesign", hours: 450, color: "#6366f1" }, // Indigo
  { name: "Mobile App", hours: 320, color: "#8b5cf6" }, // Violet
  { name: "Cloud Migration", hours: 280, color: "#ec4899" }, // Pink
  { name: "Internal Tools", hours: 150, color: "#14b8a6" }, // Teal
  { name: "Marketing", hours: 100, color: "#f59e0b" }, // Amber
];

export const topEmployees: EmployeePerformance[] = [
  {
    id: "1",
    name: "Alice Johnson",
    role: "Frontend Dev",
    hours: 168,
    efficiency: 98,
  },
  {
    id: "2",
    name: "Bob Smith",
    role: "Backend Dev",
    hours: 160,
    efficiency: 95,
  },
  {
    id: "3",
    name: "Charlie Brown",
    role: "Designer",
    hours: 155,
    efficiency: 92,
  },
  {
    id: "4",
    name: "Diana Prince",
    role: "Project Mrg",
    hours: 120,
    efficiency: 99,
  },
];

export const recentActivities: Activity[] = [
  {
    id: "1",
    user: "Alice Johnson",
    action: "submitted timesheet",
    project: "Website Redesign",
    time: "10m ago",
  },
  {
    id: "2",
    user: "Bob Smith",
    action: "commented on",
    project: "Mobile App",
    time: "25m ago",
  },
  {
    id: "3",
    user: "Charlie Brown",
    action: "clocked out",
    project: "Marketing",
    time: "1h ago",
  },
  {
    id: "4",
    user: "Diana Prince",
    action: "approved timesheet",
    project: "Cloud Migration",
    time: "2h ago",
  },
];

export const dashboardStats = {
  totalEmployees: 42,
  activeProjects: 12,
  totalHours: "1,240",
  billableRate: "85%",
  revenue: "$124k",
};
