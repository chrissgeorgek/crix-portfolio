import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
BriefcaseBusiness,
Code2,
MapPin,
CalendarDays,
CheckCircle2,
ChevronDown,
} from 'lucide-react'

const experiences = [
{
id: '01',
role: 'Full-Stack Software Engineer',
company: 'Etome Works Ltd',
period: 'Apr 2026 – Jun 2026',
location: 'Changanasserry, Kerala',
employmentType: 'On-site',
category: 'Full-Stack Development',
description:
'Developed a full-stack, role-based EdTech platform designed to support students, teachers, and administrators through integrated learning management and communication features.',
responsibilities: [
'Developed a role-based EdTech platform using React.js, Django REST Framework, and PostgreSQL to support Students, Teachers, and Administrators.',
'Designed and implemented RESTful APIs with JWT authentication and role-based access control (RBAC) for secure user and application management.',
'Implemented real-time communication using Django Channels, WebSockets, and Redis for interactive user-to-user messaging.',
'Developed learning management features, course workflows, community functionality, and administrative dashboards.',
'Optimized backend operations using Django ORM and PostgreSQL for efficient data management and application performance.',
'Built responsive React.js interfaces for desktop and mobile devices.',
],
technologies: [
'React.js',
'Python',
'Django REST Framework',
'PostgreSQL',
'Redis',
'Django Channels',
'WebSockets',
'JWT',
'RBAC',
],
accent: 'purple',
},
{
id: '02',
role: 'Software Developer',
company: 'IPSR Solutions Limited',
period: 'May 2025 – Mar 2026',
location: 'Kottayam, Kerala',
employmentType: 'On-site',
category: 'Software Development',
description:
'Developed a Django-based Training Management System supporting more than 60 users, with workflows for administrators, faculty members, and students.',
responsibilities: [
'Developed a role-based Training Management System using Django and PostgreSQL for 60+ users across Admin, Faculty, and Student roles.',
'Implemented role-based access control to provide secure, customized functionality for different user roles.',
'Developed modules for candidate registration, batch allocation, faculty assignment, attendance tracking, and daily activity management.',
'Implemented CRUD operations using Django ORM for efficient management of training and user data.',
'Built attendance tracking and reporting features to monitor student participation and training progress.',
'Improved usability through responsive interfaces and streamlined administrative and academic workflows.',
],
technologies: [
'Python',
'Django',
'PostgreSQL',
'Django ORM',
'HTML',
'CRUD Operations',
'RBAC',
],
accent: 'blue',
},
]

const accentStyles = {
purple: {
icon: 'border-purple-400/20 bg-purple-500/10 text-purple-300',
badge: 'border-purple-400/20 bg-purple-500/10 text-purple-300',
dot: 'bg-purple-400',
line: 'from-purple-400/60',
hover: 'hover/30',
number: 'text-purple-300',
},
blue: {
icon: 'border-blue-400/20 bg-blue-500/10 text-blue-300',
badge: 'border-blue-400/20 bg-blue-500/10 text-blue-300',
dot: 'bg-blue-400',
line: 'from-blue-400/60',
hover: 'hover/30',
number: 'text-blue-300',
},
}

export default function Experience() {
const [expanded, setExpanded] = useState({})

const toggleExpanded = (id) => {
setExpanded((previous) => ({
...previous,
[id]: !previous[id],
}))
}

return (
<section id="experience" className="relative min-h-screen overflow-hidden px-5 pb-16 pt-10 sm:px-8 lg:px-12" >
<div className="pointer-events-none absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-600/[0.06] blur-[100px]" />

  <div className="relative mx-auto max-w-6xl">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <div className="mb-3 flex items-center gap-2 text-purple-300">
        <BriefcaseBusiness size={17} />
        <span className="text-xs font-semibold uppercase tracking-[0.22em]">
          Professional Journey
        </span>
      </div>

      <h1 className="font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
        Work <span className="text-purple-400">Experience.</span>
      </h1>

      <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
        My professional experience in software development, building
        database-driven applications, secure APIs, and full-stack web
        platforms.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
          <BriefcaseBusiness size={17} className="text-purple-300" />
          <div>
            <p className="font-heading text-lg font-bold text-white">2</p>
            <p className="text-[11px] text-gray-500">
              Professional roles
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.025] px-4 py-3">
          <Code2 size={17} className="text-blue-300" />
          <div>
            <p className="font-heading text-lg font-bold text-white">
              Full-Stack
            </p>
            <p className="text-[11px] text-gray-500">
              Development experience
            </p>
          </div>
        </div>
      </div>
    </motion.div>

    <div className="relative space-y-6">
      <div className="absolute bottom-8 left-[17px] top-8 w-px bg-gradient-to-b from-purple-400/60 via-blue-400/40 to-transparent sm:left-[21px]" />

      {experiences.map((experience, index) => {
        const style = accentStyles[experience.accent]
        const isExpanded = Boolean(expanded[experience.id])

        return (
          <motion.article
            key={experience.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="relative pl-10 sm:pl-14"
          >
            <span
              className={`absolute left-[11px] top-7 z-10 h-3.5 w-3.5 rounded-full border-[3px] border-[#08080c] ${style.dot} sm:left-[15px]`}
            />

            <div
              className={`group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101016] transition-colors ${style.hover}`}
            >
              <div
                className={`h-px w-full bg-gradient-to-r ${style.line} to-transparent`}
              />

              <div className="p-5 sm:p-7">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border ${style.icon}`}
                  >
                    {index === 0 ? (
                      <Code2 size={23} />
                    ) : (
                      <BriefcaseBusiness size={23} />
                    )}
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-3 lg:flex-row lg:items-start lg:justify-between">
                      <div>
                        <p
                          className={`mb-2 text-[10px] font-semibold uppercase tracking-[0.18em] ${style.number}`}
                        >
                          {experience.category}
                        </p>

                        <h2 className="font-heading text-xl font-bold leading-snug text-white sm:text-2xl">
                          {experience.role}
                        </h2>

                        <p className="mt-1 text-base font-medium text-gray-300">
                          {experience.company}
                        </p>
                      </div>

                      <div
                        className={`flex w-fit shrink-0 items-center gap-2 rounded-lg border px-3 py-2 text-xs ${style.badge}`}
                      >
                        <CalendarDays size={14} />
                        {experience.period}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin size={13} />
                        {experience.location}
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <BriefcaseBusiness size={13} />
                        {experience.employmentType}
                      </span>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-gray-400">
                      {experience.description}
                    </p>

                    {/* Full details: collapsed on mobile, visible on desktop */}
                    <div className="hidden sm:block">
                      <ExperienceDetails
                        experience={experience}
                        style={style}
                      />
                    </div>

                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          key="mobile-details"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden sm:hidden"
                        >
                          <ExperienceDetails
                            experience={experience}
                            style={style}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Read More is only shown on mobile */}
                    <button
                      type="button"
                      onClick={() => toggleExpanded(experience.id)}
                      aria-expanded={isExpanded}
                      className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl border border-purple-400/20 bg-purple-500/[0.07] px-4 py-3 text-sm font-medium text-purple-300 transition-colors hover:bg-purple-500/[0.14] sm:hidden"
                    >
                      {isExpanded ? 'Read Less' : 'Read More'}
                      <motion.span
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronDown size={17} />
                      </motion.span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>

    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="mt-8 rounded-2xl border border-purple-400/15 bg-purple-500/[0.04] p-5 sm:p-6"
    >
      <h3 className="font-heading text-lg font-semibold text-white">
        Interested in working together?
      </h3>

      <p className="mt-1 text-sm leading-6 text-gray-400">
        Let's connect to discuss software development opportunities
        and projects.
      </p>

      <a
        href="/#contact"
        className="mt-4 inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-purple-300"
      >
        Contact Me
      </a>
    </motion.div>
  </div>
</section>

)
}

function ExperienceDetails({ experience, style }) {
return (
<div className="mt-6">
<h3 className="mb-4 flex items-center gap-2 text-sm font-semibold text-white">
<CheckCircle2 size={16} className={style.number} />
Key Responsibilities & Achievements
</h3>

  <ul className="space-y-3">
    {experience.responsibilities.map((responsibility) => (
      <li
        key={responsibility}
        className="flex items-start gap-3 text-sm leading-6 text-gray-400"
      >
        <span
          className={`mt-2 h-1.5 w-1.5 shrink-0 rounded-full ${style.dot}`}
        />
        <span>{responsibility}</span>
      </li>
    ))}
  </ul>

  <div className="mt-6 border-t border-white/[0.07] pt-5">
    <h3 className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-gray-500">
      Technologies & Skills
    </h3>

    <div className="flex flex-wrap gap-2">
      {experience.technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-gray-300 transition-colors hover:border-purple-400/20 hover:text-purple-200"
        >
          {technology}
        </span>
      ))}
    </div>
  </div>
</div>

)
}