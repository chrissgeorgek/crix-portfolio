import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'

const technologies = ['React', 'JavaScript', 'Python', 'Django']

export default function Hero() {
  const heroRef = useRef(null)
  const glowRef = useRef(null)
  const gridRef = useRef(null)
  const introRef = useRef(null)
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const actionsRef = useRef(null)
  const socialRef = useRef(null)
  const cardRef = useRef(null)
  const codeLinesRef = useRef([])
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (prefersReducedMotion) {
        gsap.set(
          [
            introRef.current,
            headingRef.current,
            descriptionRef.current,
            actionsRef.current,
            socialRef.current,
            cardRef.current,
            scrollRef.current,
          ],
          { autoAlpha: 1, y: 0, x: 0, rotateY: 0, scale: 1 },
        )

        gsap.set(codeLinesRef.current, { autoAlpha: 1, x: 0 })

        return
      }

      const timeline = gsap.timeline({
        defaults: {
          ease: 'power3.out',
        },
      })

      // Background ambience
      gsap.fromTo(
        glowRef.current,
        { opacity: 0.15, scale: 0.8 },
        {
          opacity: 0.8,
          scale: 1.15,
          duration: 2.4,
          ease: 'sine.inOut',
        },
      )

      gsap.fromTo(
        gridRef.current,
        { opacity: 0 },
        {
          opacity: 0.08,
          duration: 1.8,
          ease: 'power2.out',
        },
      )

      // Introduction badge and greeting
      timeline.fromTo(
        introRef.current,
        { autoAlpha: 0, y: 24, filter: 'blur(8px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
        },
      )

      // Heading lines
      const headingLines = headingRef.current?.querySelectorAll(
        '[data-hero-line]',
      )

      timeline.fromTo(
        headingLines,
        {
          yPercent: 110,
          rotateX: -35,
          autoAlpha: 0,
          filter: 'blur(10px)',
        },
        {
          yPercent: 0,
          rotateX: 0,
          autoAlpha: 1,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.16,
          ease: 'power4.out',
        },
        '-=0.35',
      )

      timeline.fromTo(
        descriptionRef.current,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
        },
        '-=0.5',
      )

      timeline.fromTo(
        actionsRef.current?.children,
        { autoAlpha: 0, y: 18, scale: 0.97 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.65,
          stagger: 0.12,
        },
        '-=0.35',
      )

      timeline.fromTo(
        socialRef.current?.children,
        { autoAlpha: 0, y: 12 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.08,
        },
        '-=0.25',
      )

      // Developer card cinematic entrance
      timeline.fromTo(
        cardRef.current,
        {
          autoAlpha: 0,
          x: 40,
          rotateY: -12,
          scale: 0.94,
          filter: 'blur(8px)',
        },
        {
          autoAlpha: 1,
          x: 0,
          rotateY: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 1.1,
          ease: 'power3.out',
        },
        '-=1.25',
      )

      // Code lines reveal sequentially
      timeline.fromTo(
        codeLinesRef.current,
        { autoAlpha: 0, x: -12 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.35,
          stagger: 0.07,
        },
        '-=0.45',
      )

      timeline.fromTo(
        scrollRef.current,
        { autoAlpha: 0, y: -8 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.6,
        },
        '-=0.2',
      )

      // Ambient floating effects after the entrance
      gsap.to(cardRef.current, {
        y: -7,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      })

      gsap.to(glowRef.current, {
        scale: 1.08,
        opacity: 0.5,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })

      gsap.to(scrollRef.current, {
        y: 5,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28 sm:px-8 lg:px-12"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div
          ref={glowRef}
          className="absolute left-[60%] top-[35%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px] sm:h-[450px] sm:w-[450px]"
        />

        <div
          ref={gridRef}
          className="absolute inset-0 opacity-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
            maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#08080c] to-transparent" />
      </div>

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        {/* Introduction */}
        <div ref={introRef} className="min-w-0">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-400/[0.07] px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-60" />
              <span className="relative h-2 w-2 rounded-full bg-purple-400" />
            </span>

            <span className="text-xs font-medium text-purple-200">
              Available for opportunities
            </span>

            <Sparkles size={13} className="text-purple-300" />
          </div>

          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-gray-400 sm:text-sm">
            Hello, I'm Chriss George
          </p>

          <h1
            ref={headingRef}
            className="font-heading text-4xl font-bold leading-[1.12] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl"
            style={{ perspective: '900px' }}
          >
            <span className="block overflow-hidden pb-1">
              <span data-hero-line className="inline-block">
                Building
              </span>
            </span>

            <span className="block overflow-hidden pb-1">
              <span
                data-hero-line
                className="inline-block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent"
              >
                digital
              </span>
            </span>

            <span className="block overflow-hidden pb-1">
              <span data-hero-line className="inline-block">
                experiences<span className="text-purple-400">.</span>
              </span>
            </span>
          </h1>

          <p
            ref={descriptionRef}
            className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base"
          >
            I'm a developer passionate about creating modern web applications
            that combine thoughtful design, clean code, and meaningful user
            experiences.
          </p>

          <div ref={actionsRef} className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-colors hover:bg-purple-400"
            >
              Explore My Work
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition-colors hover:border-purple-400/40 hover:bg-white/[0.04]"
            >
              Get in Touch
            </a>
          </div>

          <div
            ref={socialRef}
            className="mt-7 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://github.com/chrissgeorgek"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub profile"
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-gray-400 transition-colors hover:border-purple-400/40 hover:text-white"
            >
              GH
            </a>

            <a
              href="https://linkedin.com/in/chrissgeorge"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn profile"
              className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-gray-400 transition-colors hover:border-purple-400/40 hover:text-white"
            >
              in
            </a>

            <span className="hidden h-px w-8 bg-white/10 sm:block" />

            <span className="text-xs leading-6 text-gray-500">
              {technologies.join(' · ')}
            </span>
          </div>
        </div>

        {/* Developer Card */}
        <div
          ref={cardRef}
          className="relative mx-auto w-full max-w-sm"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-br from-purple-500/15 via-fuchsia-500/5 to-blue-500/15 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#101016] p-5 shadow-2xl shadow-purple-950/20 sm:p-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/80" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <span className="h-2 w-2 rounded-full bg-green-400/80" />
              </div>

              <span className="font-mono text-[11px] text-gray-500">
                developer.js
              </span>
            </div>

            <div className="space-y-3 py-6 font-mono text-xs leading-6 sm:text-sm">
              <p
                ref={(element) => {
                  codeLinesRef.current[0] = element
                }}
                className="text-gray-500"
              >
                // A little about me
              </p>

              <p
                ref={(element) => {
                  codeLinesRef.current[1] = element
                }}
              >
                <span className="text-purple-400">const</span>{' '}
                <span className="text-blue-300">developer</span> = {'{'}
              </p>

              <div className="space-y-1 pl-4">
                <p
                  ref={(element) => {
                    codeLinesRef.current[2] = element
                  }}
                >
                  <span className="text-gray-400">name:</span>{' '}
                  <span className="text-green-300">'Chriss George'</span>,
                </p>

                <p
                  ref={(element) => {
                    codeLinesRef.current[3] = element
                  }}
                >
                  <span className="text-gray-400">degree:</span>{' '}
                  <span className="text-green-300">'MCA'</span>,
                </p>

                <p
                  ref={(element) => {
                    codeLinesRef.current[4] = element
                  }}
                >
                  <span className="text-gray-400">focus:</span>{' '}
                  <span className="text-green-300">'Web Development'</span>,
                </p>

                <p
                  ref={(element) => {
                    codeLinesRef.current[5] = element
                  }}
                >
                  <span className="text-gray-400">passion:</span>{' '}
                  <span className="text-green-300">'Building'</span>,
                </p>

                <p
                  ref={(element) => {
                    codeLinesRef.current[6] = element
                  }}
                >
                  <span className="text-gray-400">mindset:</span>{' '}
                  <span className="text-green-300">'Always Learning'</span>
                </p>
              </div>

              <p
                ref={(element) => {
                  codeLinesRef.current[7] = element
                }}
                className="text-gray-400"
              >
                {'}'}
              </p>

              <p
                ref={(element) => {
                  codeLinesRef.current[8] = element
                }}
              >
                <span className="text-purple-400">function</span>{' '}
                <span className="text-blue-300">createSomethingAmazing</span>
                {'() {'}
              </p>

              <p
                ref={(element) => {
                  codeLinesRef.current[9] = element
                }}
                className="pl-4 text-green-300"
              >
                return "Ideas into reality";
              </p>

              <p
                ref={(element) => {
                  codeLinesRef.current[10] = element
                }}
                className="text-gray-400"
              >
                {'}'}
              </p>

              <div
                ref={(element) => {
                  codeLinesRef.current[11] = element
                }}
                className="flex items-center gap-2 pt-1"
              >
                <span className="inline-block h-4 w-1.5 animate-pulse bg-purple-400" />
                <span className="text-[10px] text-gray-500 sm:text-xs">
                  Ready to build something new
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 border-t border-white/[0.08] pt-4">
              {['React.js', 'Python', 'Django', 'REST APIs'].map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-[10px] text-gray-400 sm:text-xs"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute -right-2 top-10 hidden rounded-xl border border-white/10 bg-[#18151f] px-3 py-2 shadow-xl xl:block">
            <span className="block text-[10px] text-gray-500">
              Specialization
            </span>
            <span className="mt-1 block text-xs font-semibold text-white">
              Full-Stack Development
            </span>
          </div>
        </div>
      </div>

      <a
        ref={scrollRef}
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-gray-500 transition-colors hover:text-purple-300 lg:block"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  )
}
