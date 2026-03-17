
<img width="1024" height="855" alt="om" src="https://github.com/user-attachments/assets/259282ba-1fa9-477c-8670-c5246dc4f96b" />

<br/><br/>

<p align="center">
  <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
</p>

<br/>

# OmanRoute – Intelligent Travel Planner

🌐 **Live Demo:** https://omanroute.netlify.app/en

**OmanRoute** is a **Next.js 16** travel‑planner demo that helps users explore Oman and generate optimized day‑by‑day itineraries.  
It supports **multi‑locale experiences (English & Arabic)** and combines **Server‑Side Rendering (SSR)** for SEO‑friendly pages with **Client‑Side Rendering (CSR)** for interactive trip planning.

---

# ✨ Features

- 🌍 Multi‑locale support (English & Arabic)
- ⚡ Server‑Side Rendered (SSR) landing & destination pages
- 📅 Client‑Side Rendered (CSR) intelligent itinerary planner
- 🗺 Interactive Leaflet maps with day‑by‑day route visualization
- 💾 Persistent favorites and trip storage
- 💰 Budget‑aware trip planning
- 🚗 Route optimization using **2‑opt heuristic**
- 🌴 Filters for **category, season, region, and crowd level**
- 🎠 Carousel and category previews

---

# 🛠 Technologies Used

- **Next.js 16 (App Router)** – hybrid SSR/CSR architecture
- **Tailwind CSS** – responsive & mobile‑first styling
- **shadcn/ui** – accessible UI components
- **next-intl** – localization and internationalization
- **React Hooks** – state and lifecycle management
- **Zustand** – lightweight global state management
- **lucide-react** – icon system
- **Leaflet** – interactive maps
- **TypeScript** – static type safety

---

# 🏗 Architectural Overview

## Hybrid SSR / CSR Architecture

- **SSR (Server‑Side Rendering)** is used for:
  - Landing pages
  - Destination browsing
  - SEO optimization
  - Faster first page load

- **CSR (Client‑Side Rendering)** is used for:
  - Trip planner interactions
  - Map visualization
  - Real‑time itinerary generation

This hybrid approach ensures **both performance and interactivity**.

---

## Planner Engine

All itinerary generation logic lives in:

```
lib/planner/
```

This module handles:

- Region allocation
- Destination scoring
- Daily scheduling
- Route optimization
- Cost estimation

The planner is designed to be **deterministic**, meaning identical inputs always generate the same trip plan.

---

## Data Layer

Static datasets power the application:

```
data/
```

Contains:

- destination dataset
- category assets
- carousel images
- statistics icons

Localization files are stored in:

```
locales/messages/
```

Supporting **English and Arabic translations**.

---

# 🧠 State Management

State management is implemented using **Zustand**.

### Stores

**usePlannerStore**

Manages:

- trip inputs
- generated itinerary
- planner state

Available actions:

- `setInputs`
- `setPlan`
- `reset`

**useSavedDestinations**

Manages:

- favorite destinations
- toggle actions

---

### Persistence

State is persisted using **LocalStorage**, allowing:

- saved destinations to remain
- trip plans to persist after page refresh

Storage keys:

```
trip-planner
saved-destinations
```

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
└─ package.json
```

---

# ⚙️ Project Setup

## Clone repository

```bash
git clone https://github.com/zahraaMeky/omanroute
cd omanroute
```

## Install dependencies

```bash
npm install
```

or

```bash
pnpm install
```

---

## Start development server

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

## Build production

```bash
npm run build
npm run start
```

---

# 🧠 Itinerary Generation Algorithm

The trip planner uses a **multi‑stage deterministic planning algorithm**.

Pipeline:

```
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
```

---

## Region Allocation

- Scores regions based on user interests
- Distributes available days across regions
- Ensures diversity when trip duration allows

---

## Destination Scoring

Destinations are evaluated using a **multi‑objective scoring model** considering:

- category similarity
- seasonal suitability
- crowd level
- ticket cost
- detour distance
- experience diversity

---

## Route Optimization

A **2‑opt heuristic algorithm** minimizes total travel distance between stops by iteratively swapping route segments.

---

## Cost Estimation

Trip cost is estimated using:

- fuel costs
- accommodation estimates
- food budget
- attraction ticket prices

---

# ⚡ Performance Considerations

- Planner runs **only when user clicks Generate**
- Computation happens **client‑side**
- Efficient for datasets up to **~100 destinations**
- Route optimization reduces unnecessary travel

---

# ⚠️ Known Limitations

- Initial stop selection uses a greedy strategy
- Travel speed assumes constant **60 km/h**
- Season scoring is binary
- Stops are selected sequentially within regions

---

# 📌 Future Improvements

- Real travel time using map APIs
- Hotel and flight integration
- Dynamic weather and seasonal scoring
- Multi‑city and international trip support

---

# 👩‍💻 Author

**Zahraa Mekky**

Frontend Developer passionate about building intelligent and interactive web applications.

GitHub:
https://github.com/zahraaMeky
