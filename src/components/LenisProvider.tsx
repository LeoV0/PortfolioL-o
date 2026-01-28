import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

interface LenisProviderProps {
  children: React.ReactNode
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenis = useLenis()

  useEffect(() => {
    return () => lenis?.destroy()
  }, [lenis])

  useEffect(() => {
    if (!lenis) return
  
    const onVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        lenis.stop()
      } else {
        lenis.start()
        lenis.resize()
        lenis.scrollTo(lenis.scroll, { immediate: true })
      }
    }
  
    window.addEventListener("focus", onVisibilityChange)
    document.addEventListener("visibilitychange", onVisibilityChange)
  
    return () => {
      window.removeEventListener("focus", onVisibilityChange)
      document.removeEventListener("visibilitychange", onVisibilityChange)
    }
  }, [lenis])

  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
        duration: 1.2,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        touchMultiplier: 1,
      }}
    >
      {children}
    </ReactLenis>
  )
}

export default LenisProvider