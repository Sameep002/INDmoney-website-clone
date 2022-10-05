import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import IndBlogs from './IndBlogs'
import Footer from './Footer'
import Awards from './Awards'
import Trusted from './Trusted'


const Landingpg = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Trusted/>
        <IndBlogs />
        <Awards />
        <Footer />
    </>
  )
}

export default Landingpg