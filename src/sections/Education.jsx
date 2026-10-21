import { motion } from 'framer-motion'
import {
GraduationCap,
BookOpen,
CalendarDays,
Code2,
Award,
} from 'lucide-react'

const education = [
{
degree: 'Master of Computer Applications',
short: 'MCA',
level: "MASTER'S DEGREE",
period: '2022 – 2024',
description:
'Postgraduate education focused on computer applications, software development, programming, and database technologies.',
subjects: [
'Software Engineering',
'Programming',
'Database Management',
'Web Development',
],
icon: GraduationCap,
},
{
degree: 'Bachelor of Computer Applications',
short: 'BCA',
level: "BACHELOR'S DEGREE",
period: 'Completion year to be added',
description:
'Undergraduate education providing a foundation in computer applications, programming, information technology, and software development.',
subjects: [
'Computer Programming',
'Data Management',
'Information Technology',
'Computer Applications',
],
icon: BookOpen,
},
]

export default function Education() {
return ( <section className="relative min-h-screen overflow-hidden px-5 pb-12 pt-10 sm:px-8 lg:px-12"> <div className="pointer-events-none absolute right-0 top-20 h-64 w-64 rounded-full bg-purple-600/[0.07] blur-[90px]" />

  <div className="relative mx-auto max-w-5xl">
    {/* Compact heading */}
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
      className="mb-7"
    >
      <div className="mb-3 flex items-center gap-2 text-purple-300">
        <GraduationCap size={19} />
        <span className="text-xs font-semibold uppercase tracking-[0.2em]">
          Academic Background
        </span>
      </div>

      <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
        Education<span className="text-purple-400">.</span>
      </h1>

      <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
        My academic journey in computer applications, software
        development, and information technology.
      </p>
    </motion.div>

    {/* Education cards */}
    <div className="space-y-4">
      {education.map((item, index) => {
        const Icon = item.icon

        return (
          <motion.article
            key={item.short}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12 }}
            className="group overflow-hidden rounded-2xl border border-white/10 bg-[#101016] transition-colors hover:border-purple-400/30"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Degree identity */}
              <div className="flex items-center gap-4 border-b border-white/[0.07] bg-gradient-to-r from-purple-500/[0.10] to-transparent p-5 sm:w-48 sm:shrink-0 sm:flex-col sm:justify-center sm:border-b-0 sm:border-r sm:p-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
                  <Icon size={25} />
                </div>

                <div className="sm:text-center">
                  <p className="font-heading text-3xl font-bold tracking-tight text-white">
                    {item.short}
                  </p>

                  <p className="mt-1 text-[9px] font-semibold tracking-[0.15em] text-purple-300">
                    {item.level}
                  </p>
                </div>
              </div>

              {/* Degree information */}
              <div className="min-w-0 flex-1 p-5 sm:p-6">
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-md border border-white/[0.08] bg-white/[0.03] px-2.5 py-1 text-xs text-gray-400">
                    <CalendarDays size={13} />
                    {item.period}
                  </span>

                  <span className="rounded-md border border-purple-400/15 bg-purple-500/[0.07] px-2.5 py-1 text-xs text-purple-200">
                    {index === 0 ? 'Postgraduate' : 'Undergraduate'}
                  </span>
                </div>

                <h2 className="font-heading text-lg font-bold leading-snug text-white sm:text-xl">
                  {item.degree}
                </h2>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  {item.description}
                </p>

                <div className="mt-4 border-t border-white/[0.07] pt-4">
                  <p className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-gray-400">
                    <Code2 size={14} className="text-purple-300" />
                    Key Study Areas
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {item.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-md border border-white/[0.07] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-gray-300 transition-colors hover:border-purple-400/30 hover:text-purple-200"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        )
      })}
    </div>

    {/* Compact footer note */}
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="mt-5 flex items-center gap-3 rounded-xl border border-white/[0.08] bg-white/[0.02] px-4 py-3"
    >
      <Award size={19} className="shrink-0 text-purple-300" />

      <p className="text-xs leading-5 text-gray-400 sm:text-sm">
        Beyond academics, I continue developing my skills through practical
        projects and professional certifications.
      </p>
    </motion.div>
  </div>
</section>


)
}
