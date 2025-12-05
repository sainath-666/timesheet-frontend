"use client";

import { useState } from "react";
import { AppShell } from "@/components/layout/AppShell";

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const projects = ["Internal Dashboard", "Client Portal", "R&D"];

type GridState = number[][]; // [projectIndex][dayIndex] = hours

const initialGrid: GridState = projects.map(() => days.map(() => 0));

export default function NewTimesheetPage() {
  const [grid, setGrid] = useState<GridState>(initialGrid);

  const totalPerProject = grid.map((row) => row.reduce((sum, h) => sum + h, 0));
  const totalPerDay = days.map((_, dayIdx) =>
    grid.reduce((sum, row) => sum + row[dayIdx], 0)
  );
  const grandTotal = totalPerProject.reduce((a, b) => a + b, 0);

  function updateCell(projectIndex: number, dayIndex: number, value: string) {
    const hours = Number(value) || 0;
    setGrid((prev) => {
      const copy = prev.map((row) => [...row]);
      copy[projectIndex][dayIndex] = hours;
      return copy;
    });
  }

  return (
    <AppShell role="EMPLOYEE">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h1 className="text-xl font-semibold">New Timesheet</h1>
          <p className="text-xs text-slate-400">
            Demo-only form – no real save yet.
          </p>
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

      <div className="rounded-2xl border border-slate-800 bg-slate-900/80 p-4">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-xs text-slate-400 border-b border-slate-800">
                <th className="text-left py-2">Project</th>
                {days.map((d) => (
                  <th key={d} className="text-center py-2">
                    {d}
                  </th>
                ))}
                <th className="text-center py-2">Total</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, pIdx) => (
                <tr
                  key={project}
                  className="border-b border-slate-900 hover:bg-slate-800/60 transition"
                >
                  <td className="py-2 pr-4">{project}</td>
                  {days.map((d, dIdx) => (
                    <td key={d} className="py-2 text-center">
                      <input
                        type="number"
                        min={0}
                        max={24}
                        value={grid[pIdx][dIdx] || ""}
                        onChange={(e) => updateCell(pIdx, dIdx, e.target.value)}
                        className="w-16 text-center text-xs rounded-md bg-slate-950 border border-slate-700 px-1 py-1 focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                    </td>
                  ))}
                  <td className="py-2 text-center text-slate-200">
                    {totalPerProject[pIdx]}h
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr className="border-t border-slate-800">
                <td className="py-2 text-right text-xs text-slate-400 pr-4">
                  Total per day
                </td>
                {days.map((d, idx) => (
                  <td
                    key={d}
                    className="py-2 text-center text-xs text-slate-300"
                  >
                    {totalPerDay[idx]}h
                  </td>
                ))}
                <td className="py-2 text-center font-semibold text-primary">
                  {grandTotal}h
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </AppShell>
  );
}
