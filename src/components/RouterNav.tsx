import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'
import HomePage from '../pages/HomePage'
import ServicesPage from '../pages/ServicesPage'
import ContactUsPage from '../pages/ContactUsPage'
import QuotePage from '../pages/QuotePage'
import FAQPage from '../pages/FAQPage'
import BlogPage from '../pages/BlogPage'

const RouterNav = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/quote" element={<QuotePage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  )
}

export default RouterNav
