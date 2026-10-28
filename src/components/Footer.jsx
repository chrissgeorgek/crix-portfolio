import { Link } from 'react-router-dom'

import {
  ArrowUpRight,
  Mail,
  ArrowUp,
  Code2,
} from 'lucide-react'

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Projects', path: '/projects' },
  { name: 'Experience', path: '/experience' },
  { name: 'Education', path: '/education' },
  { name: 'Certifications', path: '/certifications' },
  { name: 'Contact', path: '/contact' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="site-footer"
      className="relative z-10 mt-20 overflow-hidden border-t border-white/[0.08] bg-[#08080c]"
    >
      {/* Purple ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-purple-600/[0.12] blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Main footer content */}
        <div className="grid gap-12 py-14 md:grid-cols-2 md:gap-16 lg:grid-cols-[1.3fr_0.7fr_0.8fr] lg:py-20">
          {/* Brand and introduction */}
          <div>
            <Link
              to="/"
              aria-label="CRIX home"
              className="group inline-flex items-center gap-3"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-purple-400/20 bg-purple-500/[0.12] text-purple-300 transition-all duration-300 group-hover:border-purple-400/50 group-hover:bg-purple-500/20">
                <Code2 size={22} />
              </span>

              <span className="text-xl font-bold tracking-tight text-white">
                CRIX<span className="text-purple-400">.</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Building digital experiences with clean code, thoughtful design,
              and a passion for solving real-world problems.
            </p>

            {/* Social links */}
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://github.com/chrissgeorgek"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Code2 size={18} />
              </a>

              <a
                href="https://linkedin.com/in/chrissgeorge"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Code2 size={18} />
              </a>

              <a
                href="mailto:chrissgeorgek@gmail.com"
                aria-label="Send an email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] text-gray-400 transition-all duration-300 hover:border-purple-400/40 hover:bg-purple-500/10 hover:text-purple-300"
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Explore
            </h3>

            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="group inline-flex items-center gap-2 text-sm text-gray-400 transition-colors duration-200 hover:text-purple-300"
                  >
                    <span className="h-1 w-1 rounded-full bg-purple-400/50 transition-all group-hover:scale-150 group-hover:bg-purple-300" />

                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact call to action */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white">
              Let's Connect
            </h3>

            <p className="mt-5 text-sm leading-7 text-gray-400">
              Have a project in mind or an opportunity to discuss? I'd love to
              hear from you.
            </p>

            <a
              href="mailto:chrissgeorgek@gmail.com"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-500/15 transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-400 hover:shadow-purple-500/25"
            >
              Get in Touch

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <p className="mt-4 break-all text-sm text-gray-500">
              chrissgeorgek@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/[0.08] py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-gray-500">
            © {currentYear} CRIX. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Designed with <span className="text-purple-400">♥</span> and built
            with React.
          </p>

          <button
            type="button"
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: 'smooth',
              })
            }
            aria-label="Scroll to top"
            className="group inline-flex w-fit items-center gap-2 text-xs font-medium text-gray-400 transition-colors hover:text-purple-300"
          >
            Back to top

            <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 transition-all group-hover:border-purple-400/40 group-hover:bg-purple-500/10">
              <ArrowUp size={15} />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}