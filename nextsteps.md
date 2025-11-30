# Portfolio & Blog Unification and Enhancement Roadmap

This document outlines the plan to unify the design of the portfolio and blog, implement a dynamic content management system, and create a premium user experience.

## 1. Design Unification & Modernization
**Goal:** Create a seamless, premium "Cyber-Minimalist" or "Modern SaaS" aesthetic across both applications.

### Design System
-   **Typography:** Use a modern sans-serif stack (e.g., `Geist Sans`, `Inter`, or `Satoshi`) for a clean, tech-forward look.
-   **Color Palette:**
    -   **Background:** Deep Zinc/Black (`#09090b`) or Rich Dark Blue.
    -   **Accents:** Electric Blue (`#3b82f6`), Neon Purple (`#8b5cf6`), or Emerald (`#10b981`) for gradients and highlights.
    -   **Surface:** Glassmorphism effects (blur + translucency) for cards and navbars.
-   **Components (Shared Library):**
    -   Adopt **shadcn/ui** (built on Radix UI + Tailwind) for consistent, accessible, and beautiful components (Buttons, Dialogs, Inputs, Cards).
    -   Create a shared `ui` package or manually sync components to ensure `Button` looks the same on both sites.

### "Uniqueness" Factors
-   **Micro-interactions:** Hover effects on cards, magnetic buttons, smooth page transitions.
-   **3D Elements:** Use `react-three-fiber` for a hero section object or subtle background particles.
-   **Bento Grid Layout:** Use the popular "Bento" style for the "About" or "Projects" section to show density of information in a visually appealing way.
-   **Spotlight Effects:** Mouse-following spotlight on cards (using `framer-motion`).

## 2. Dynamic Content & Admin Panel
**Goal:** Make adding projects and experiences easy without code changes.

### Architecture
-   **Database:** **PostgreSQL** (via **Supabase** or **Neon**) is recommended. It's robust, scalable, and works perfectly with Vercel.
-   **ORM:** **Prisma**. It provides the best developer experience for TypeScript.
-   **Auth:** **Clerk** or **NextAuth.js**. Since we need an admin panel, we need secure authentication. Clerk is very easy to set up.

### Admin Panel (`/admin`)
-   **Location:** Built directly into the Portfolio app (e.g., `portfolio.com/admin`).
-   **Features:**
    -   **Dashboard:** View stats (views, clicks).
    -   **Projects Manager:** CRUD (Create, Read, Update, Delete) for Projects.
        -   Fields: Title, Description, Tech Stack (tags), Live URL, Repo URL, Cover Image, Featured Flag.
    -   **Experience Manager:** CRUD for Work Experience.
    -   **Blog Manager (Optional):** If you want to move away from Hashnode/MDX later, but for now, keep Blog separate.

### API Structure
-   **Server Actions** (Next.js 14+) for all Admin mutations (add/edit/delete).
-   **Prisma Client** in Server Components for fetching data on the public site.

## 3. Implementation Plan

### Phase 1: Foundation & Database
1.  Set up **PostgreSQL** database (Supabase/Neon).
2.  Initialize **Prisma** in the Portfolio project.
3.  Define Schema: `Project`, `Experience`, `Skill`, `User` (for admin).
4.  Set up **Authentication** (Clerk) and protect `/admin` routes.

### Phase 2: Admin Interface
1.  Build the Admin Dashboard layout (Sidebar, Header).
2.  Create forms for adding/editing Projects and Experiences using `react-hook-form` + `zod` + `shadcn/ui`.
3.  Implement Server Actions to save data to DB.

### Phase 3: Public Portfolio Update
1.  **Hero Section:** Redesign with 3D/Particle effect.
2.  **Projects Section:** Fetch from DB. Implement "Bento Grid" or "3D Carousel" layout.
3.  **Experience Section:** Timeline view fetching from DB.
4.  **Width Fix:** Enforce a `max-w-7xl` or `max-w-screen-2xl` container with `mx-auto` to prevent layout stretching on large screens.

### Phase 4: Blog Theme Sync
1.  Copy the `globals.css` (Tailwind config) from Portfolio to Blog.
2.  Update Blog's `Navbar` and `Footer` to match Portfolio's exactly (code sharing or manual sync).
3.  Ensure typography and spacing match.

## 4. Analytics (Future)
-   Integrate **PostHog** or **Vercel Analytics** for privacy-friendly tracking across both sites.
-   Display these stats in your custom Admin Panel.

---

## Immediate Next Step
**Shall we start with Phase 1 (Database & Auth Setup)?**
I can help you initialize Prisma and set up the schema right now.
