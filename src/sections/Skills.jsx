import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Code2,
  Database,
  Layers3,
  Wrench,
  Server,
  ShieldCheck,
  Cloud,
  BrainCircuit,
  Palette,
  Workflow,
  ChevronDown,
  Sparkles,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Programming Languages',
    description: 'Languages for application development.',
    icon: Code2,
    skills: ['Python', 'JavaScript', 'HTML5', 'CSS3', 'SQL'],
  },
  {
    title: 'Frontend Development',
    description: 'Building responsive and interactive interfaces.',
    icon: Layers3,
    skills: [
      'React.js',
      'Vite',
      'Tailwind CSS',
      'Bootstrap',
      'Framer Motion',
      'React Router',
      'Lucide React',
      'Responsive Web Design',
    ],
  },
  {
    title: 'Backend Development',
    description: 'Server-side development and API creation.',
    icon: Server,
    skills: [
      'Django',
      'Django REST Framework',
      'Node.js',
      'Express.js',
      'REST APIs',
      'Django ORM',
      'CRUD Operations',
    ],
  },
  {
    title: 'Databases & Caching',
    description: 'Data storage, management, and caching.',
    icon: Database,
    skills: [
      'PostgreSQL',
      'MySQL',
      'SQLite',
      'Redis',
      'Supabase',
      'Database Design',
    ],
  },
  {
    title: 'Authentication & Real-Time Systems',
    description: 'Application access control and live communication.',
    icon: ShieldCheck,
    skills: [
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'WebSockets',
      'Django Channels',
      'Real-Time Chat',
      'Role-Based Authorization',
    ],
  },
  {
    title: 'Development Tools',
    description: 'Tools for coding, testing, and version control.',
    icon: Wrench,
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'Docker',
      'npm',
      'pip',
      'ESLint',
      'Command Line',
    ],
  },
  {
    title: 'Deployment & Cloud',
    description: 'Application hosting and cloud fundamentals.',
    icon: Cloud,
    skills: [
      'Vercel',
      'Render',
      'AWS Fundamentals',
      'Cloud Computing',
      'Environment Configuration',
      'Frontend Deployment',
      'Backend Deployment',
    ],
  },
  {
    title: 'AI & Computer Vision',
    description: 'AI technologies and computer vision applications.',
    icon: BrainCircuit,
    skills: [
      'YOLOv3',
      'Object Detection',
      'Computer Vision',
      'LangChain (Learning)',
    ],
  },
  {
    title: 'Web Design & SEO',
    description: 'Website optimization and user experience.',
    icon: Palette,
    skills: [
      'SEO Optimization',
      'Technical SEO',
      'Structured Data',
      'Sitemap & Robots.txt',
      'Website Performance',
      'Responsive UI Design',
    ],
  },
  {
    title: 'Software Engineering',
    description: 'Core concepts used to build maintainable applications.',
    icon: Workflow,
    skills: [
      'Object-Oriented Programming',
      'MVC / MVT Architecture',
      'Component-Based Architecture',
      'API Integration',
      'Full-Stack Development',
      'Debugging',
    ],
  },
]

export default function Skills() {
  const [activeCard, setActiveCard] = useState(null)

  const toggleCard = (index) => {
    setActiveCard((current) => (current === index ? null : index))
  }

  return (
    <section
      id="skills"
      className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
              My Technical Toolkit
            </p>

            <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Skills & <span className="text-purple-400">Technologies.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Explore the technologies, tools, and concepts I use to build
            modern web applications.
          </p>
        </motion.div>

        <div className="grid items-start gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => {
            const Icon = group.icon
            const isOpen = activeCard === index

            return (
              <motion.article
                key={group.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.35,
                  delay: (index % 3) * 0.06,
                  layout: { duration: 0.3 },
                }}
                className={`overflow-hidden rounded-2xl border bg-[#101016] transition-colors duration-300 ${
                  isOpen
                    ? 'border-purple-400/50 shadow-lg shadow-purple-950/20'
                    : 'border-white/[0.08] hover:border-purple-400/30'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleCard(index)}
                  aria-expanded={isOpen}
                  aria-controls={`skills-panel-${index}`}
                  className="flex w-full items-center gap-4 p-5 text-left sm:p-6"
                >
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border transition-colors duration-300 ${
                      isOpen
                        ? 'border-purple-400/40 bg-purple-500/20 text-purple-200'
                        : 'border-purple-400/15 bg-purple-500/10 text-purple-300'
                    }`}
                  >
                    <Icon size={22} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="font-heading text-sm font-semibold text-white sm:text-base">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {group.skills.length}{' '}
                      {group.skills.length === 1 ? 'skill' : 'skills'}
                    </p>
                  </div>

                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                      isOpen
                        ? 'bg-purple-500/15 text-purple-300'
                        : 'text-gray-500'
                    }`}
                  >
                    <ChevronDown size={19} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`skills-panel-${index}`}
                      key="skills-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.3, ease: 'easeInOut' },
                        opacity: { duration: 0.2 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                        <div className="mb-4 h-px bg-gradient-to-r from-purple-400/40 via-white/[0.08] to-transparent" />

                        <p className="mb-4 text-xs leading-5 text-gray-400">
                          {group.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {group.skills.map((skill, skillIndex) => (
                            <motion.span
                              key={skill}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.2,
                                delay: skillIndex * 0.025,
                              }}
                              className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-gray-300 transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200 sm:text-sm"
                            >
                              {skill}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.article>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col gap-3 rounded-2xl border border-purple-400/15 bg-purple-500/[0.04] p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
              <Sparkles size={18} />
            </div>

            <div>
              <h3 className="font-heading text-base font-semibold text-white">
                Always Learning. Always Building.
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-400">
                Continuously expanding my knowledge of full-stack
                development, cloud technologies, and AI.
              </p>
            </div>
          </div>

          <span className="inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-3 py-2 text-xs font-medium text-purple-300">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
            Continuous Learning
          </span>
        </motion.div>
      </div>
    </section>
  )
}
