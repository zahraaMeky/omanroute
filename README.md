<img width="1024" height="981" alt="20260317_0405_Image Generation_remix_01kkwrj1hyehwsdwxnv6xy3tac (1)" src="https://github.com/user-attachments/assets/d8644539-bee1-468b-985c-98d6ebd830a8" />

<br/>
<p align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
</p>

# 🇴🇲 OmanRoute – Intelligent Travel Planner

🌐 **Live Demo:** [https://omanroute.netlify.app/en](https://omanroute.netlify.app/en)

**OmanRoute** is a **Next.js 16** travel-planner demo that helps users explore Oman and generate optimized day-by-day itineraries. It supports **multi-locale experiences** (English & Arabic) and runs entirely in the browser, using **SSR** for marketing pages and **CSR** for itinerary generation.

---

## ✨ Features

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

## 🛠 Technologies Used

- **Next.js 16 (App Router)** – hybrid SSR/CSR  
- **Tailwind CSS** – responsive & mobile-first  
- **shadcn/ui** – UI components  
- **next-intl** – localization & i18n  
- **React Hooks** – state & effects  
- **Zustand** – state management with persistence  
- **lucide-react** – icons  
- **Leaflet 🗺** – interactive maps  
- **TypeScript** – strict type safety  

---

## 🗂 Project Structure

```plaintext
omanroute/
├─ app/
│  ├─ [locale]/                     
│  │  ├─ plan-trip/                  
│  │  │  ├─ PlanTripContent.tsx      # User input form
│  │  │  ├─ TripPlanDisplay.tsx      # Shows generated trip
│  │  │  ├─ MapComponent.tsx         # Leaflet map component
│  │  │  └─ TripMap.tsx              # Leaflet map wrapper
│  │  ├─ destinations/               
│  │  │  └─ [id]/                    # Destination details page
│  │  └─ layout.tsx                  # Localized layout
│  └─ layout.tsx                     # Root layout
├─ components/                        # Reusable UI components
├─ data/
│  ├─ destinations.ts                 # Destination dataset
│  ├─ carousel.ts                     # Carousel images
│  ├─ category.ts                     # Category images & icons
│  ├─ statistics.ts                   # Icons for statistics
│  │  └─ index.ts                      # Exports all data
├─ lib/
│  ├─ planner/                        # Trip planning logic
│  │  ├─ index.ts
│  │  ├─ regionAllocator.ts
│  │  ├─ scheduler.ts
│  │  ├─ scorer.ts
│  │  ├─ optimizer.ts
│  │  ├─ distance.ts
│  │  └─ costEstimator.ts
│  ├─ store/                           # Zustand stores
│  │  ├─ usePlannerStore.ts
│  │  └─ useSavedDestinations.ts
│  └─ hooks/                           # Custom hooks
│     ├─ useFilters.ts
│     └─ usePagination.ts
├─ locales/                             
│  └─ messages/
│     ├─ en.json
│     └─ ar.json
├─ public/                              # Static assets
└─ package.json
```

---

## ⚙️ Project Setup & Run Instructions

**Clone the repository:**

```bash
git clone <repo-url>
cd omanroute
```

**Install dependencies:**

```bash
npm install
# or pnpm install
# or yarn install
```

**Start the development server:**

```bash
npm run dev
```

Visit the app at: `http://localhost:3000`

**Build for production:**

```bash
npm run build
npm run start
```

**Linting:**

```bash
npm run lint
```

---

## 🌐 Rendering Strategy (SSR vs CSR)

- **Marketing pages & destination browsing:** Server-Side Rendered (SSR) for SEO and fast first load.  
- **Trip Planner (PlanTripContent & TripPlanDisplay):** Client-Side Rendered (CSR) for interactive itinerary generation and map display.  
- **State persistence:** via Zustand + localStorage, ensuring data is retained across refresh and navigation.  

---

## 🧠 Itinerary Generation Algorithm

### 1️⃣ Hierarchical Planning

```plaintext
User Inputs → Region Allocation → Daily Stop Selection → Route Optimization → Cost Estimation → Trip Plan Output
```

**Steps:**

1. **Region Allocation**  
   - Score each region  
   - Max days per region  
   - Minimum 2 regions if days ≥ 3  

2. **Daily Stop Selection**  
   - Score destinations  
   - Max stops per intensity  
   - Max daily hours & km  
   - Avoid consecutive long stops (>90 min)  

3. **Route Optimization**  
   - 2-opt heuristic to minimize daily travel distance  

4. **Cost Estimation**  
   - Fuel, hotel, food, tickets  
   - Budget threshold check  

5. **Trip Plan Output**  
   - Region allocation  
   - Day-by-day itinerary  
   - Map visualization  
   - Cost breakdown  

---

### 2️⃣ Multi-Objective Scoring Model

**Destination Score:**

```plaintext
score(i) =
  w_interest  * Jaccard(categories_user, categories_i)
+ w_season    * SeasonFit(month, recommended_months_i)
- w_crowd     * Normalize(crowd_level_i)
- w_cost      * Normalize(ticket_cost_omr_i)
- w_detour    * DetourPenalty(i, current_route)
+ w_diversity * DiversityGain(i, selected_set)
```

- **Normalization:** all factors mapped to [0,1]  
- **Deterministic:** identical inputs → identical scores  

**Weights:**

| Factor     | Weight | Type      |
|------------|--------|----------|
| Interest   | 0.30   | Rewarded |
| Season     | 0.25   | Rewarded |
| Crowd      | 0.20   | Penalized|
| Cost       | 0.15   | Penalized|
| Detour     | 0.05   | Penalized|
| Diversity  | 0.05   | Rewarded |

- **Interest:** Jaccard similarity between user categories & destination  
- **Season:** 1 if month is recommended, else 0  
- **Crowd:** normalized 1–5, less crowded preferred  
- **Cost:** normalized 0–max ticket cost  
- **Detour:** normalized distance from previous stop  
- **Diversity:** +1 if adds new category  

---

## ⚡ Performance Considerations & Optimizations

- 2-opt route optimization reduces daily travel distance  
- Region allocation & scoring are precomputed arrays  
- Client-side computation triggered only on user action (Generate button)  
- Suitable for ≤~100 destinations; scalable with pagination  

---

## ⚠️ Known Limitations & Tradeoffs

- Greedy selection for initial stop choice; 2-opt only optimizes routes  
- Travel times assume fixed 60 km/h speed; terrain variations not modeled  
- Season fit is binary (no near-season weighting)  
- Stops selected sequentially within region blocks, not across regions

