"use client"
import { useEffect, useRef } from "react"
import { useLocale, useTranslations } from "next-intl"
import { DayPlan } from "@/lib/planner/types"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

interface Props {
  day: DayPlan
  color: string
}

export default function MapComponent({ day, color }: Props) {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const locale = useLocale()
  const isAr = locale === "ar"
  const t = useTranslations("TripPlan")

  useEffect(() => {
    if (!mapRef.current) return

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    if (day.stops.length === 0) return

    const map = L.map(mapRef.current)
    mapInstanceRef.current = map

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "© OpenStreetMap contributors",
    }).addTo(map)

    const coords = day.stops.map(stop => ({
      lat: stop.destination.lat,
      lng: stop.destination.lng,
    }))

    day.stops.forEach((stop, i) => {
      const name = isAr ? stop.destination.name.ar : stop.destination.name.en
      const ticketText = stop.destination.ticket_cost_omr === 0
        ? t("free")
        : `${stop.destination.ticket_cost_omr} ${t("omr")}`

      const markerIcon = L.divIcon({
        className: "",
        html: `
          <div style="
            background:${color};
            color:#1C1C1E;
            width:28px;
            height:28px;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            font-weight:bold;
            font-size:12px;
            border:2px solid white;
            box-shadow:0 2px 6px rgba(0,0,0,0.3);
          ">${i + 1}</div>
        `,
        iconSize: [28, 28],
        iconAnchor: [14, 14],
      })

      L.marker([stop.destination.lat, stop.destination.lng], { icon: markerIcon })
        .addTo(map)
        .bindPopup(`
          <div style="font-family:sans-serif;min-width:140px;">
            <p style="font-weight:700;font-size:13px;color:#1C1C1E;margin:0 0 4px 0;">${name}</p>
            <p style="font-size:11px;color:#475569;margin:0 0 2px 0;">${stop.arrivalTime} — ${stop.departureTime}</p>
            <p style="font-size:11px;color:#2A9D8F;margin:0;">${ticketText}</p>
          </div>
        `)
    })

    if (coords.length > 1) {
      L.polyline(
        coords.map(c => [c.lat, c.lng]),
        { color, weight: 3, opacity: 0.8, dashArray: "6 4" }
      ).addTo(map)
    }

    const bounds = L.latLngBounds(coords.map(c => [c.lat, c.lng]))
    map.fitBounds(bounds, { padding: [40, 40] })

    return () => {
      map.remove()
      mapInstanceRef.current = null
    }
  }, [day, color, isAr])

  return <div ref={mapRef} className="w-full h-full" />
}