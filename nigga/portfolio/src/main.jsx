import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Nav from './component/Navbar.jsx'
import About from './component/About.jsx'
import Project from './component/projects.jsx'
import Footer from './component/Footer.jsx'
import Skill from './component/Skill.jsx'
import Services from './component/Services.jsx'
import Contact from './component/Contact.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Nav/>
    <About/>
    <Project/>
    <Skill/>
    <Services/>
    <Contact/>
    <Footer/>
  </StrictMode>
)
