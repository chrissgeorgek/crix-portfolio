import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { gsap } from 'gsap'
import {
  Code2,
  GraduationCap,
  Laptop,
  Rocket,
  ArrowUpRight,
  MoveUpRight,
} from 'lucide-react'

const highlights = [
  {
    number: '01',
    icon: Code2,
    title: 'Clean Code',
    description:
      'Building maintainable and scalable applications with a focus on clarity and quality.',
  },
  {
    number: '02',
    icon: Laptop,
    title: 'Web Development',
    description:
      'Creating responsive interfaces and thoughtful digital experiences.',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Problem Solving',
    description:
      'Turning ideas into practical solutions through technology and experimentation.',
  },
  {
    number: '04',
    icon: GraduationCap,
    title: 'Continuous Learning',
    description:
      'Exploring new technologies and continually improving my development skills.',
  },
]

export default function About() {
  const sectionRef = useRef(null)
  const portraitRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const reducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches

      if (reducedMotion) return

      gsap.fromTo(
        '.about-reveal',
        {
          autoAlpha: 0,
          y: 35,
        },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: undefined,
          paused: false,
        },
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleMouseMove = (event) => {
    if (
      !portraitRef.current ||
      !imageRef.current ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const rect = portraitRef.current.getBoundingClientRect()

    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    gsap.to(portraitRef.current, {
      rotateY: (x - 0.5) * 10,
      rotateX: (0.5 - y) * 8,
      scale: 1.025,
      duration: 0.45,
      ease: 'power3.out',
      overwrite: 'auto',
    })

    gsap.to(imageRef.current, {
      scale: 1.1,
      x: (x - 0.5) * -12,
      y: (y - 0.5) * -12,
      duration: 0.55,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }

  const handleMouseLeave = () => {
    if (!portraitRef.current || !imageRef.current) return

    gsap.to(portraitRef.current, {
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.7,
      ease: 'power3.out',
      overwrite: 'auto',
    })

    gsap.to(imageRef.current, {
      scale: 1,
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden bg-black px-5 py-24 text-white sm:px-8 sm:py-28 lg:px-12 lg:py-36"
    >
      <div className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-purple-700/10 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-20 h-80 w-80 rounded-full bg-fuchsia-700/[0.08] blur-[120px]" />
      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="about-reveal mb-12 flex flex-wrap items-end justify-between gap-6 border-b border-white/15 pb-6 sm:mb-16"
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-white/45 sm:text-xs">
              Get to know me
            </p>

            <h2 className="font-heading text-5xl font-bold uppercase leading-none tracking-[-0.07em] sm:text-6xl md:text-8xl">
              About
              <span className="ml-3 bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">Me.</span>
            </h2>
          </div>

          <p className="max-w-xs text-xs leading-6 text-white/45 sm:text-sm">
            A little about the person behind the projects, the
            code, and the ideas.
          </p>
        </motion.div>

        {/* Portrait and introduction */}
        <div className="grid min-w-0 grid-cols-1 items-start gap-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">          {/* Portrait */}
          <div
            ref={portraitRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="about-reveal group relative mx-auto w-full max-w-md cursor-pointer"
            style={{
              transformStyle: 'preserve-3d',
              transformPerspective: 1100,
              willChange: 'transform',
            }}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-neutral-950">
              <img
                ref={imageRef}
                src="/profile2.jpeg"
                alt="Chriss George — Software Engineer"
                loading="lazy"
                draggable="false"
                className="h-full w-full object-cover object-top grayscale transition-[filter] duration-700 group-hover:grayscale-0"
                style={{
                  transformOrigin: 'center center',
                  willChange: 'transform',
                }}
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/5" />

              <div className="pointer-events-none absolute inset-0 border border-white/15 transition-colors duration-500 group-hover:border-purple-400/60" />

              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/55">
                  Software Engineer
                </p>

                <h3 className="mt-2 text-2xl font-bold uppercase tracking-tight sm:text-3xl">
                  Chriss George
                </h3>
              </div>

              <span className="absolute left-4 top-4 h-5 w-5 border-l border-t border-white/70" />
              <span className="absolute right-4 top-4 h-5 w-5 border-r border-t border-white/70" />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-[0.22em] text-white/40">
                The developer behind the work
              </span>

              <MoveUpRight
                size={16}
                className="text-purple-300/70 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </div>
          </div>

          {/* Introduction */}
          <div className="min-w-0">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="about-reveal"
            >
              <p className="mb-5 text-[10px] uppercase tracking-[0.3em] text-white/40 sm:text-xs">
                01 / Introduction
              </p>

              <h3 className="max-w-3xl text-3xl font-semibold uppercase leading-[1.1] tracking-[-0.055em] sm:text-4xl md:text-5xl">
                I build digital experiences where{' '}
                <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300 bg-clip-text text-transparent">
                  design meets code.
                </span>
              </h3>

              <div className="mt-7 max-w-2xl space-y-4 text-sm leading-7 text-white/55 sm:text-base sm:leading-8">
                <p>
                  I'm Chriss George, an MCA graduate passionate
                  about building modern web applications and
                  solving real-world problems through technology.
                </p>

                <p>
                  My work includes developing responsive
                  interfaces, building REST APIs, working with
                  databases, and implementing application
                  features using modern web technologies.
                </p>

                <p>
                  I enjoy learning new tools, writing clean code,
                  and turning ideas into useful digital products.
                </p>
              </div>

              <a
                href="#projects"
                className="group mt-7 inline-flex items-center gap-3 border-b border-white/25 pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:border-purple-400"
              >
                Explore my projects

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>

            {/* Highlights */}
            <div className="mt-14 border-t border-white/15 sm:mt-16">
              <div className="about-reveal flex items-center justify-between py-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/45 sm:text-xs">
                  What drives me
                </p>

                <p className="text-[10px] uppercase tracking-[0.2em] text-white/30 sm:text-xs">
                  04 principles
                </p>
              </div>

              <div className="grid border-t border-white/15 sm:grid-cols-2">
                {highlights.map((item, index) => {
                  const Icon = item.icon

                  return (
                    <motion.article
                      key={item.title}
                      initial={{ opacity: 0, y: 18 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.5,
                        delay: index * 0.08,
                      }}
                      whileHover={{ backgroundColor: '#171020' }}
                      className={`about-reveal group border-b border-white/15 p-5 transition-colors duration-300 sm:p-6 ${
                        index % 2 === 0
                          ? 'sm:border-r sm:border-white/15'
                          : ''
                      }`}
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.2em] text-white/35">
                          {item.number}
                        </span>

                        <Icon
                          size={19}
                          strokeWidth={1.5}
                          className="text-white/50 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-300"
                        />
                      </div>

                      <h4 className="text-base font-semibold tracking-tight text-white sm:text-lg">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-sm leading-6 text-white/45">
                        {item.description}
                      </p>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Closing statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="about-reveal mt-20 border-t border-white/15 pt-7 sm:mt-28"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35 sm:text-xs">
            The mindset
          </p>

          <p className="mt-4 max-w-4xl text-2xl font-medium uppercase leading-tight tracking-[-0.04em] sm:text-3xl md:text-4xl">
            Always learning.
            <span className="bg-gradient-to-r from-purple-300 to-fuchsia-300 bg-clip-text text-transparent">
              {' '}Always building.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
