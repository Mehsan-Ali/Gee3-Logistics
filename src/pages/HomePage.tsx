import AboutUs from '../components/Home/AboutUs'
import Banner from '../components/Home/Banner'
import Blogs from '../components/Home/Blogs'
import FAQ from '../components/Home/FAQ'
import Features from '../components/Home/Features'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Testimonials from '../components/Home/Testimonials'

const HomePage = () => {
  return (
    <>
      <Hero/> 
      <Services />
      <AboutUs />
      <Features />
      <Testimonials/>
      <Banner />
      <FAQ />
      <Blogs />
    </>
  )
}

export default HomePage
