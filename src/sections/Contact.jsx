import { motion } from 'framer-motion'
import { ArrowUpRight, Send } from 'lucide-react'

const contactMethods = [
  {
    label: 'Email',
    value: 'Contact me by email',
    href: 'mailto:chrissgeorgek@gmail.com',
    iconText: '@',
    description: 'Have a question or an idea? Drop me a message.',
    action: 'Send an email',
  },
  {
    label: 'GitHub',
    value: 'Explore my projects',
    href: 'https://github.com/chrissgeorgek',
    iconText: 'GH',
    description: 'Explore my repositories, code, and development work.',
    action: 'View GitHub profile',
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://linkedin.com/in/chrissgeorge',
    iconText: 'in',
    description: 'Let’s connect and explore professional opportunities.',
    action: 'Connect with me',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative isolate scroll-mt-24 overflow-hidden bg-[#08080c] px-5 py-20 sm:px-8 sm:py-24 lg:py-28"
    >
      {/* Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0912] via-[#08080c] to-[#08080c]" />

        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-purple-600/[0.14] blur-[120px]" />

        <div className="absolute -bottom-32 -left-24 h-72 w-72 rounded-full bg-blue-600/[0.08] blur-[110px]" />

        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/30 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: 'easeOut' }}
          className="mx-auto mb-14 max-w-3xl text-center sm:mb-16"
        >
          <span className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-purple-400/25 bg-purple-500/[0.08] px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-purple-300 shadow-lg shadow-purple-950/10 sm:text-xs">
            <Send size={14} />
            Get in touch
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.65)]" />
          </span>

          <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Let's build something
            <span className="mt-2 block bg-gradient-to-r from-purple-400 via-fuchsia-300 to-blue-400 bg-clip-text pb-1 text-transparent">
              great together.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base sm:leading-8">
            Have a project in mind, an opportunity to discuss, or just want to
            connect? I'm always happy to meet new people and explore exciting
            ideas.
          </p>
        </motion.div>

        {/* Contact cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {contactMethods.map((method, index) => {
            const external = method.href.startsWith('https://')

            return (
              <motion.a
                key={method.label}
                href={method.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                aria-label={`${method.action} — ${method.label}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12,
                  ease: 'easeOut',
                }}
                whileHover={{ y: -7 }}
                className="group relative flex min-h-[270px] flex-col overflow-hidden rounded-2xl border border-white/[0.09] bg-[#101017] p-6 shadow-xl shadow-black/20 transition-colors duration-300 hover:border-purple-400/40 hover:bg-[#14111e] sm:p-7"
              >
                {/* Card glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-purple-500/0 blur-[70px] transition-colors duration-500 group-hover:bg-purple-500/[0.16]"
                />

                {/* Top accent */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-purple-400/0 to-transparent transition-colors duration-500 group-hover:via-purple-400/70 sm:inset-x-7" />

                {/* Icon and arrow */}
                <div className="relative z-10 mb-8 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-purple-400/25 bg-gradient-to-br from-purple-500/20 to-fuchsia-500/[0.06] text-lg font-bold text-purple-300 shadow-lg shadow-purple-950/10 transition-all duration-300 group-hover:scale-105 group-hover:border-purple-400/50 group-hover:text-white">
                    {method.iconText}
                  </span>

                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/[0.08] bg-white/[0.02] text-gray-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-purple-400/30 group-hover:bg-purple-500/10 group-hover:text-purple-300">
                    <ArrowUpRight size={18} />
                  </span>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="font-heading text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-purple-200">
                    {method.label}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-gray-300">
                    {method.value}
                  </p>

                  <p className="mt-3 text-sm leading-6 text-gray-500">
                    {method.description}
                  </p>
                </div>

                {/* Action */}
                <div className="relative z-10 mt-auto pt-7">
                  <div className="mb-4 h-px w-full bg-white/[0.08] transition-colors duration-300 group-hover:bg-purple-400/30" />

                  <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-wide text-purple-300/80 transition-colors duration-300 group-hover:text-purple-200 sm:text-sm">
                    {method.action}
                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* Direct email */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-12 text-center sm:mt-14"
        >
          <p className="text-sm text-gray-500">
            Prefer a direct conversation?
          </p>

          <a
            href="mailto:chrissgeorgek@gmail.com"
            className="mt-2 inline-block break-all text-sm font-medium text-gray-300 underline decoration-purple-400/40 underline-offset-4 transition-colors hover:text-purple-300 sm:text-base"
          >
            chrissgeorgek@gmail.com
          </a>
        </motion.div>

        {/* Bottom divider */}
        <div className="mt-16 border-t border-white/[0.08] pt-6 text-center sm:mt-20">
          <p className="text-xs leading-6 text-gray-500">
            © {new Date().getFullYear()} Chriss George.
            <span className="text-gray-600"> Built with React.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
