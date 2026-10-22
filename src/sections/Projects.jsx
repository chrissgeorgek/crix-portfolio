import { motion } from 'framer-motion'
import { ArrowUpRight, Layers3, Globe } from 'lucide-react'

const projects = [
{
number: '01',
title: 'Saha Learning Platform',
category: 'Full-Stack EdTech',
description:
'An educational platform with role-based access for students, teachers, and administrators, featuring REST APIs, JWT authentication, and real-time chat.',
technologies: ['React', 'Django REST', 'PostgreSQL', 'Redis', 'WebSockets'],
accent: 'from-purple-500/20 to-blue-500/10',
liveUrl: '',
githubUrl: '',
},
{
number: '02',
title: 'Training Management System',
category: 'Web Application',
description:
'A training management solution supporting 60+ users with role-based access, attendance management, batch allocation, activity tracking, and reporting.',
technologies: ['Django', 'PostgreSQL', 'Python'],
accent: 'from-blue-500/20 to-cyan-500/10',
liveUrl: '',
githubUrl: '',
},
{
number: '03',
title: 'Parking Slot Detection',
category: 'Computer Vision',
description:
'A computer vision project designed to detect parking slots using YOLOv3, with a previously reported detection accuracy of 92%.',
technologies: ['YOLOv3', 'Python', 'Django', 'PHP'],
accent: 'from-fuchsia-500/20 to-purple-500/10',
liveUrl: '',
githubUrl: '',
},
{
number: '04',
title: 'STEM CONNECT ACADEMY',
category: 'EdTech Website · Client Project',
description:
'Designed and developed a responsive online tuition website for Grades 5–12, featuring Supabase-powered review moderation, SEO optimization, WhatsApp enquiries, and direct contact options.',
technologies: [
'React',
'Vite',
'Tailwind CSS',
'Framer Motion',
'Supabase',
'Vercel',
],
accent: 'from-rose-500/15 to-purple-500/10',
liveUrl: 'https://stemconnectacademy.com/',
githubUrl: '',
},
]

export default function Projects() {
return ( <section
   id="projects"
   className="scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-24"
 > <div className="mx-auto max-w-6xl">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }}
transition={{ duration: 0.5 }}
className="mb-10"
> <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
Selected work </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        Featured <span className="text-purple-400">Projects.</span>
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
        A selection of applications and technical projects that showcase
        my development skills, practical experience, and problem-solving
        approach.
      </p>
    </motion.div>

    <div className="grid gap-5 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.article
          key={project.number}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: index * 0.08 }}
          whileHover={{ y: -4 }}
          className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-[#101016] transition-colors hover:border-purple-400/30"
        >
          <div
            className={`relative flex h-36 items-center justify-between overflow-hidden bg-gradient-to-br ${project.accent} px-6 sm:h-40 sm:px-8`}
          >
            <span className="font-heading text-6xl font-bold tracking-tighter text-white/[0.08] sm:text-7xl">
              {project.number}
            </span>

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-purple-200 backdrop-blur-sm transition-transform group-hover:scale-110">
              <Layers3 size={27} />
            </div>

            <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-400/40 to-transparent" />
          </div>

          <div className="p-5 sm:p-6">
            <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-purple-400">
              {project.category}
            </p>

            <h3 className="font-heading text-xl font-semibold text-white transition-colors group-hover:text-purple-200">
              {project.title}
            </h3>

            <p className="mt-3 min-h-[72px] text-sm leading-6 text-gray-400">
              {project.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-md border border-white/[0.08] bg-white/[0.025] px-2.5 py-1.5 text-[11px] text-gray-400"
                >
                  {technology}
                </span>
              ))}
            </div>

            {(project.liveUrl || project.githubUrl) && (
              <div className="mt-6 flex flex-wrap gap-3 border-t border-white/[0.08] pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-xs font-semibold text-black transition-colors hover:bg-purple-300"
                  >
                    <Globe size={15} />
                    Live Demo
                    <ArrowUpRight size={14} />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-xs font-medium text-gray-300 transition-colors hover:border-purple-400/30 hover:text-white"
                  >
                    <Github size={15} />
                    Source Code
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            )}
          </div>
        </motion.article>
      ))}
    </div>
  </div>
</section>


)
}
