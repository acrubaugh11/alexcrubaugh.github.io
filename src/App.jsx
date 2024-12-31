import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import { Container } from 'react-bootstrap';
import NavBar from './components/navbar';
import HeroSection from './components/hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialsSection from './components/socials';
import AboutMe from './components/whoami';
import React, { useEffect, useState } from 'react';
import ProjectsSection from './components/projects';
import ContactSection from './components/contact';


function App() {

  const [mainContentHeight, setMainContentHeight] = useState(0);
  const [mainHeight, setHeight] = useState(0);

  useEffect(() => {
    const mainContentElement = document.querySelector('.main-content');
    const mainElement = document.querySelector('.hero-section');

    if (mainContentElement) {
      setMainContentHeight(mainContentElement.offsetHeight); // Set the height of the main content
    }

    if (mainElement) {
      setHeight(mainElement.offsetHeight);
    }

  }, []);

  let distance = mainContentHeight - mainHeight;

  return (

    <div className='App'>
      <header id='header'>
        <Container>
          <NavBar/>
        </Container>
      </header>
      <div>
        <main className='main-content'>
          <HeroSection className='hero-sec'/>
          <div className='social-sec'>
            <div  id='about-me-section'></div>
            <SocialsSection/>
          </div>
        </main>
      </div>
      <div>
          <div className='about-sec-fluid' >
            <AboutMe/>
          </div>
      </div>
      <div id='projects-section' className='projects-sec-fluid'>
        <ProjectsSection/>
      </div>
      <div id='contact-section' className='contact-sec'>
        <ContactSection></ContactSection>
      </div>

    </div>

  );
}

export default App
