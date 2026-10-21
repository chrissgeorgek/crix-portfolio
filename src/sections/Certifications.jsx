import { motion } from 'framer-motion'
import {
  Bot,
  Cloud,
  Globe,
  Newspaper,
  ArrowUpRight,
  Award,
  Sparkles,
  ExternalLink,
  Image as ImageIcon,
} from 'lucide-react'

const certifications = [
  {
    id: '01',
    title: 'Building AI Agents with LangChain',
    issuer: 'Udemy',
    category: 'Artificial Intelligence',
    description:
      'Learning to build AI agents and explore agent-based applications using LangChain.',
    skills: ['LangChain', 'AI Agents', 'LLM Applications'],
    icon: Bot,
    accent: 'purple',
    featured: true,
    status: 'Current Learning',
    certificate: '',
    certificateType: '',
  },
  {
    id: '02',
    title: 'Cloud Computing & Distributed Systems',
    issuer: 'NPTEL',
    category: 'Cloud Computing',
    description:
      'Coursework covering cloud computing concepts and distributed systems.',
    skills: ['Cloud Computing', 'Distributed Systems'],
    icon: Cloud,
    accent: 'blue',
    featured: false,
    status: 'Completed',
    certificate: '/certificates/cloud-computing.jpeg',
    certificateType: 'image',
  },
  {
    id: '03',
    title: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    category: 'Digital Marketing',
    description:
      'Training in digital marketing fundamentals and online promotion.',
    skills: ['Digital Marketing', 'Online Promotion'],
    icon: Globe,
    accent: 'orange',
    featured: false,
    status: 'Completed',
    certificate: '/certificates/digital-marketing.pdf',
    certificateType: 'pdf',
  },
  {
    id: '04',
    title: 'Introduction to Digital Journalism',
    issuer: 'Reuters',
    category: 'Digital Media',
    description:
      'An introductory course covering digital journalism fundamentals.',
    skills: ['Digital Journalism', 'Media'],
    icon: Newspaper,
    accent: 'green',
    featured: false,
    status: 'Training',
    certificate: '',
    certificateType: '',
  },
]

const accentStyles = {
  purple: {
    icon: 'bg-purple-500/10 text-purple-300 border-purple-400/20',
    line: 'from-purple-400/70',
    tag: 'border-purple-400/15 bg-purple-500/[0.07] text-purple-200',
    glow: 'hover:border-purple-400/30',
    number: 'text-purple-300',
  },
  blue: {
    icon: 'bg-blue-500/10 text-blue-300 border-blue-400/20',
    line: 'from-blue-400/70',
    tag: 'border-blue-400/15 bg-blue-500/[0.07] text-blue-200',
    glow: 'hover:border-blue-400/30',
    number: 'text-blue-300',
  },
  orange: {
    icon: 'bg-orange-500/10 text-orange-300 border-orange-400/20',
    line: 'from-orange-400/70',
    tag: 'border-orange-400/15 bg-orange-500/[0.07] text-orange-200',
    glow: 'hover:border-orange-400/30',
    number: 'text-orange-300',
  },
  green: {
    icon: 'bg-emerald-500/10 text-emerald-300 border-emerald-400/20',
    line: 'from-emerald-400/70',
    tag: 'border-emerald-400/15 bg-emerald-500/[0.07] text-emerald-200',
    glow: 'hover:border-emerald-400/30',
    number: 'text-emerald-300',
  },
}

function CertificateButton({ certification, featured = false }) {
  if (!certification.certificate) return null

  const isImage = certification.certificateType === 'image'

  return (
    <a
      href={certification.certificate}
      target="_blank"
      rel="noreferrer"
      aria-label={`View ${certification.title} certificate`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2.5 text-xs font-medium transition-colors ${
        featured
          ? 'border-purple-400/20 text-white hover:border-purple-400/50 hover:bg-purple-500/10'
          : 'border-white/10 text-gray-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-200'
      }`}
    >
      {isImage ? <ImageIcon size={14} /> : <ExternalLink size={14} />}
      View Certificate
      <ArrowUpRight size={14} />
    </a>
  )
}

export default function Certifications() {
  const featuredCertifications = certifications.filter(
    (certification) => certification.featured
  )

  const otherCertifications = certifications.filter(
    (certification) => !certification.featured
  )

  return (
    <section className="relative min-h-screen overflow-hidden px-5 pb-12 pt-10 sm:px-8 lg:px-12">
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-64 rounded-full bg-purple-600/[0.06] blur-[90px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <div className="mb-3 flex items-center gap-2 text-purple-300">
              <Award size={18} />
              <span className="text-xs font-semibold uppercase tracking-[0.2em]">
                Learning & Development
              </span>
            </div>

            <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Certifications<span className="text-purple-400">.</span>
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-400">
              Courses and credentials reflecting my interest in software
              development, artificial intelligence, and emerging technologies.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start rounded-xl border border-white/[0.08] bg-white/[0.025] px-3 py-2 sm:self-auto">
            <Sparkles size={15} className="text-purple-300" />
            <span className="text-xs text-gray-400">
              {certifications.length} learning highlights
            </span>
          </div>
        </motion.div>

        {/* Featured AI learning */}
        {featuredCertifications.map((certification) => {
          const Icon = certification.icon
          const style = accentStyles[certification.accent]

          return (
            <motion.article
              key={certification.id}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`group relative mb-5 overflow-hidden rounded-2xl border border-purple-400/20 bg-gradient-to-r from-purple-500/[0.10] via-[#111116] to-[#101016] p-5 sm:p-6 ${style.glow}`}
            >
              <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-purple-300 via-fuchsia-500 to-blue-500" />

              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                  <Icon size={28} />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="mb-2 flex flex-wrap items-center gap-2">
                    <span
                      className={`text-[10px] font-semibold uppercase tracking-[0.16em] ${style.number}`}
                    >
                      Featured · {certification.category}
                    </span>

                    <span
                      className={`rounded-full border px-2.5 py-1 text-[10px] ${style.tag}`}
                    >
                      {certification.status}
                    </span>
                  </div>

                  <h2 className="font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
                    {certification.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-400">
                    Offered by {certification.issuer}
                  </p>

                  <p className="mt-3 max-w-3xl text-sm leading-6 text-gray-400">
                    {certification.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {certification.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-white/[0.08] bg-black/20 px-2.5 py-1.5 text-[11px] text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <CertificateButton
                  certification={certification}
                  featured
                />
              </div>
            </motion.article>
          )
        })}

        {/* Other certifications */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {otherCertifications.map((certification, index) => {
            const Icon = certification.icon
            const style = accentStyles[certification.accent]

            return (
              <motion.article
                key={certification.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 + index * 0.08 }}
                whileHover={{ y: -3 }}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101016] p-5 transition-colors ${style.glow}`}
              >
                <div
                  className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${style.line} to-transparent`}
                />

                <div className="mb-5 flex items-start justify-between">
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl border ${style.icon}`}
                  >
                    <Icon size={22} />
                  </div>

                  <span
                    className={`font-heading text-sm font-bold ${style.number}`}
                  >
                    {certification.id}
                  </span>
                </div>

                <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-500">
                  {certification.category}
                </p>

                <h2 className="font-heading text-lg font-semibold leading-snug text-white transition-colors group-hover:text-purple-200">
                  {certification.title}
                </h2>

                <p className="mt-2 text-xs text-gray-500">
                  Issued by {certification.issuer}
                </p>

                <p className="mt-3 flex-1 text-sm leading-6 text-gray-400">
                  {certification.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2 border-t border-white/[0.07] pt-4">
                  {certification.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`rounded-md border px-2 py-1 text-[10px] ${style.tag}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {certification.certificate && (
                  <div className="mt-4">
                    <CertificateButton certification={certification} />
                  </div>
                )}
              </motion.article>
            )
          })}
        </div>

        <p className="mt-5 text-xs leading-5 text-gray-500">
          Certificate files are provided for viewing. Additional verification
          links can be added when available.
        </p>
      </div>
    </section>
  )
}

