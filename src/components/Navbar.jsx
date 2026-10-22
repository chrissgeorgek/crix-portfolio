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
    }, 300)
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
? 'block w-full rounded-lg px-4 py-3 text-left text-sm text-gray-300 transition-colors hover:bg-white/5 hover:text-purple-300'
: 'whitespace-nowrap text-sm text-gray-400 transition-colors hover:text-white'

if (link.section) {
  return (
    <button
      key={link.name}
      type="button"
      onClick={() => navigateTo(link.href)}
      className={className}
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

const downloadResume = () => {
setMenuOpen(false)
}

return ( <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-8"> <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-2xl border border-white/[0.09] bg-[#0b0b10]/85 px-5 py-4 shadow-2xl shadow-black/20 backdrop-blur-xl">
<button
type="button"
onClick={() => navigateTo('/#home')}
className="group flex shrink-0 items-center gap-3"
aria-label="Go to homepage"
> <img
         src="/profile.jpeg"
         alt="Chriss George"
         className="h-10 w-10 shrink-0 rounded-xl border border-purple-400/30 object-cover shadow-lg shadow-purple-500/20 transition-transform group-hover:scale-105"
       />

      <span className="font-heading text-lg font-bold tracking-tight text-white">
        CHRISSG<span className="text-purple-400">.</span>
      </span>
    </button>

    <div className="hidden items-center gap-6 lg:flex xl:gap-8">
      {links.map((link) => renderLink(link))}
    </div>

    <a
      href="/Chriss_George.pdf"
      download="Chriss_George_Resume.pdf"
      className="ml-3 hidden shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-black transition-all hover:bg-purple-300 lg:flex"
    >
      Download Resume
      <ArrowUpRight size={16} />
    </a>

    <button
type="button"
onClick={() => setMenuOpen(!menuOpen)}
className="flex items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-white transition-colors hover:border-purple-400/30 hover:bg-purple-500/10 lg:hidden"
aria-label={menuOpen ? 'Close navigation menu' : 'More About Me'}
aria-expanded={menuOpen}

>

  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-gray-400">
    {menuOpen ? 'Close' : 'More About Me'}
  </span>

{menuOpen ? <X size={20} /> : <Menu size={20} />} </button>


  </nav>

  {menuOpen && (
    <div className="mx-auto mt-2 max-w-7xl rounded-2xl border border-white/10 bg-[#111116] p-4 shadow-2xl lg:hidden">
      <div className="space-y-1">
        {links.map((link) => renderLink(link, true))}
      </div>

      <a
        href="/Chriss_George.pdf"
        download="Chriss_George_Resume.pdf"
        onClick={downloadResume}
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
