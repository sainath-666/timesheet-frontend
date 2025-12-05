// src/data/mockData.ts

export type Role = "EMPLOYEE" | "ADMIN";
export type TimesheetStatus = "DRAFT" | "SUBMITTED" | "APPROVED" | "REJECTED";

export interface User {
  id: number;
  name: string;
  email: string;
  role: Role;
}

export interface Timesheet {
  id: number;
  userId: number;
  periodLabel: string;
  startDate: string;
  endDate: string;
  totalHours: number;
  status: TimesheetStatus;
  submittedAt?: string;
  approvedAt?: string;
}

export interface TimesheetEntry {
  id: number;
  timesheetId: number;
  date: string;
  project: string;
  task: string;
  hours: number;
  isBillable: boolean;
}

// ---------- USERS ----------
export const mockEmployee: User = {
  id: 1,
  name: "Sai",
  email: "employee@example.com",
  role: "EMPLOYEE",
};

export const mockAdmin: User = {
  id: 2,
  name: "Admin",
  email: "admin@example.com",
  role: "ADMIN",
};

// ---------- EMPLOYEE DASHBOARD SUMMARY ----------
export const employeeDashboardSummary = {
  weekRange: "Dec 1 – Dec 7, 2025",
  totalHoursThisWeek: 40,
  pendingTimesheets: 1,
  approvedTimesheets: 8,
};

// ---------- EMPLOYEE TIMESHEETS ----------
export const employeeTimesheets: Timesheet[] = [
  {
    id: 1,
    userId: 1,
    periodLabel: "Nov 24 – Nov 30, 2025",
    startDate: "2025-11-24",
    endDate: "2025-11-30",
    totalHours: 42,
    status: "APPROVED",
    submittedAt: "2025-11-30",
    approvedAt: "2025-12-01",
  },
  {
    id: 2,
    userId: 1,
    periodLabel: "Nov 17 – Nov 23, 2025",
    startDate: "2025-11-17",
    endDate: "2025-11-23",
    totalHours: 38,
    status: "REJECTED",
    submittedAt: "2025-11-23",
  },
  {
    id: 3,
    userId: 1,
    periodLabel: "Nov 10 – Nov 16, 2025",
    startDate: "2025-11-10",
    endDate: "2025-11-16",
    totalHours: 40,
    status: "SUBMITTED",
    submittedAt: "2025-11-16",
  },
];

// ---------- ADMIN SUMMARY ----------
export const adminDashboardSummary = {
  totalEmployees: 12,
  totalHoursThisWeek: 430,
  pendingTimesheets: 5,
};

// ---------- ADMIN VIEW OF ALL TIMESHEETS ----------
export const adminAllTimesheets: (Timesheet & { employeeName: string })[] = [
  {
    id: 1,
    userId: 1,
    employeeName: "Sai",
    periodLabel: "Nov 24 – Nov 30, 2025",
    startDate: "2025-11-24",
    endDate: "2025-11-30",
    totalHours: 42,
    status: "APPROVED",
    submittedAt: "2025-11-30",
    approvedAt: "2025-12-01",
  },
  {
    id: 2,
    userId: 1,
    employeeName: "Sai",
    periodLabel: "Nov 17 – Nov 23, 2025",
    startDate: "2025-11-17",
    endDate: "2025-11-23",
    totalHours: 38,
    status: "REJECTED",
    submittedAt: "2025-11-23",
  },
  {
    id: 3,
    userId: 3,
    employeeName: "John Doe",
    periodLabel: "Nov 24 – Nov 30, 2025",
    startDate: "2025-11-24",
    endDate: "2025-11-30",
    totalHours: 40,
    status: "SUBMITTED",
    submittedAt: "2025-11-30",
  },
  {
    id: 4,
    userId: 4,
    employeeName: "Jane Smith",
    periodLabel: "Nov 24 – Nov 30, 2025",
    startDate: "2025-11-24",
    endDate: "2025-11-30",
    totalHours: 39,
    status: "APPROVED",
    submittedAt: "2025-11-29",
    approvedAt: "2025-11-30",
  },
];

// ---------- TIMESHEET ENTRIES ----------
export const timesheetEntries: TimesheetEntry[] = [
  {
    id: 1,
    timesheetId: 1,
    date: "2025-11-24",
    project: "Internal Dashboard",
    task: "UI Implementation",
    hours: 8,
    isBillable: true,
  },
  {
    id: 2,
    timesheetId: 1,
    date: "2025-11-25",
    project: "Internal Dashboard",
    task: "API Integration",
    hours: 8,
    isBillable: true,
  },
  {
    id: 3,
    timesheetId: 1,
    date: "2025-11-26",
    project: "Client Portal",
    task: "Bug Fixing",
    hours: 8,
    isBillable: true,
  },
  {
    id: 4,
    timesheetId: 1,
    date: "2025-11-27",
    project: "Client Portal",
    task: "Code Review",
    hours: 9,
    isBillable: true,
  },
  {
    id: 5,
    timesheetId: 1,
    date: "2025-11-28",
    project: "Internal Tool",
    task: "Refactoring",
    hours: 9,
    isBillable: false,
  },
];

// helper to get entries for a given timesheet
export function getEntriesForTimesheet(timesheetId: number) {
  return timesheetEntries.filter((e) => e.timesheetId === timesheetId);
}
