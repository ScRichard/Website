import { useState } from 'react'
import Navbar from './components/navbar/Navbar.jsx'
import Hero from './components/containers/Hero.jsx'
import About from './components/containers/About.jsx'
import Projects from './components/containers/Projects.jsx'

const App = () => {
    return (
        <>
        <Navbar />
        <Hero/>
        <About/>
        <Projects/>
        </>
    )
};

export default App;
