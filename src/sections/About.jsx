import { motion } from 'framer-motion'
import {
Code2,
GraduationCap,
Laptop,
Rocket,
ArrowUpRight,
} from 'lucide-react'

const highlights = [
{
icon: Code2,
title: 'Clean Code',
description: 'Building maintainable and scalable applications.',
},
{
icon: Laptop,
title: 'Web Development',
description: 'Creating responsive and intuitive user experiences.',
},
{
icon: Rocket,
title: 'Problem Solving',
description: 'Turning ideas into practical digital solutions.',
},
{
icon: GraduationCap,
title: 'Continuous Learning',
description: 'Exploring new technologies and improving every day.',
},
]

export default function About() {
return ( <section id="about" className="relative px-5 py-20 sm:px-8 lg:px-12 lg:py-24"> <div className="mx-auto max-w-6xl">
<motion.div
initial={{ opacity: 0, y: 20 }}
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true, amount: 0.2 }}
transition={{ duration: 0.6 }}
className="mb-10"
> <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-purple-400">
Get to know me </p>
      <h2 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
        About <span className="text-purple-400">Me.</span>
      </h2>
    </motion.div>

    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:gap-12">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 sm:p-8"
      >
        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/10 text-purple-300">
          <Code2 size={24} />
        </div>

        <h3 className="mb-4 font-heading text-xl font-semibold text-white">
          Developer by passion, problem solver by nature.
        </h3>

        <div className="space-y-4 text-sm leading-7 text-gray-400 sm:text-base">
          <p>
            I'm Chriss George, an MCA graduate with an interest in building
            modern web applications and solving real-world problems through
            technology.
          </p>

          <p>
            My experience includes developing responsive interfaces,
            building REST APIs, working with databases, and implementing
            application features using modern web technologies.
          </p>

          <p>
            I enjoy learning new tools, writing clean code, and turning
            ideas into useful digital products.
          </p>
        </div>

        <a
          href="#projects"
          className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-purple-300 transition-colors hover:text-purple-200"
        >
          Explore my projects
          <ArrowUpRight size={16} />
        </a>
      </motion.div>

      <div className="grid gap-4 sm:grid-cols-2">
        {highlights.map((item, index) => {
          const Icon = item.icon

          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{ y: -4 }}
              className="rounded-2xl border border-white/[0.08] bg-[#101016] p-5 transition-colors hover:border-purple-400/30"
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-300">
                <Icon size={21} />
              </div>

              <h3 className="mb-2 font-heading text-base font-semibold text-white">
                {item.title}
              </h3>

              <p className="text-sm leading-6 text-gray-500">
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>
    </div>
  </div>
</section>


)
}
