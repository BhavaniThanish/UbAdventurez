import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import prisma from "@/lib/backend/prisma";
import DashboardClient from "./DashboardClient";

export const metadata = {
  title: "Admin Leads Dashboard | UB Control Room",
};

export default async function AdminDashboardPage() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  // Server-side route guard
  if (!session || session.value !== "true") {
    redirect("/admin");
  }

  const leads = await prisma.lead.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return <DashboardClient initialLeads={leads} />;
}
