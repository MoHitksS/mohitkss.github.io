import React from 'react'
import About from '../Components/About'
import ContactUs from '../Components/ContactUs'
import Navbar from '../Components/Navbar'
import Projects from '../Components/Projects'
import Skills from '../Components/Skills'

const Homepage = () => {
    return (
        <>
            <Navbar />
            <About />
            <Skills/>
            <Projects/>
            <ContactUs/>
        </>
    )
}

export default Homepage