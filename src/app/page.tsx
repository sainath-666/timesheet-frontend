"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Clock, BarChart3, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/10 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px]" />
        <div className="absolute top-[40%] left-[50%] translate-x-[-50%] w-[30%] h-[30%] rounded-full bg-purple-500/10 blur-[100px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <header className="container mx-auto px-4 py-6 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl tracking-tight">
            <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white">
              <Clock className="w-5 h-5" />
            </div>
            TimeSync
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <Link
              href="#features"
              className="hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" size="sm">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button
                size="sm"
                className="bg-indigo-600 hover:bg-indigo-700 text-white shadow-indigo-500/25 shadow-lg"
              >
                Get Started
              </Button>
            </Link>
          </div>
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-4 pt-20 pb-32 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-400 text-xs font-medium border border-indigo-500/20 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            New Version 2.0 Released
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
          >
            Master Your Time, <br />
            <span className="text-indigo-400">Maximize Potential</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed"
          >
            The intuitive timesheet solution for modern teams. Track hours,
            approve requests, and generate insights with zero friction.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base bg-white text-black hover:bg-white/90"
            >
              Start Free Trial <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base border-white/10 hover:bg-white/5"
            >
              View Demo
            </Button>
          </motion.div>

          {/* Abstract UI representation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="w-full max-w-5xl mt-20 relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl blur opacity-20"></div>
            <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-xl overflow-hidden shadow-2xl">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                </div>
                <div className="ml-4 h-6 px-3 rounded-md bg-white/5 text-xs flex items-center text-muted-foreground border border-white/5 w-64">
                  timesync.app/dashboard
                </div>
              </div>
              <div className="p-8 grid md:grid-cols-3 gap-6">
                {/* Sidebar Mockup */}
                <div className="hidden md:flex flex-col gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/10 text-white font-medium">
                    <Clock className="w-4 h-4" /> Dashboard
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <Users className="w-4 h-4" /> Employees
                  </div>
                  <div className="flex items-center gap-3 px-3 py-2">
                    <BarChart3 className="w-4 h-4" /> Reports
                  </div>
                </div>

                {/* Main Content Mockup */}
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-muted-foreground text-xs mb-1">
                        Total Hours
                      </div>
                      <div className="text-2xl font-bold">142.5 h</div>
                      <div className="text-green-400 text-xs mt-2 flex items-center gap-1">
                        <span className="inline-block w-0 h-0 border-l-[3px] border-l-transparent border-r-[3px] border-r-transparent border-b-[4px] border-b-green-400"></span>
                        +12% vs last week
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                      <div className="text-muted-foreground text-xs mb-1">
                        Pending Approvals
                      </div>
                      <div className="text-2xl font-bold">8</div>
                      <div className="text-indigo-400 text-xs mt-2">
                        Needs attention
                      </div>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-sm font-medium">
                        Recent Activity
                      </span>
                      <span className="text-xs text-muted-foreground">
                        View all
                      </span>
                    </div>
                    <div className="space-y-3">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-sm"
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500"></div>
                            <div>
                              <div className="font-medium">Sarah Miller</div>
                              <div className="text-xs text-muted-foreground">
                                Submitted timesheet
                              </div>
                            </div>
                          </div>
                          <span className="text-muted-foreground text-xs">
                            2h ago
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="py-24 bg-white/5 border-t border-white/5"
        >
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Everything you need</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Powerful features tailored for modern teams.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Smart Tracking",
                  desc: "Automated time tracking with smart start/stop detection and geofencing capabilities.",
                },
                {
                  icon: Users,
                  title: "Team Management",
                  desc: "Manage roles, permissions, and departments with granular control over access levels.",
                },
                {
                  icon: BarChart3,
                  title: "Deep Analytics",
                  desc: "Gain actionable insights into productivity trends and resource allocation.",
                },
              ].map((feature, i) => (
                <Card
                  key={i}
                  className="glass-card bg-white/5 border-white/10 hover:border-indigo-500/50 transition-colors"
                >
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                      <feature.icon className="w-6 h-6" />
                    </div>
                    <CardTitle>{feature.title}</CardTitle>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
