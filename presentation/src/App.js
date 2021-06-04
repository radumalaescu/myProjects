import React, { useRef } from 'react'
import Aboutme from './components/Aboutme/Aboutme';
import Header from './components/Header/Header'
import Portofolio from './components/Portofolio/Portofolio';
import Contact from './Contact/Contact';
import './App.css'

const App = () => {
  const headerRef = useRef();
  const aboutRef = useRef();
  const portofolioRef = useRef();
  const contactRef = useRef();

  const scrollToHeader = () => {
    headerRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToPortofolio = () => {
    portofolioRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    contactRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="App">
      <Header 
        ref={headerRef} 
        scrollToHeader={scrollToHeader} 
        scrollToAbout={scrollToAbout} 
        scrollToPortofolio={scrollToPortofolio}
        scrollToContact={scrollToContact} />
      <Aboutme ref={aboutRef} />
      <Portofolio ref={portofolioRef} />
      <Contact ref={contactRef}/>
    </div>
  );
}

export default App;
