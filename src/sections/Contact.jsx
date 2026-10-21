
import { motion } from 'framer-motion'
import { Mail, ArrowUpRight, MessageCircle, Send } from 'lucide-react'

const contactMethods = [
  {
    label: 'Email',
    value: 'Contact me by email',
    href: 'mailto:YOUR_EMAIL@example.com',
    iconText: '@',
  },
  {
    label: 'GitHub',
    value: 'Explore my projects',
    href: 'https://github.com/chrissgeorgek',
    iconText: 'GH',
  },
  {
    label: 'LinkedIn',
    value: 'Connect professionally',
    href: 'https://linkedin.com/in/chrissgeorge',
    iconText: 'in',
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-24 overflow-hidden px-5 py-20 sm:px-8 sm:py-24"
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 text-center"
        >
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-purple-300">
            <Send size={13} />
            Get in touch
          </span>

          <h2 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-5xl">
            Let's build something
            <span className="block text-purple-400">
              great together.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Have a project in mind, an opportunity to discuss, or just want to
            connect? I'd be happy to hear from you.
          </p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-3">
          {contactMethods.map((method, index) => (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.href.startsWith('https://') ? '_blank' : undefined}
              rel={method.href.startsWith('https://') ? 'noreferrer' : undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-purple-400/30 hover:bg-purple-500/[0.05]"
            >
              <div className="mb-5 flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-sm font-bold text-purple-300">
                  {method.iconText}
                </span>

                <ArrowUpRight
                  size={18}
                  className="text-gray-600 transition-colors group-hover:text-purple-300"
                />
              </div>

              <h3 className="font-heading text-lg font-semibold text-white">
                {method.label}
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                {method.value}
              </p>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 border-t border-white/[0.08] pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Chriss George. Built with React.
          </p>
        </div>
      </div>
    </section>
  )
}

