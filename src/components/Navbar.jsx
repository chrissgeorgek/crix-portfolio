import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const links = [
  { name: 'Home', href: '/#home', section: true },
  { name: 'About', href: '/#about', section: true },
  { name: 'Skills', href: '/#skills', section: true },
  { name: 'Projects', href: '/#projects', section: true },
  { name: 'Certifications', href: '/certifications' },
  { name: 'Experience', href: '/experience' },
  { name: 'Education', href: '/education' },
  { name: 'Contact', href: '/#contact', section: true },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const navigateTo = (href) => {
    setMenuOpen(false)

    const [path, hash] = href.split('#')
    const targetPath = path || '/'

    if (location.pathname !== targetPath) {
      navigate(targetPath)

      if (hash) {
        window.setTimeout(() => {
          if (hash === 'home') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          } else {
            document.getElementById(hash)?.scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            })
          }
        }, 250)
      }
      return
    }

    if (hash === 'home' || !hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      document.getElementById(hash)?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  const renderLink = (link, mobile = false) => {
    const className = mobile
      ? 'block rounded-lg px-4 py-3 text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-purple-300'
      : 'whitespace-nowrap text-sm text-gray-400 transition-colors hover:text-white'

    if (link.section) {
      return (
        <button
          key={link.name}
          type="button"
          onClick={() => navigateTo(link.href)}
          className={`${className} ${mobile ? 'w-full text-left' : ''}`}
        >
          {link.name}
        </button>
      )
    }

    return (
      <Link
        key={link.name}
        to={link.href}
        onClick={() => setMenuOpen(false)}
        className={className}
      >
        {link.name}
      </Link>
    )
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0b0b10]/85 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
        <button
          type="button"
          onClick={() => navigateTo('/#home')}
          className="group flex items-center gap-3"
          aria-label="Go to homepage"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500 text-lg font-bold text-white shadow-lg shadow-purple-500/25 transition-transform group-hover:rotate-6">
            C
          </span>
          <span className="font-heading text-lg font-bold tracking-tight text-white">
            CRIX<span className="text-purple-400">.</span>
          </span>
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => renderLink(link))}
        </div>

        <a
  href="/Chriss_George.pdf"
  download="Chriss_George_Resume.pdf"
  className="hidden items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-purple-300 md:flex"
>
  Download Resume <ArrowUpRight size={16} />
</a>

        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-white md:hidden"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#111116] p-4 shadow-2xl md:hidden">
          <div className="space-y-1">
            {links.map((link) => renderLink(link, true))}
          </div>

          <button
            type="button"
            onClick={() => navigateTo('/#contact')}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-purple-500 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-400"
          >
            Let's Talk <ArrowUpRight size={16} />
          </button>
        </div>
      )}
    </header>
  )
}

