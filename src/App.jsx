import { useState } from 'react'
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import LoadingIntro from './components/LoadingIntro.jsx'
import MicroSlats from './components/MicroSlats.jsx'
import CircularCarousel from './components/CircularCarousel.jsx'
import ExplorePrompt from './components/ExplorePrompt.jsx'
import GradientText from './components/GradientText.jsx'
import TechText from './components/TechText.jsx'

import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Certifications from './sections/Certifications.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'

const portfolioPages = [
  {
    title: 'Home',
    subtitle: 'Meet the Developer',
    alt: 'Developer workspace',
    src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=80&auto=format&fit=crop',
    path: '/home',
  },
  {
    title: 'About',
    subtitle: 'My Story',
    alt: 'About and personal profile',
    src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=80&auto=format&fit=crop',
    path: '/about',
  },
  {
    title: 'Skills',
    subtitle: 'My Tech Stack',
    alt: 'Programming and development',
    src: 'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=900&q=80&auto=format&fit=crop',
    path: '/skills',
  },
  {
    title: 'Projects',
    subtitle: 'Things I Have Built',
    alt: 'Software development projects',
    src: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=900&q=80&auto=format&fit=crop',
    path: '/projects',
  },
  {
    title: 'Experience',
    subtitle: 'My Journey',
    alt: 'Professional experience',
    src: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=900&q=80&auto=format&fit=crop',
    path: '/experience',
  },
  {
    title: 'Education',
    subtitle: 'What I Have Learned',
    alt: 'Education and learning',
    src: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&q=80&auto=format&fit=crop',
    path: '/education',
  },
  {
    title: 'Certifications',
    subtitle: 'Credentials',
    alt: 'Certificates and achievements',
    src: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&q=80&auto=format&fit=crop',
    path: '/certifications',
  },
  {
    title: 'Contact',
    subtitle: "Let's Connect",
    alt: 'Contact and collaboration',
    src: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900&q=80&auto=format&fit=crop',
    path: '/contact',
  },
]

function LandingPage() {
  const navigate = useNavigate()

  const handleCarouselClick = (item) => {
    if (item?.path) {
      navigate(item.path)
    }
  }

  return (
    <main className="landing-page relative z-10 mx-auto flex min-h-[100svh] w-full flex-col items-center justify-center overflow-x-clip px-4 pb-5 pt-24 text-center sm:px-6 sm:pb-6 sm:pt-28 lg:px-10">

      {/* Landing page introduction */}
      <div className="landing-intro relative z-10 mx-auto mb-3 flex w-full max-w-4xl shrink-0 flex-col items-center text-center sm:mb-4">
        {/* <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.24em] text-purple-300 sm:mb-3 sm:text-xs sm:tracking-[0.28em]">
          PORTFOLIO · 2026
        </p> */}

<h1 className="w-full text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
  <GradientText
    colors={['#5227FF', '#FF9FFC', '#B497CF']}
    animationSpeed={8}
    variant="linear"
    glow={0}
    className="inline-flex flex-col items-center"
  >
    <span>Explore my</span>
    <span>digital world.</span>
  </GradientText>
</h1>

<div className="mx-auto mt-2 h-[100px] w-full max-w-2xl sm:mt-3 sm:h-[120px]">
  <TechText
    text="Developer, problem solver, and lifelong learner."
    fontWeight={500}
    fontSize={28}
    reveal="letter"
    dashLength={4}
    dashGap={2}
    specks={8}
    intro="none"
    clickKick
    guides={false}
    fontFamily=""
    letterSpacing={-0.02}
    accentColor="#B497CF"
    reach={120}
    softness={0.7}
    lineStyle="dashed"
    strokeWidth={1.2}
    speed={1}
    bounce={0.4}
    selection={false}
    labels={false}
    color="#D1D5DB"
    align="center"
    draggable={false}
    sweep
    className="h-full w-full"
  />
</div>
      </div>

      {/* Circular portfolio carousel */}
      <div className="landing-carousel relative z-10 mx-auto w-full max-w-6xl shrink-0">
        <div className="carousel-frame relative mx-auto h-[260px] w-full sm:h-[300px] md:h-[340px] lg:h-[360px] xl:h-[380px]">
          <CircularCarousel
            items={portfolioPages}
            preset="orbit"
            intro="rise"
            cardWidth={260}
            aspectRatio={0.85}
            gap={30}
            autoplay="drift"
            speed={18}
            direction="left"
            draggable
            momentum={0.6}
            snap
            pauseOnHover
            focusOnClick
            captions
            fadeColor="#08080c"
            depthFade={0.25}
            innerShade={0.15}
            cornerRadius={16}
            onItemClick={handleCarouselClick}
            className="h-full w-full"
          />
        </div>
      </div>

      {/* Explore prompt */}
      <div className="landing-prompt relative z-10 mt-2 flex w-full shrink-0 justify-center sm:mt-3">
        <ExplorePrompt />
      </div>

      {/* Responsive layout adjustments */}
      <style>{`
        .landing-page {
          box-sizing: border-box;
          margin-inline: auto;
        }

        .landing-page *,
        .landing-page *::before,
        .landing-page *::after {
          box-sizing: border-box;
        }

        .landing-intro,
        .landing-carousel,
        .landing-prompt {
          min-width: 0;
          max-width: 100%;
        }

        .carousel-frame {
          margin-inline: auto;
        }

        /* Mobile phones */
        @media (max-width: 640px) {
          .landing-page {
            min-height: 100svh;
            padding-top: 6rem;
            padding-bottom: 1.25rem;
            padding-left: 1rem;
            padding-right: 1rem;
            justify-content: center;
            align-items: center;
            text-align: center;
          }

          .landing-intro {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0.75rem;
            align-items: center;
            text-align: center;
          }

          .landing-intro > p:first-child {
            margin-bottom: 0.5rem;
            letter-spacing: 0.2em;
          }

          .landing-intro h1 {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
            font-size: clamp(1.8rem, 7vw, 2.5rem);
            line-height: 1.08;
            text-align: center;
          }

          .landing-intro h1 span {
            margin-top: 0.2rem;
          }

          .landing-intro > p:last-child {
            max-width: 22rem;
            margin-top: 0.5rem;
            padding-left: 0.25rem;
            padding-right: 0.25rem;
            font-size: 0.75rem;
            line-height: 1.25rem;
            text-align: center;
          }

          .landing-carousel {
            width: 100%;
            margin-left: auto;
            margin-right: auto;
          }

          .landing-carousel .carousel-frame {
            width: 100%;
            height: clamp(230px, 66vw, 285px);
            margin-left: auto;
            margin-right: auto;
          }

          .landing-prompt {
            width: 100%;
            margin-top: 0.25rem;
            margin-left: auto;
            margin-right: auto;
            justify-content: center;
            text-align: center;
          }
        }

        /* Short screens, including landscape phones */
        @media (max-height: 650px) {
          .landing-page {
            min-height: 100svh;
            justify-content: flex-start;
            padding-top: 5.75rem;
            padding-bottom: 0.5rem;
          }

          .landing-intro {
            margin-bottom: 0.25rem;
          }

          .landing-intro > p:last-child {
            display: none;
          }

          .landing-intro h1 {
            font-size: clamp(1.6rem, 4.5vh, 2.5rem);
            line-height: 1.05;
          }

          .landing-carousel .carousel-frame {
            height: clamp(175px, 35vh, 245px);
          }

          .landing-prompt {
            margin-top: 0;
          }
        }

        @media (max-height: 480px) {
          .landing-page {
            padding-top: 4.75rem;
          }

          .landing-intro > p:first-child {
            display: none;
          }

          .landing-intro h1 {
            font-size: clamp(1.4rem, 5vh, 1.9rem);
          }

          .landing-carousel .carousel-frame {
            height: 170px;
          }
        }

        /* Small phone screens */
        @media (max-width: 380px) and (min-height: 651px) {
          .landing-page {
            padding-top: 5.5rem;
          }

          .landing-intro h1 {
            font-size: 1.8rem;
          }

          .landing-carousel .carousel-frame {
            height: 235px;
          }
        }
      `}</style>
    </main>
  )
}

function PageWrapper({ children }) {
  return (
    <main className="relative z-10 min-h-[70vh] overflow-x-clip px-4 pt-24 sm:px-6 sm:pt-28 lg:px-10">
      {children}
    </main>
  )
}

/* The carousel is the landing page; no Hero component is used. */
function HomePage() {
  return <LandingPage />
}

function AboutPage() {
  return (
    <PageWrapper>
      <About />
    </PageWrapper>
  )
}

function SkillsPage() {
  return (
    <PageWrapper>
      <Skills />
    </PageWrapper>
  )
}

function ProjectsPage() {
  return (
    <PageWrapper>
      <Projects />
    </PageWrapper>
  )
}

function ExperiencePage() {
  return (
    <PageWrapper>
      <Experience />
    </PageWrapper>
  )
}

function EducationPage() {
  return (
    <PageWrapper>
      <Education />
    </PageWrapper>
  )
}

function CertificationsPage() {
  return (
    <PageWrapper>
      <Certifications />
    </PageWrapper>
  )
}

function ContactPage() {
  return (
    <PageWrapper>
      <Contact />
    </PageWrapper>
  )
}

function AppLayout() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#08080c] text-white">

      {/* Animated background */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <MicroSlats
          preset="swell"
          color="#A855F7"
          glintColor="#ffffff"
          backgroundColor="#08080c"
          interactive
          intro
          className="h-full w-full"
        />

        <div className="absolute inset-0 bg-[#08080c]/45" />
      </div>

      {/* Navigation */}
      <div className="relative z-50">
        <Navbar />
      </div>

      {/* Portfolio pages */}
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/education" element={<EducationPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>

      <Footer />
    </div>
  )
}

export default function App() {
  const [introComplete, setIntroComplete] = useState(false)

  return (
    <BrowserRouter>
      {!introComplete && (
        <LoadingIntro onComplete={() => setIntroComplete(true)} />
      )}

      <div
        className={`transition-opacity duration-700 ${
          introComplete
            ? 'opacity-100'
            : 'pointer-events-none h-0 overflow-hidden opacity-0'
        }`}
      >
        {introComplete && <AppLayout />}
      </div>
    </BrowserRouter>
  )
}

