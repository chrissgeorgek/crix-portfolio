import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight, Sparkles } from 'lucide-react'

const technologies = ['React', 'JavaScript', 'Python', 'Django']

export default function Hero() {
return ( <section
   id="home"
   className="relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-12 pt-28 sm:px-8 lg:px-12"
 >
{/* Background */} <div className="pointer-events-none absolute inset-0"> <div className="absolute left-[60%] top-[35%] h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px] sm:h-[450px] sm:w-[450px]" />


    <div
      className="absolute inset-0 opacity-[0.08]"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
        backgroundSize: '55px 55px',
        maskImage: 'linear-gradient(to bottom, black, transparent 90%)',
      }}
    />
  </div>

  <div className="relative mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
    {/* Introduction */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.65 }}
      className="min-w-0"
    >
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

      <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-gray-400 sm:text-sm">
        Hello, I'm Chriss George
      </p>

      <h1 className="font-heading text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
        Building
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text text-transparent">
          digital
        </span>{' '}
        experiences<span className="text-purple-400">.</span>
      </h1>

      <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
        I'm a developer passionate about creating modern web applications
        that combine thoughtful design, clean code, and meaningful user
        experiences.
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href="#projects"
          className="group inline-flex items-center gap-2 rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/20 transition-all hover:-translate-y-0.5 hover:bg-purple-400"
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

      <div className="mt-7 flex flex-wrap items-center gap-3">
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
    </motion.div>

    {/* Developer Card */}
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="relative mx-auto w-full max-w-sm"
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
          <p className="text-gray-500">// A little about me</p>

          <p>
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">developer</span> = {'{'}
          </p>

          <div className="space-y-1 pl-4">
            <p>
              <span className="text-gray-400">name:</span>{' '}
              <span className="text-green-300">'Chriss George'</span>,
            </p>

            <p>
              <span className="text-gray-400">degree:</span>{' '}
              <span className="text-green-300">'MCA'</span>,
            </p>

            <p>
              <span className="text-gray-400">focus:</span>{' '}
              <span className="text-green-300">'Web Development'</span>,
            </p>

            <p>
              <span className="text-gray-400">passion:</span>{' '}
              <span className="text-green-300">'Building'</span>,
            </p>

            <p>
              <span className="text-gray-400">mindset:</span>{' '}
              <span className="text-green-300">'Always Learning'</span>
            </p>
          </div>

          <p className="text-gray-400">{'}'}</p>

          <p>
            <span className="text-purple-400">function</span>{' '}
            <span className="text-blue-300">createSomethingAmazing</span>
            {'() {'}
          </p>

          <p className="pl-4 text-green-300">
            return "Ideas into reality";
          </p>

          <p className="text-gray-400">{'}'}</p>

          <div className="flex items-center gap-2 pt-1">
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
    </motion.div>
  </div>

  <a
    href="#about"
    aria-label="Scroll to about section"
    className="absolute bottom-4 left-1/2 hidden -translate-x-1/2 animate-bounce text-gray-500 transition-colors hover:text-purple-300 lg:block"
  >
    <ArrowDown size={18} />
  </a>
</section>


)
}
