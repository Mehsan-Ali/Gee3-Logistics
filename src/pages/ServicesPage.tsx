import Banner from '../components/Home/Banner'
import FAQ from '../components/Home/FAQ'
import Features from '../components/Home/Features'
import Services from '../components/Home/Services'
import ServiceHero from '../components/Services/ServiceHero'

const ServicesPage = () => {
  return (
    <>
      <ServiceHero /> 
      <Services />
      <Features />
      <FAQ />
      <Banner />
    </>
  )
}

export default ServicesPage
