import { useState, useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import GooeyNav from './GooeyNav.jsx'
import ProfileCard from './ProfileCard.jsx'

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
  const [profileOpen, setProfileOpen] = useState(false)

  const profileRef = useRef(null)
  const location = useLocation()
  const navigate = useNavigate()

  const activeIndex = Math.max(
    links.findIndex((link) => link.href === location.pathname),
    0,
  )

  useEffect(() => {
    setMenuOpen(false)
    setProfileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false)
      }
    }

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setProfileOpen(false)
      }
    }

    document.addEventListener('pointerdown', handleOutsideClick)
    document.addEventListener('keydown', handleEscape)

    return () => {
      document.removeEventListener('pointerdown', handleOutsideClick)
      document.removeEventListener('keydown', handleEscape)
    }
  }, [])

  const navigateTo = (href) => {
    setMenuOpen(false)
    setProfileOpen(false)
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
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-8 sm:pt-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-2xl border border-white/[0.09] bg-[#0b0b10]/90 px-3 py-3 shadow-2xl shadow-black/20 backdrop-blur-xl sm:gap-4 sm:px-5 sm:py-4">

        {/* Left profile: portrait + logo */}
        <div ref={profileRef} className="relative z-[70] shrink-0">
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={() => setProfileOpen((previous) => !previous)}
              aria-label="Open Chriss George profile card"
              aria-expanded={profileOpen}
              className={`relative h-9 w-9 shrink-0 overflow-hidden rounded-xl border transition-all duration-300 sm:h-10 sm:w-10 ${
                profileOpen
                  ? 'border-purple-400 shadow-lg shadow-purple-500/30'
                  : 'border-purple-400/30 shadow-lg shadow-purple-500/20 hover:border-purple-400'
              }`}
            >
              <img
                src="/profile.jpeg"
                alt="Chriss George"
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-110"
              />

              <span className="absolute bottom-0.5 right-0.5 h-2.5 w-2.5 rounded-full border-2 border-[#0b0b10] bg-emerald-400" />
            </button>

            <button
              type="button"
              onClick={() => navigateTo('/')}
              className="whitespace-nowrap font-heading text-base font-bold tracking-tight text-white sm:text-lg"
              aria-label="Go to homepage"
            >
              CHRISSG<span className="text-purple-400">.</span>
            </button>
          </div>

          {/* Interactive React Bits ProfileCard */}
          {profileOpen && (
            <div className="absolute left-0 top-full mt-3 w-[min(340px,calc(100vw-1.5rem))] max-h-[calc(100dvh-100px)] overflow-y-auto overflow-x-hidden rounded-2xl shadow-2xl shadow-black/50">
              <ProfileCard
                name="Chriss George"
                title="Software Engineer | Python Full Stack Developer"
                handle="chrissgeorgek"
                status="Available for opportunities"
                contactText="Contact"
                avatarUrl="/profile.jpeg"
                holo={0.8}
                glare={0.5}
                tiltStrength={12}
                parallax={8}
                radius={16}
                enableTilt
                showUserInfo
                theme="dark"
                onContactClick={() => navigateTo('/contact')}
              />
            </div>
          )}
        </div>

        {/* Desktop navigation */}
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

        {/* Desktop resume */}
        <a
          href="/Chriss_George.pdf"
          download="Chriss_George_Resume.pdf"
          className="hidden shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-purple-300 lg:flex"
        >
          Resume
          <ArrowUpRight size={16} />
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          className="flex shrink-0 items-center gap-2 rounded-xl border border-white/10 px-2.5 py-2.5 text-white transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 sm:px-3 lg:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.12em] text-gray-400 sm:inline">
            {menuOpen ? 'Close' : 'More About Me'}
          </span>

          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile navigation */}
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

