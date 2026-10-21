import { motion } from 'framer-motion'
import { Code2, Database, Layers3, Wrench } from 'lucide-react'

const skillGroups = [
{
title: 'Languages',
icon: Code2,
skills: ['Python', 'JavaScript', 'HTML5', 'CSS3'],
},
{
title: 'Frameworks & Libraries',
icon: Layers3,
skills: ['React.js', 'Django', 'Django REST Framework', 'Tailwind CSS', 'Bootstrap'],
},
{
title: 'Databases',
icon: Database,
skills: ['PostgreSQL', 'MySQL', 'SQLite', 'Redis'],
},
{
title: 'Tools & Concepts',
icon: Wrench,
skills: ['Git', 'GitHub', 'Docker', 'Postman', 'REST APIs', 'JWT'],
},
]

export default function Skills() {
return ( <section id="skills" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"> <div className="mx-auto max-w-6xl">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.5 }}
className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
> <div> <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
My technical toolkit </p>


        <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Skills & <span className="text-purple-400">Technologies.</span>
        </h2>
      </div>

      <p className="max-w-sm text-sm leading-6 text-gray-500">
        Technologies I use to develop responsive interfaces and
        full-stack web applications.
      </p>
    </motion.div>

    <div className="grid gap-4 sm:grid-cols-2">
      {skillGroups.map((group, index) => {
        const Icon = group.icon

        return (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-white/[0.08] bg-[#101016] p-5 sm:p-6"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <Icon size={21} />
              </div>

              <h3 className="font-heading text-lg font-semibold text-white">
                {group.title}
              </h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-white/[0.08] bg-white/[0.025] px-3 py-2 text-xs text-gray-300 transition-all hover:border-purple-400/30 hover:bg-purple-500/10 hover:text-purple-200 sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  </div>
</section>


)
}
