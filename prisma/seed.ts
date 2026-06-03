import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Clear existing data
  await prisma.activity.deleteMany({});
  await prisma.project.deleteMany({});
  await prisma.lead.deleteMany({});

  // Seed Activities
  const activities = [
    {
      id: "zipline",
      title: "Zipline & Sky Cycling",
      category: "outdoor",
      description: "High-throughput dual ziplines and sky cycling setups meeting international structural standards.",
      imageUrl: "/images/zipline.jpg",
      priceUnit: "Per linear meter",
      safetyRating: "EN 15567-1 compliant",
    },
    {
      id: "climbing",
      title: "Climbing Walls",
      category: "outdoor",
      description: "Custom indoor and outdoor climbing walls with multi-route designs and advanced auto-belay safety systems.",
      imageUrl: "/images/climbing.jpg",
      priceUnit: "Per sq ft",
      safetyRating: "UIAA Certified safety holds",
    },
    {
      id: "trampoline",
      title: "Trampoline Parks",
      category: "indoor",
      description: "Modular indoor trampoline grids featuring foam pits, dodgeball zones, and custom safety netting.",
      imageUrl: "/images/trampoline.jpg",
      priceUnit: "Per project configuration",
      safetyRating: "ASTM F2970 compliant",
    },
    {
      id: "tents",
      title: "Luxury Glamping Tents",
      category: "tents",
      description: "Premium all-weather safari and geodesic domes designed for luxury eco-resorts and campsites.",
      imageUrl: "/images/tents.jpg",
      priceUnit: "Per tent unit",
      safetyRating: "ISO 9001 Fire retardant canvas",
    },
    {
      id: "sky-dining",
      title: "Sky Dining Setups",
      category: "consultancy",
      description: "Exclusive suspended platform dining experiences engineered with multi-redundant crane hoisting safety.",
      imageUrl: "/images/sky-dining.jpg",
      priceUnit: "Custom design quote",
      safetyRating: "Dual hoist backup systems",
    },
    {
      id: "rope-course",
      title: "High Rope Courses",
      category: "outdoor",
      description: "Multi-level aerial obstacle challenges with cargo nets, suspension bridges, and balancing beams.",
      imageUrl: "/images/rope-course.jpg",
      priceUnit: "Per obstacle unit",
      safetyRating: "CE certified cables & rigging",
    },
  ];

  for (const activity of activities) {
    await prisma.activity.create({
      data: activity,
    });
  }

  // Seed Projects
  const projects = [
    {
      title: "Noida Adventure Hub",
      location: "Sector 1, Noida, UP",
      description: "A comprehensive turnkey theme park featuring high rope courses, dual zip-lines, and climbing structures.",
      category: "outdoor",
      status: "Completed",
      imageUrl: "/images/project-noida.jpg",
    },
    {
      title: "Rishikesh Eco-Resort Dome Park",
      location: "Rishikesh, Uttarakhand",
      description: "Installation of 12 premium insulated luxury geodesic tents overlooking the Ganges River valley.",
      category: "tents",
      status: "Completed",
      imageUrl: "/images/project-rishikesh.jpg",
    },
    {
      title: "Jaipur Adventure Club Setup",
      location: "Jaipur, Rajasthan",
      description: "A B2B consultancy project incorporating indoor dynamic sky cycling and multi-wall climbing.",
      category: "consultancy",
      status: "Ongoing",
      imageUrl: "/images/project-jaipur.jpg",
    },
  ];

  for (const project of projects) {
    await prisma.project.create({
      data: project,
    });
  }

  console.log("Database seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
