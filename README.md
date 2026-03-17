<img width="1024" height="855" alt="om" src="https://github.com/user-attachments/assets/259282ba-1fa9-477c-8670-c5246dc4f96b" />

<br/><br/>

<p align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
</p>

<br/>

# 🇴🇲 OmanRoute – Intelligent Travel Planner

🌐 **Live Demo:** https://omanroute.netlify.app/en

**OmanRoute** is a **Next.js 16** travel-planner demo that helps users explore Oman and generate optimized day-by-day itineraries. It supports **multi-locale experiences (English & Arabic)** and runs entirely in the browser, using **SSR for marketing pages** and **CSR for itinerary generation**.

---

# ✨ Features

- Multi-locale support 🌍 (English & Arabic)
- Server-Side Rendered (SSR) landing & destination pages ⚡
- Client-Side Rendered (CSR) Intelligent Itinerary Planner 📅
- Interactive Leaflet 🗺 maps with day-by-day route visualization
- Persistent favorites and trip storage 💾
- Budget-aware trip planning 💰
- Route optimization with **2-opt heuristic** 🚗
- Category, season, region, and crowd-level filters for destinations 🌴🏜️🏖️
- Carousel and category previews 🎠📌

---

# 🛠 Technologies Used

- **Next.js 16 (App Router)** – hybrid SSR/CSR
- **Tailwind CSS** – responsive & mobile-first
- **shadcn/ui** – UI components
- **next-intl** – localization & i18n
- **React Hooks** – state & effects
- **Zustand** – state management with persistence
- **lucide-react** – icons
- **Leaflet** – interactive maps
- **TypeScript** – strict type safety

---

# 🗂 Project Structure

```plaintext
omanroute/
├─ app/
│  ├─ [locale]/
│  │  ├─ plan-trip/
│  │  │  ├─ PlanTripContent.tsx      # User input form
│  │  │  ├─ TripPlanDisplay.tsx      # Shows generated trip
│  │  │  ├─ MapComponent.tsx         # Leaflet map component
│  │  │  └─ TripMap.tsx              # Leaflet map wrapper
│  │  │
│  │  ├─ destinations/
│  │  │  ├─ DestinationsContent.tsx  # Displays and manages all destinations
│  │  │  └─ [id]/                    # Destination details page
│  │  │
│  │  └─ layout.tsx                  # Localized layout
│  │
│  └─ layout.tsx                     # Root layout
│
├─ components/                       # Reusable UI components
│
├─ data/
│  ├─ destinations.ts                # Destination dataset
│  ├─ carousel.ts                    # Carousel images
│  ├─ category.ts                    # Category images & icons
│  ├─ statistics.ts                  # Icons for statistics
│  └─ index.ts                       # Exports all data
│
├─ lib/
│  ├─ planner/                       # Trip planning logic
│  │  ├─ index.ts
│  │  ├─ regionAllocator.ts
│  │  ├─ scheduler.ts
│  │  ├─ scorer.ts
│  │  ├─ optimizer.ts
│  │  ├─ distance.ts
│  │  └─ costEstimator.ts
│  │
│  ├─ store/                         # Zustand stores
│  │  ├─ usePlannerStore.ts
│  │  └─ useSavedDestinations.ts
│  │
│  └─ hooks/                         # Custom hooks
│     ├─ useFilters.ts
│     └─ usePagination.ts
│
├─ locales/
│  └─ messages/                      # Translation files
│     ├─ en.json                     # English translations
│     └─ ar.json                     # Arabic translations
│
├─ public/                           # Static assets
│
└─ package.json
