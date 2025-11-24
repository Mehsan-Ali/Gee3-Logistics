import React from 'react'
import AboutHero from '../components/About/AboutHero'
import AboutUs from '../components/Home/AboutUs'
import Features from '../components/Home/Features'
import Banner from '../components/Home/Banner'
import FAQ from '../components/Home/FAQ'
import Blogs from '../components/Home/Blogs'

const AboutUsPage = () => {
  return (
    <>
        <AboutHero />
        <AboutUs/>
        <Features />
        <Banner />
        <FAQ />
        <Blogs />
    </>
  )
}

export default AboutUsPage
