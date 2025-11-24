import Banner from '../../assets/Hero.jpg'
import { NavLink } from 'react-router-dom'
const AboutHero = () => {
    return (
        <div
            className="relative bg-cover z-0 bg-center min-h-[250px] sm:h-[300px] flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${Banner})`, // Correct way to use the imported image
            }}
        >
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div>  */}
            <div className="relative z-10 text-center px-4">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">About Us</h1>
                <nav className="mt-2 sm:mt-4 text-xs sm:text-sm">
                    <ul className="flex items-center justify-center gap-1 sm:gap-2 text-gray-300 flex-wrap">
                        <li>
                            <a href="/" className="hover:text-white">
                                Home
                            </a>
                        </li>
                        <span>&gt;</span>
                        {location.pathname === '/about' && (
                            <li>
                                <NavLink to="/about" className="hover:text-white">
                                    About Us
                                </NavLink>
                            </li>
                        )}
                    </ul>
                </nav>
            </div>
        </div>

    )
}

export default AboutHero
