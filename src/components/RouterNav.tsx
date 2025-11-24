import { Route, Routes } from 'react-router-dom'
import AboutUsPage from '../pages/AboutUsPage'
import HomePage from '../pages/HomePage'

const RouterNav = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
      </Routes>
    </div>
  )
}

export default RouterNav
