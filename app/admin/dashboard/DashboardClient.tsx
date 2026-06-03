"use client";

import { useRouter } from "next/navigation";
import { deleteInquiry } from "@/lib/backend/actions";
import { Users, LogOut, Trash2, Mail, Phone, Calendar, Briefcase, FileText } from "lucide-react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  message: string;
  serviceType: string;
  status: string;
  createdAt: Date;
}

interface DashboardClientProps {
  initialLeads: Lead[];
}

export default function DashboardClient({ initialLeads }: DashboardClientProps) {
  const router = useRouter();

  const handleLogout = () => {
    // Expire cookie
    document.cookie = "admin_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=Strict";
    router.push("/admin");
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this lead from records?")) {
      await deleteInquiry(id);
    }
  };

  // Metrics calculations
  const totalLeads = initialLeads.length;
  const mountainLeads = initialLeads.filter((l) => l.serviceType === "hiking" || l.serviceType === "climbing").length;
  const waterLeads = initialLeads.filter((l) => l.serviceType === "rafting").length;
  const campingOtherLeads = initialLeads.filter((l) => !["hiking", "climbing", "rafting"].includes(l.serviceType)).length;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 flex flex-col">
      {/* Dashboard Top Navigation */}
      <header className="bg-zinc-900/40 border-b border-zinc-900 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-emerald-400 flex items-center justify-center font-bold text-black text-sm">
            UB
          </div>
          <div>
            <h1 className="text-sm font-bold text-white leading-none">Control Room</h1>
            <span className="text-[9px] font-mono text-emerald-400 tracking-wider">SECURE SESSION</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handleLogout}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 hover:bg-zinc-900 text-xs font-semibold text-zinc-400 hover:text-white transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            Logout
          </button>
        </div>
      </header>

      {/* Main Dashboard Space */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 space-y-10">
        
        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Total Inquiries</div>
              <div className="text-2xl font-black text-white mt-1">{totalLeads}</div>
            </div>
            <Users className="w-8 h-8 text-emerald-400 opacity-20" />
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Mountain Sports</div>
              <div className="text-2xl font-black text-white mt-1">{mountainLeads}</div>
            </div>
            <Briefcase className="w-8 h-8 text-indigo-400 opacity-20" />
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Water Sports</div>
              <div className="text-2xl font-black text-white mt-1">{waterLeads}</div>
            </div>
            <FileText className="w-8 h-8 text-amber-400 opacity-20" />
          </div>

          <div className="p-5 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex items-center justify-between">
            <div>
              <div className="text-[10px] uppercase font-bold tracking-wider text-zinc-500">Camping & Others</div>
              <div className="text-2xl font-black text-white mt-1">{campingOtherLeads}</div>
            </div>
            <Calendar className="w-8 h-8 text-rose-400 opacity-20" />
          </div>
        </div>

        {/* Lead Rows Cards */}
        <div className="space-y-6">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <span>Incoming B2B Leads</span>
            <span className="px-2 py-0.5 rounded-full bg-zinc-900 text-[10px] font-mono text-zinc-500 border border-zinc-800">
              {totalLeads} Active
            </span>
          </h2>

          {initialLeads.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-zinc-900 rounded-3xl">
              <p className="text-xs text-zinc-650 font-medium">No leads submitted yet. Live inquiries will show up here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {initialLeads.map((lead) => (
                <div
                  key={lead.id}
                  className="p-6 rounded-2xl bg-zinc-900/20 border border-zinc-900 flex flex-col md:flex-row justify-between md:items-start gap-6 hover:border-zinc-800 transition-colors"
                >
                  <div className="space-y-4 flex-1">
                    {/* Header line */}
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-sm font-bold text-white">{lead.name}</span>
                      {lead.company && (
                        <span className="text-[10px] text-zinc-400 font-medium">at {lead.company}</span>
                      )}
                      <span className={`px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase ${
                        lead.serviceType === "hiking" || lead.serviceType === "climbing"
                          ? "bg-amber-500/5 text-amber-400 border border-amber-500/10"
                          : lead.serviceType === "rafting"
                          ? "bg-indigo-500/5 text-indigo-400 border border-indigo-500/10"
                          : "bg-rose-500/5 text-rose-400 border border-rose-500/10"
                      }`}>
                        {lead.serviceType}
                      </span>
                    </div>

                    {/* Content text */}
                    <p className="text-xs text-zinc-400 leading-relaxed font-mono whitespace-pre-line bg-zinc-950/40 p-4 rounded-xl border border-zinc-950">
                      {lead.message || "(No specifications detail provided)"}
                    </p>

                    {/* Metadata line */}
                    <div className="flex flex-wrap items-center gap-6 text-[10px] text-zinc-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Mail className="w-3.5 h-3.5" />
                        <a href={`mailto:${lead.email}`} className="hover:text-white transition-colors">{lead.email}</a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Phone className="w-3.5 h-3.5" />
                        <a href={`tel:${lead.phone}`} className="hover:text-white transition-colors">{lead.phone}</a>
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {new Date(lead.createdAt).toLocaleDateString()} {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="self-end md:self-auto flex items-center gap-2">
                    <button
                      onClick={() => handleDelete(lead.id)}
                      className="p-2.5 rounded-xl border border-zinc-900 bg-zinc-950/60 hover:bg-rose-950/30 hover:border-rose-900/40 text-zinc-500 hover:text-rose-400 transition-colors"
                      title="Delete Record"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </main>
    </div>
  );
}
