import { destinations } from "@/data"

interface Props {
  dest: (typeof destinations)[0]
}

export function DestinationsCard({ dest }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-2xl cursor-pointer mt-10 bg-(--bg-primary) shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out">

      <div className="relative h-56 overflow-hidden">
        <img
          src={dest.image_url}
          alt={dest.name.en}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

       {dest.featured && (
          <div className="absolute top-3 left-3">
            <span
              className="text-xs font-semibold px-3 py-1 rounded-full"
              style={{ background: "#FFC857", color: "#1C1C1E" }}
            >
              ★ Featured
            </span>
          </div>
        )}

        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white/80 text-xs font-medium uppercase tracking-widest">
            {dest.region.en}
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3">
        <h3
          className="text-lg font-bold leading-snug"
          style={{ color: "var(--color-heading, #1C1C1E)" }}
        >
          {dest.name.en}
        </h3>

        <div className="flex items-center justify-between text-sm"
          style={{ color: "var(--color-text, #475569)" }}>
          <span className="flex items-center gap-1">
            🕐 {dest.avg_visit_duration_minutes / 60}h visit
          </span>
          <span className="flex items-center gap-1">
            🎟 {dest.ticket_cost_omr === 0 ? "Free" : `${dest.ticket_cost_omr} OMR`}
          </span>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {dest.categories.map((cat) => (
            <span
              key={cat}
              className="text-xs px-2 py-0.5 rounded-full font-medium capitalize"
              style={{
                background: "#2A9D8F18",
                color: "#2A9D8F",
                border: "1px solid #2A9D8F40",
              }}
            >
              {cat}
            </span>
          ))}
        </div>

        <button
          className="w-full mt-1 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
          style={{ background: "#FFC857", color: "#1C1C1E" }}
        >
          Explore Destination →
        </button>
      </div>

      <div
        className="absolute left-0 top-0 w-1 h-0 group-hover:h-full transition-all duration-300 rounded-l-2xl"
        style={{ background: "#2A9D8F" }}
      />
    </div>
  )
}