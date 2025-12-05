"use client";

import { topEmployees } from "@/data/dashboard-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function TopEmployees() {
  return (
    <Card className="col-span-4 border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-slate-100">
          Top Performers
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800">
            <span>Employee</span>
            <div className="flex gap-8">
              <span>Role</span>
              <span>Efficiency</span>
              <span>Hours</span>
            </div>
          </div>
          {topEmployees.map((employee, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar className="h-9 w-9 ring-2 ring-slate-800">
                  <AvatarImage
                    src={`/avatars/${employee.id}.png`}
                    alt="Avatar"
                  />
                  <AvatarFallback className="bg-emerald-500/10 text-emerald-500 font-bold">
                    {employee.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm font-medium text-slate-200 leading-none">
                    {employee.name}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-8 text-sm">
                <span className="text-slate-400 w-24">{employee.role}</span>
                <div className="flex items-center w-16">
                  <span
                    className={`font-bold ${
                      employee.efficiency > 95
                        ? "text-emerald-500"
                        : "text-amber-500"
                    }`}
                  >
                    {employee.efficiency}%
                  </span>
                </div>
                <span className="text-slate-200 w-12 text-right">
                  {employee.hours}h
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
