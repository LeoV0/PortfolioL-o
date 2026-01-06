import { useState, useEffect } from "react"

interface LocationTagProps {
  city?: string
  country?: string
  timezone?: string
}

export function LocationTag({ city = "Nantes", country = "FRANCE", timezone = "PST" }: LocationTagProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setCurrentTime(
        now.toLocaleTimeString("fr-FR", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
          timeZone: timezone,
          timeZoneName: "short",
        })
      )
    }
  
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [timezone])

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative flex items-center gap-3 rounded-full border border-white/20 bg-black/80 px-4 py-2.5 transition-all duration-500 ease-out hover:border-white/40 hover:bg-black/90 hover:shadow-[0_0_20px_rgba(0,0,0,0.2)]"

    >
      <div className="relative flex items-center justify-center">
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
        </span>
      </div>

      <div className="flex items-center gap-2 overflow-hidden">
      <span
  className="text-sm font-medium text-white transition-all duration-500"
  style={{
    transform: isHovered ? "translateY(-100%)" : "translateY(0)",
    opacity: isHovered ? 0 : 1,
  }}
>
  {city}, {country}
</span>

<span
  className="absolute left-11 text-sm font-medium text-white transition-all duration-500"
  style={{
    transform: isHovered ? "translateY(0)" : "translateY(100%)",
    opacity: isHovered ? 1 : 0,
  }}
>
  {currentTime}
</span>
      </div>

      <svg
        className="h-3 w-3 text-muted-foreground transition-all duration-300"
        style={{
          transform: isHovered ? "translateX(2px) rotate(-45deg)" : "translateX(0) rotate(0)",
          opacity: isHovered ? 1 : 0.5,
        }}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </button>
  )
}
