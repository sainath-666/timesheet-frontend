"use client";

import { recentActivities } from "@/data/dashboard-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function RecentActivity() {
  return (
    <Card className="col-span-3 border-slate-800 bg-slate-900/50 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-lg font-medium text-slate-100">
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {recentActivities.map((activity, index) => (
            <div key={index} className="flex items-center">
              <Avatar className="h-9 w-9 ring-2 ring-slate-800">
                <AvatarImage src={`/avatars/${index + 1}.png`} alt="Avatar" />
                <AvatarFallback className="bg-primary/10 text-primary font-bold">
                  {activity.user.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="ml-4 space-y-1">
                <p className="text-sm font-medium text-slate-200 leading-none">
                  {activity.user}
                </p>
                <p className="text-xs text-slate-500">
                  {activity.action}{" "}
                  <span className="text-primary">{activity.project}</span>
                </p>
              </div>
              <div className="ml-auto font-medium text-xs text-slate-500">
                {activity.time}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
