# OmanRoute

<p align="center">
  <img src="https://github.com/user-attachments/assets/259282ba-1fa9-477c-8670-c5246dc4f96b" width="100%" alt="OmanRoute Banner"/>
</p>

<p align="center">
  <strong>Intelligent Travel Planner for Oman</strong><br/>
  Discover destinations and generate optimized multi-day itineraries
</p>

<p align="center">
  <a href="https://omanroute.netlify.app/en"><strong>🌐 Live Demo</strong></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16-black?style=for-the-badge&logo=nextdotjs" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" />
</p>

---

## 🚀 Overview

**OmanRoute** is a bilingual (Arabic / English) smart tourism platform built with **Next.js 16**.  

It allows users to:  
- 🌍 Explore destinations across Oman  
- 📅 Generate optimized multi-day travel plans  
- 🧠 Plan trips using a deterministic, constraint-based algorithm  
- 🗺 Visualize routes interactively on maps

The app combines **Server-Side Rendering (SSR)** for SEO-friendly pages with **Client-Side Rendering (CSR)** for real-time itinerary generation.

---

## ✨ Key Features

- 🌐 Multi-language support (Arabic & English)  
- ⚡ Hybrid SSR/CSR architecture  
- 📍 Destination browsing with advanced filters  
- 🧠 Intelligent itinerary generation  
- 🗺 Interactive maps with route visualization  
- 💰 Budget-aware trip planning  
- 💾 Persistent saved destinations & plans  
- 🚗 Route optimization using 2-opt algorithm  
- 🎯 Deterministic results (same input → same output)  

---

## 🏗 Architecture

### Hybrid Rendering Strategy

| Page                 | Strategy      | Purpose                        |
|----------------------|--------------|--------------------------------|
| Home                 | SSR          | SEO + fast load                |
| Destinations         | SSR + CSR    | server render + client filters |
| Destination Details  | SSR          | static-friendly                |
| Plan Trip            | CSR          | client-side algorithm          |

---

## 🧠 Itinerary Planning Engine

All planning logic lives in:  
`lib/planner/`

The system is a **multi-stage constraint-based optimizer**:

```
User Input → Scoring Model → Region Allocation → Daily Scheduling → Route Optimization → Cost Estimation → Final Itinerary
```

---

### 🔢 Scoring Model

Each destination is evaluated using a weighted formula:

```
score(i) = 0.30 * InterestMatch
         + 0.25 * SeasonFit
         + 0.20 * CrowdPenalty
         + 0.15 * CostPenalty
         + 0.05 * DetourPenalty
         + 0.05 * DiversityBonus
```

---

### 🗺 Region Allocation

- Regions ranked by average score  
- Days distributed proportionally  
- Ensures multi-region exploration for longer trips  

---

### 📅 Daily Scheduling

| Constraint        | Value             |
|------------------|-----------------|
| Max daily hours   | 8               |
| Max distance      | 250 km          |
| Stops/day         | 3–5             |
| Rest rule         | no consecutive long stops |

---

### 🚗 Route Optimization

- Uses **2-opt heuristic**  
- Iteratively swaps route segments to reduce total travel distance  
- Stops when no improvement is found  

---

### 💰 Cost Estimation

Includes:  
- Fuel consumption  
- Accommodation tiers  
- Food budget  
- Attraction ticket costs  

---

### 📏 Distance Calculation

- Implements the **Haversine formula** (no external APIs)  

Functions:

```ts
distanceKm(a, b)
totalKm(route)
detourKm(route, candidate)
```

---

### 🗺 Map System

- Leaflet + OpenStreetMap  
- Route polylines per day  
- Interactive markers  
- Active stop highlighting  
- Day-by-day navigation  

---

### 🌐 State Management

Built with **Zustand**  

Stores:  
- `usePlannerStore` → trip inputs & generated plan  
- `useSavedDestinations` → favorites  

Persistence:  
- `localStorage`: `trip-planner`, `saved-destinations`  

---

## 📂 Project Structure

```
omanroute/
├─ app/
│  ├─ [locale]/
│  │  ├─ plan-trip/
│  │  │  ├─ PlanTripContent.tsx
│  │  │  ├─ TripPlanDisplay.tsx
│  │  │  ├─ MapComponent.tsx
│  │  │  └─ TripMap.tsx
│  │  ├─ destinations/
│  │  │  ├─ DestinationsContent.tsx
│  │  │  └─ [id]/                     # Destination details
│  │  └─ layout.tsx
│  └─ layout.tsx
├─ components/                        # Reusable UI components
├─ data/
│  ├─ destinations.ts
│  ├─ carousel.ts
│  ├─ category.ts
│  ├─ statistics.ts
│  └─ index.ts
├─ lib/
│  ├─ planner/                        # Trip planning logic
│  ├─ store/                           # Zustand stores
│  └─ hooks/                           # Custom hooks
├─ locales/
│  └─ messages/                        # Translation files
├─ public/                             # Static assets
└─ package.json
```

---

## ⚙️ Getting Started

```bash
git clone https://github.com/zahraaMeky/omanroute
cd omanroute
npm install
npm run dev
```

Open in browser: [http://localhost:3000](http://localhost:3000)

---

## ⚡ Performance

- Planner runs only on user action  
- Fully client-side computation  
- Memoized filtering & sorting  
- Dynamic imports for map (CSR only)  
- Static dataset (no runtime API calls)  

---

## ⚠️ Limitations

- Uses straight-line (Haversine) distance  
- Greedy initial selection  
- Static fuel price assumptions  
- No real-time traffic or road data  

---

## 🛠 Tech Stack

| Technology      | Purpose                  |
|-----------------|-------------------------|
| Next.js 16      | Framework               |
| TypeScript      | Type safety             |
| Tailwind CSS    | Styling                 |
| next-intl       | i18n                    |
| Zustand         | State management        |
| Leaflet         | Maps                    |
| shadcn/ui       | UI components           |
| Lucide          | Icons                   |

---

## 👩‍💻 Author

**AL Zahraa Mekky** – Full Stack Developer  

🔗 [GitHub](https://github.com/zahraaMeky)

