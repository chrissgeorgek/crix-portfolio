import { motion } from 'framer-motion'
import { BriefcaseBusiness, Code2 } from 'lucide-react'

const experiences = [
{
role: 'Developer Intern / Trainee',
company: 'Software Development',
period: 'Internship / Training',
description:
'Gained practical experience in web application development, frontend interfaces, backend integration, and database-driven applications.',
technologies: ['Python', 'Django', 'React', 'PostgreSQL'],
},
{
role: 'Full-Stack Project Development',
company: 'Personal & Academic Projects',
period: 'Project Experience',
description:
'Developed web applications involving role-based access, REST APIs, database management, responsive interfaces, and application workflows.',
technologies: ['React', 'Django REST Framework', 'SQL', 'JavaScript'],
},
]

export default function Experience() {
return ( <section
   id="experience"
   className="px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
 > <div className="mx-auto max-w-6xl"> <div className="mb-10"> <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
My journey </p>
      <h2 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl">
        Experience<span className="text-purple-400">.</span>
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
        Practical development experience through training and project work.
      </p>
    </div>

    <div className="relative space-y-5 border-l border-purple-400/20 pl-5 sm:pl-8">
      {experiences.map((experience, index) => (
        <motion.article
          key={experience.role}
          initial={{ opacity: 0, x: 15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: index * 0.1 }}
          className="relative rounded-2xl border border-white/[0.08] bg-[#101016] p-5 sm:p-6"
        >
          <span className="absolute -left-[27px] top-7 h-3 w-3 rounded-full border-2 border-purple-300 bg-[#08080c] sm:-left-[41px]" />

          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
              {index === 0 ? (
                <BriefcaseBusiness size={22} />
              ) : (
                <Code2 size={22} />
              )}
            </div>

            <div className="min-w-0 flex-1">
              <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="font-heading text-lg font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-sm text-purple-300">
                    {experience.company}
                  </p>
                </div>

                <span className="w-fit rounded-lg border border-white/[0.08] px-3 py-1.5 text-xs text-gray-400">
                  {experience.period}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-gray-400">
                {experience.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {experience.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md bg-white/[0.04] px-2.5 py-1.5 text-xs text-gray-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>
)
}
