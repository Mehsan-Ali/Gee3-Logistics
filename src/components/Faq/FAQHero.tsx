import Banner from '../../assets/Hero.jpg'
import { NavLink } from 'react-router-dom'
const FAQHero = () => {
    return (
        <div
            className="relative bg-cover z-0 bg-center h-[300px] flex items-center justify-center text-white"
            style={{
                backgroundImage: `url(${Banner})`, // Correct way to use the imported image
            }}
        >
            {/* <div className="absolute inset-0 bg-black bg-opacity-10"></div>  */}
            <div className="relative z-10 text-center">
                <h1 className="text-4xl font-bold">Frequently asked question</h1>
                <nav className="mt-4 text-sm">
                    <ul className="flex items-center justify-center space-x-2 text-gray-300">
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

export default FAQHero