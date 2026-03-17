
<img width="1024" height="855" alt="om" src="https://github.com/user-attachments/assets/259282ba-1fa9-477c-8670-c5246dc4f96b" />

<br/><br/>

<p align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" />
</p>

<br/>

#<h3> OmanRoute – Intelligent Travel Planner</h3>

🌐 **Live Demo:** https://omanroute.netlify.app/en

**OmanRoute** is a **Next.js 16 travel‑planner demo** that helps users explore Oman and generate optimized day‑by‑day itineraries.  
It supports **multi‑locale experiences (English & Arabic)** and combines **Server‑Side Rendering (SSR)** for SEO‑friendly pages with **Client‑Side Rendering (CSR)** for interactive trip planning.

---

# ✨ Features

- 🌍 Multi‑locale support (English & Arabic)
- ⚡ Server‑Side Rendered landing & destination pages
- 📅 Client‑Side Rendered intelligent itinerary planner
- 🗺 Interactive Leaflet maps with route visualization
- 💾 Persistent favorites and trip storage
- 💰 Budget‑aware trip planning
- 🚗 Route optimization using **2‑opt heuristic**
- 🏜 Category, season, region, and crowd filters
- 🎠 Carousel and category previews

---

# 🛠 Technologies Used

- **Next.js 16 (App Router)** – Hybrid SSR/CSR
- **Tailwind CSS** – Responsive styling
- **shadcn/ui** – UI components
- **next-intl** – Localization
- **TypeScript** – Type safety
- **Zustand** – State management
- **Leaflet** – Interactive maps
- **lucide-react** – Icons

---

# 🏗 Architectural Overview

### Hybrid SSR / CSR Architecture

- Marketing and destination pages use **SSR** for SEO and fast initial load.
- The **Trip Planner** runs fully on the client (**CSR**) to support dynamic calculations and map updates.

### Planner Engine

Trip planning logic lives inside:

lib/planner/

This module handles:

- Region allocation
- Destination scoring
- Daily scheduling
- Route optimization (2‑opt heuristic)
- Cost estimation

### Data Layer

- Destination datasets are stored in **data/**
- Translations are stored in **locales/messages/**
- Data is static and loaded directly by the client for fast performance.

### UI Structure

Reusable UI components are stored in:

components/

Routing is implemented using the **Next.js App Router**:

app/[locale]/

---

# 🧠 State Management Approach

State is managed using **Zustand**.

### Stores

**usePlannerStore**

Handles:

- user trip inputs
- generated itinerary
- planner state

Actions:

setInputs  
setPlan  
reset

**useSavedDestinations**

Handles:

- saving favorite destinations
- toggling favorites

### Persistence

Both stores use **LocalStorage persistence**, allowing:

- trip plans to remain after refresh
- favorites to remain across sessions

Storage keys:

trip-planner  
saved-destinations

---

# 🗂 Project Structure

omanroute/
├─ app/
│  ├─ [locale]/
│  │  ├─ plan-trip/
│  │  │  ├─ PlanTripContent.tsx
│  │  │  ├─ TripPlanDisplay.tsx
│  │  │  ├─ MapComponent.tsx
│  │  │  └─ TripMap.tsx
│  │  │
│  │  ├─ destinations/
│  │  │  ├─ DestinationsContent.tsx
│  │  │  └─ [id]/
│  │  │
│  │  └─ layout.tsx
│  │
│  └─ layout.tsx
│
├─ components/
│
├─ data/
│  ├─ destinations.ts
│  ├─ carousel.ts
│  ├─ category.ts
│  ├─ statistics.ts
│  └─ index.ts
│
├─ lib/
│  ├─ planner/
│  │  ├─ regionAllocator.ts
│  │  ├─ scheduler.ts
│  │  ├─ scorer.ts
│  │  ├─ optimizer.ts
│  │  ├─ distance.ts
│  │  └─ costEstimator.ts
│  │
│  ├─ store/
│  │  ├─ usePlannerStore.ts
│  │  └─ useSavedDestinations.ts
│  │
│  └─ hooks/
│     ├─ useFilters.ts
│     └─ usePagination.ts
│
├─ locales/
│  └─ messages/
│     ├─ en.json
│     └─ ar.json
│
├─ public/
└─ package.json

---

# ⚙️ Setup & Run

Clone the repository:

git clone https://github.com/zahraaMeky/omanroute
cd omanroute

Install dependencies:

npm install

Start development server:

npm run dev

Open:

http://localhost:3000

Build production:

npm run build
npm start

---

# 🌐 Rendering Strategy

**SSR Pages**

- Landing page
- Destination browsing
- SEO friendly

**CSR Pages**

- Trip planner
- Map interactions
- Route optimization

---

# 🧠 Itinerary Generation Algorithm

The planner uses a **deterministic multi‑stage planning algorithm**.

Pipeline:

User Inputs  
↓  
Region Allocation  
↓  
Daily Stop Selection  
↓  
Route Optimization  
↓  
Cost Estimation  
↓  
Trip Plan Output

### Region Allocation

- Scores regions
- Distributes days across regions
- Ensures region diversity

### Destination Selection

Destinations are scored based on:

- user interests
- season fit
- crowd level
- cost
- detour distance
- diversity

### Route Optimization

A **2‑opt heuristic** is applied to minimize total travel distance between stops.

### Cost Estimation

The system estimates:

- fuel cost
- accommodation
- food
- tickets

---

# ⚡ Performance Considerations

- Planner computation runs **only when user clicks Generate**
- Route optimization reduces unnecessary travel
- Efficient for datasets up to ~100 destinations

---

# ⚠️ Known Limitations

- Initial destination selection uses a greedy strategy
- Travel speed assumes constant 60 km/h
- Season fit is binary
- Stops are selected sequentially per region
