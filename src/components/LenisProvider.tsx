import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect } from 'react'

interface LenisProviderProps {
  children: React.ReactNode
}

const LenisProvider: React.FC<LenisProviderProps> = ({ children }) => {
  const lenis = useLenis()

  useEffect(() => {
    const raf = (time: number) => {
      lenis?.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis?.destroy()
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