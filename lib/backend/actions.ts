"use server";

import { revalidatePath } from "next/cache";
import prisma from "@/lib/backend/prisma";

export type InquiryState = {
  success: boolean;
  error?: string;
};

export async function submitInquiry(_prevState: InquiryState, formData: FormData): Promise<InquiryState> {
  const firstName = (formData.get("firstName") as string) || "";
  const lastName = (formData.get("lastName") as string) || "";
  const name = (formData.get("name") as string) || `${firstName} ${lastName}`.trim();
  const email = formData.get("email") as string;
  const phone = (formData.get("phone") as string) || "Not Provided";
  const company = (formData.get("company") as string) || null;
  const message = formData.get("message") as string;
  const adventure = formData.get("adventure") as string;
  const serviceType = (formData.get("serviceType") as string) || adventure || "general";
  const groupSize = formData.get("groupSize") as string;

  // Basic validation
  if (!name || !email) {
    return { success: false, error: "Name and email are required." };
  }

  try {
    await prisma.lead.create({
      data: {
        name,
        email,
        phone,
        company,
        message: groupSize ? `[Group Size: ${groupSize}]\n\n${message}` : message,
        serviceType,
      },
    });

    return { success: true };
  } catch (error) {
    console.error("Database error saving lead:", error);
    return { success: false, error: "Something went wrong. Please try again." };
  }
}

export async function deleteInquiry(id: string) {
  try {
    await prisma.lead.delete({
      where: { id },
    });
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    console.error("Error deleting lead:", error);
    return { success: false, error: "Failed to delete lead." };
  }
}
