"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Lock, Mail, Shield, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<"EMPLOYEE" | "ADMIN">("EMPLOYEE");
  const [email, setEmail] = useState("employee@example.com");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    // No real auth yet – just route based on selected role
    if (role === "ADMIN") router.push("/admin/dashboard");
    else router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      {/* Background Ambience */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[60%] h-[60%] rounded-full bg-indigo-500/10 blur-[150px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full bg-purple-500/10 blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10 p-4"
      >
        <div className="glass-card rounded-2xl p-8 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5" />

          <div className="relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/70">
                Welcome Back
              </h1>
              <p className="text-muted-foreground mt-2 text-sm">
                Enter your credentials to access the workspace
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">
                  Role
                </label>
                <div className="grid grid-cols-2 gap-2 p-1 bg-secondary/50 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setRole("EMPLOYEE")}
                    className={cn(
                      "flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      role === "EMPLOYEE"
                        ? "bg-background shadow-md text-foreground"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                  >
                    <User className="w-4 h-4" /> Employee
                  </button>
                  <button
                    type="button"
                    onClick={() => setRole("ADMIN")}
                    className={cn(
                      "flex items-center justify-center gap-2 py-2.5 rounded-lg text-sm font-medium transition-all duration-200",
                      role === "ADMIN"
                        ? "bg-background shadow-md text-foreground"
                        : "text-muted-foreground hover:bg-background/50 hover:text-foreground"
                    )}
                  >
                    <Shield className="w-4 h-4" /> Admin
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-transparent focus:border-indigo-500/50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-muted-foreground/50"
                      placeholder="name@company.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider ml-1">
                    Password
                  </label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-2.5 h-5 w-5 text-muted-foreground" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-transparent focus:border-indigo-500/50 rounded-xl text-sm outline-none focus:ring-2 focus:ring-indigo-500/20 transition-all placeholder:text-muted-foreground/50"
                      placeholder="••••••••"
                    />
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20 rounded-xl text-base font-medium transition-all duration-300 transform hover:scale-[1.02]"
              >
                Sign In
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-xs text-muted-foreground">
                Demo Mode: Toggle roles above to simulate different user flows.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
