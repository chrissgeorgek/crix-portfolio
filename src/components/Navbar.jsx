import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import GooeyNav from './GooeyNav.jsx'

const links = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Skills', href: '/skills' },
  { name: 'Projects', href: '/projects' },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Experience', href: '/experience' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const location = useLocation()
  const navigate = useNavigate()

  const activeIndex = Math.max(
    links.findIndex((link) => link.href === location.pathname),
    0,
  )

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const navigateTo = (href) => {
    setMenuOpen(false)
    navigate(href)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleGooeyNavigation = (index) => {
    const selectedLink = links[index]

    if (selectedLink) {
      navigateTo(selectedLink.href)
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-2xl border border-white/[0.09] bg-[#0b0b10]/90 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">

        {/* Logo */}
        <button
          type="button"
          onClick={() => navigateTo('/')}
          className="group flex shrink-0 items-center gap-3"
          aria-label="Go to homepage"
        >
          <img
            src="/profile.jpeg"
            alt="Profile"
            className="h-10 w-10 shrink-0 rounded-xl border border-purple-400/30 object-cover shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-105"
          />

          <span className="font-heading text-lg font-bold tracking-tight text-white">
            CHRISSG<span className="text-purple-400">.</span>
          </span>
        </button>

        {/* Desktop Gooey Navigation */}
        <div className="hidden min-w-0 flex-1 justify-center lg:flex">
          <GooeyNav
            items={links.map((link) => ({
              label: link.name,
              href: link.href,
            }))}
            initialActiveIndex={activeIndex}
            activeIndex={activeIndex}
            onChange={handleGooeyNavigation}
            theme="dark"
            size="sm"
            frame
            particleCount={12}
            spread={45}
            animationTime={500}
            timeVariance={250}
            gooeyness={0.45}
            wobble={0.4}
            hoverEffect
          />
        </div>

        {/* Resume */}
        <a
          href="/Chriss_George.pdf"
          download="Chriss_George_Resume.pdf"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-purple-300 lg:flex"
        >
          Resume
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-white transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
            {menuOpen ? 'Close' : 'More About Me'}
          </span>

          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#111116] p-4 shadow-2xl lg:hidden">
          <div className="grid grid-cols-2 gap-2">
            {links.map((link) => {
              const isActive = location.pathname === link.href

              return (
                <button
                  key={link.name}
                  type="button"
                  onClick={() => navigateTo(link.href)}
                  className={`rounded-lg px-4 py-3 text-left text-sm transition-colors ${
                    isActive
                      ? 'border border-purple-400/30 bg-purple-500/15 text-purple-300'
                      : 'border border-transparent text-gray-300 hover:bg-white/5 hover:text-purple-300'
                  }`}
                >
                  {link.name}
                </button>
              )
            })}
          </div>

          <a
            href="/Chriss_George.pdf"
            download="Chriss_George_Resume.pdf"
            onClick={() => setMenuOpen(false)}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-black transition-colors hover:bg-purple-300"
          >
            Download Resume
            <ArrowUpRight size={16} />
          </a>
        </div>
      )}
    </header>
  )
}

