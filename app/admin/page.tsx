"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ShieldCheck, Lock, AlertCircle } from "lucide-react";

export default function AdminLogin() {
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    // Use a standard development passcode
    if (passcode === "admin2026") {
      // Set a simple cookie (session duration)
      document.cookie = "admin_session=true; path=/; max-age=86400; SameSite=Strict";
      router.push("/admin/dashboard");
    } else {
      setError("Invalid passcode. Please enter the correct corporate access key.");
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center p-4 relative select-none">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl" />

      <div className="w-full max-w-sm bg-zinc-900/20 border border-zinc-900 rounded-3xl p-8 space-y-6 relative z-10 backdrop-blur-md shadow-2xl">
        
        {/* Brand/Shield Header */}
        <div className="text-center space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mx-auto text-emerald-400">
            <ShieldCheck className="w-6 h-6 animate-pulse" />
          </div>
          <h1 className="text-xl font-bold text-white">UB Control Room</h1>
          <p className="text-zinc-500 text-[10px] uppercase tracking-wider font-mono">B2B Lead Intake System</p>
        </div>

        {error && (
          <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 flex-shrink-0" />
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="space-y-4">
          <div className="space-y-2">
            <label className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">Corporate Passcode</label>
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center text-zinc-600 pointer-events-none">
                <Lock className="w-4 h-4" />
              </span>
              <input
                type="password"
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter Access Key (admin2026)"
                className="w-full bg-zinc-950/80 border border-zinc-850 rounded-xl pl-10 pr-4 py-3 text-xs text-white focus:outline-none focus:border-emerald-400 focus:ring-1 focus:ring-emerald-400 transition-all font-mono"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold bg-emerald-400 text-black hover:bg-emerald-300 transition-all duration-200 shadow-md hover:shadow-emerald-400/20 active:scale-98"
          >
            Authenticate Access
          </button>
        </form>

        <div className="text-center pt-2">
          <Link href="/" className="text-[10px] text-zinc-500 hover:text-white transition-colors">
            Return to Public Website
          </Link>
        </div>

      </div>
    </div>
  );
}
