import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

const letters = ['h', 'e', 'l', 'l', 'o']

export default function LoadingIntro({ onComplete }) {
  const overlayRef = useRef(null)
  const progressRef = useRef(null)
  const progressBarRef = useRef(null)
  const helloRef = useRef(null)
  const subtitleRef = useRef(null)
  const lineRef = useRef(null)
  const glowRef = useRef(null)
  const particlesRef = useRef([])
  const [progress, setProgress] = useState(1)
  const [showHello, setShowHello] = useState(false)

  useEffect(() => {
    const counter = { value: 1 }
    const timeline = gsap.timeline()

    timeline.to(counter, {
      value: 100,
      duration: 2.8,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.round(counter.value))
      },
    })

    timeline.to(progressRef.current, {
      y: -18,
      opacity: 0,
      filter: 'blur(8px)',
      duration: 0.45,
      ease: 'power2.in',
    })

    timeline.call(() => setShowHello(true))

    timeline.fromTo(
      helloRef.current?.children,
      {
        y: 65,
        opacity: 0,
        rotateX: -65,
        filter: 'blur(14px)',
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        filter: 'blur(0px)',
        duration: 1.15,
        stagger: 0.12,
        ease: 'power4.out',
      },
    )

    timeline.fromTo(
      subtitleRef.current,
      { y: 12, opacity: 0, filter: 'blur(5px)' },
      {
        y: 0,
        opacity: 1,
        filter: 'blur(0px)',
        duration: 0.9,
        ease: 'power3.out',
      },
      '-=0.45',
    )

    timeline.fromTo(
      lineRef.current,
      { scaleX: 0, opacity: 0 },
      {
        scaleX: 1,
        opacity: 1,
        duration: 1,
        ease: 'power3.inOut',
      },
      '-=0.65',
    )

    timeline.fromTo(
      glowRef.current,
      { opacity: 0, scaleX: 0.3 },
      {
        opacity: 1,
        scaleX: 1,
        duration: 1.2,
        ease: 'power2.out',
      },
      '-=0.8',
    )

    timeline.to({}, { duration: 1.1 })

    timeline.to(overlayRef.current, {
      opacity: 0,
      scale: 1.035,
      filter: 'blur(8px)',
      duration: 0.9,
      ease: 'power2.inOut',
      onComplete: () => onComplete?.(),
    })

    gsap.to(glowRef.current, {
      opacity: 0.55,
      scaleX: 0.88,
      duration: 1.6,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    })

    gsap.to(particlesRef.current, {
      y: 'random(-22, 22)',
      x: 'random(-15, 15)',
      opacity: 'random(0.2, 0.8)',
      duration: 'random(2, 4)',
      repeat: -1,
      yoyo: true,
      stagger: 0.15,
      ease: 'sine.inOut',
    })

    return () => {
      timeline.kill()
      gsap.killTweensOf([
        glowRef.current,
        ...particlesRef.current,
      ])
    }
  }, [onComplete])

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050507] text-white"
      aria-live="polite"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(109,40,217,0.08),transparent_55%)]" />

      <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.3)_1px,transparent_1px)] [background-size:70px_70px]" />

      <div className="absolute left-0 top-0 h-px w-full bg-white/[0.06]">
        <div
          ref={progressBarRef}
          className="h-full bg-purple-400 shadow-[0_0_14px_rgba(168,85,247,0.9)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      {Array.from({ length: 16 }).map((_, index) => (
        <span
          key={index}
          ref={(element) => {
            particlesRef.current[index] = element
          }}
          className="pointer-events-none absolute h-1 w-1 rounded-full bg-purple-300 shadow-[0_0_12px_rgba(168,85,247,0.9)]"
          style={{
            left: `${8 + ((index * 37) % 84)}%`,
            top: `${12 + ((index * 29) % 76)}%`,
            opacity: 0.35,
          }}
        />
      ))}

      <div className="relative z-10 flex w-full flex-col items-center px-6 text-center">
        <div
          ref={progressRef}
          className={`absolute flex flex-col items-center transition-opacity duration-300 ${
            showHello ? 'pointer-events-none' : ''
          }`}
        >
          <div className="font-heading text-6xl font-light tracking-tighter tabular-nums sm:text-8xl">
            {progress}
            <span className="ml-1 text-2xl text-purple-400 sm:text-3xl">
              %
            </span>
          </div>

          <div className="mt-6 h-px w-48 overflow-hidden bg-white/10 sm:w-64">
            <div
              className="h-full bg-purple-400 transition-[width] duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>

          <p className="mt-5 text-[9px] font-medium uppercase tracking-[0.4em] text-gray-500">
            {progress === 100 ? 'Experience ready' : 'Preparing experience'}
          </p>
        </div>

        <div className="flex min-h-44 flex-col items-center justify-center sm:min-h-56">
          <h1
            ref={helloRef}
            className="flex perspective-[800px] font-heading text-6xl font-light tracking-[-0.07em] sm:text-8xl md:text-9xl"
            aria-label="hello"
          >
            {letters.map((letter, index) => (
              <span
                key={`${letter}-${index}`}
                className="inline-block"
                style={{
                  textShadow:
                    '0 0 35px rgba(168,85,247,0.12)',
                }}
              >
                {letter}
              </span>
            ))}
            <span
              className="inline-block text-purple-400"
              style={{
                textShadow: '0 0 35px rgba(168,85,247,0.8)',
              }}
            >
              .
            </span>
          </h1>

          <div className="relative mt-7 h-px w-44 overflow-hidden sm:w-60">
            <div
              ref={lineRef}
              className="absolute inset-0 origin-center bg-gradient-to-r from-transparent via-purple-400 to-transparent"
            />
            <div
              ref={glowRef}
              className="absolute inset-0 bg-purple-400 blur-md"
            />
          </div>

          <p
            ref={subtitleRef}
            className="mt-6 text-[9px] font-medium uppercase tracking-[0.4em] text-gray-400 sm:text-[10px]"
          >
            Welcome to my world
          </p>
        </div>
      </div>

      <div className="absolute bottom-8 flex items-center gap-2 text-[9px] tracking-[0.35em] text-gray-600">
        <span>CRIX</span>
        <span className="text-purple-400">©</span>
        <span>PORTFOLIO</span>
      </div>
    </div>
  )
}

