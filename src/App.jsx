import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Skills from './sections/Skills.jsx'
import Projects from './sections/Projects.jsx'
import Certifications from './sections/Certifications.jsx'
import Experience from './sections/Experience.jsx'
import Education from './sections/Education.jsx'
import Contact from './sections/Contact.jsx'
// import ExplorePrompt from './components/ExplorePrompt.jsx'

function HomePage() {
return (
<> <Hero />  <About /> <Skills /> <Projects /> <Contact /> 
</>
)
}

function CertificationsPage() {
return ( <main className="min-h-screen pt-20"> <Certifications /> </main>
)
}

function ExperiencePage() {
return ( <main className="min-h-screen pt-20"> <Experience /> </main>
)
}

function EducationPage() {
return ( <main className="min-h-screen pt-20"> <Education /> </main>
)
}

export default function App() {
return ( <BrowserRouter> <div className="min-h-screen overflow-x-clip bg-[#08080c] text-white"> <Navbar />

    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/certifications" element={<CertificationsPage />} />
      <Route path="/experience" element={<ExperiencePage />} />
      <Route path="/education" element={<EducationPage />} />
    </Routes>
  </div>
</BrowserRouter>

)
}
