# UBAdventurez - Project Directory & Architecture Map

This guide explains the folder structure of your project to help you understand which parts are **Frontend**, which are **Backend**, and how they interact.

---

## 🏗️ Folder Structure Overview

```text
UbAdventurez/
├── app/                  <-- [FRONTEND ROUTING] Website pages and layout
│   ├── admin/            <-- Admin login & leads dashboard pages
│   ├── about/            <-- About Us page
│   ├── contact/          <-- Contact form page
│   ├── gallery/          <-- Photo gallery page
│   ├── projects/         <-- Featured projects page
│   ├── services/         <-- Outdoor adventure services page
│   ├── testimonials/     <-- Customer reviews page
│   ├── globals.css       <-- CSS Styles & Theme variables
│   ├── layout.tsx        <-- Global HTML wrapper (header, navbar, footer)
│   └── page.tsx          <-- Homepage landing page
│
├── components/           <-- [FRONTEND UI] Reusable interface components
│   ├── ui/               <-- Primitive UI pieces (buttons, inputs, cards)
│   ├── navbar.tsx        <-- Top navigation header
│   ├── footer.tsx        <-- Page footer
│   ├── forms.tsx         <-- Newsletter and contact form layouts
│   └── project-card.tsx  <-- Layout card for featured adventures
│
├── hooks/                <-- [FRONTEND STATE] Custom React hooks (e.g. notifications)
│
├── public/               <-- [FRONTEND ASSETS] High-res images, logos, and icons
│
├── lib/                  
│   ├── backend/          <-- [BACKEND LOGIC] Server-side actions & Database connector
│   │   ├── actions.ts    <-- Server actions (submit inquiry, delete inquiry)
│   │   └── prisma.ts     <-- Database initialization client
│   └── utils.ts          <-- Shared frontend CSS utility helpers
│
└── prisma/               <-- [DATABASE CONFIG] Database schema and initial data
    ├── schema.prisma     <-- Defines database tables (Lead, Activity, Project)
    ├── dev.db            <-- Local SQLite database file (where data is saved)
    └── seed.ts           <-- Script to populate the database with mock activities
```

---

## 🎨 1. The Frontend (Client-side)
The frontend is what your users see in their web browsers.
* **`app/`**: This is Next.js's router. Each folder inside (like `/about` or `/contact`) represents a webpage route on your site.
* **`components/`**: Standard React components that make up the visual UI (e.g. buttons, dropdowns, cards, forms).
* **`public/`**: Stores static images like your project photos, leopard images, and logos.
* **`hooks/`**: Manages frontend interactive state (like triggering a toast pop-up notification when a form is sent).

---

## ⚙️ 2. The Backend & Database (Server-side)
The backend runs securely on the server and connects to your database. It is isolated from the user's browser for security.
* **`lib/backend/actions.ts`**: This contains **Server Actions** (like `submitInquiry`). When a user clicks "Send Message" on the contact form, the frontend sends the data here. The code runs on the server, validates the inputs, and writes them to the database.
* **`lib/backend/prisma.ts`**: The connector client. It lets the server actions communicate with the SQLite database.
* **`prisma/schema.prisma`**: The blueprint of your database. It describes exactly what data fields are stored (e.g. a Lead has a name, email, phone, and message).
* **`prisma/dev.db`**: Your local database file. Every lead submitted is stored here.

---

## 🔄 3. How Frontend and Backend Talk to Each Other
Next.js makes the frontend and backend work together seamlessly:
1. **User action:** A user fills out the contact form inside `app/contact/page.tsx` (Frontend).
2. **Server Action:** The form invokes `submitInquiry` from `lib/backend/actions.ts` (Backend).
3. **Database Write:** `submitInquiry` uses `prisma` to insert the new lead into `dev.db` (Database).
4. **Response:** The backend returns `{ success: true }` back to the frontend.
5. **Success UI:** The form switches to a green checkmark saying "Message Sent!" (Frontend).
