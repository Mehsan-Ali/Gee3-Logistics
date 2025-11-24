import { Mail, MapPin, PhoneCall } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Footer Logo.png";
const Mainlinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/gallery" },
    { name: "Services", path: "/our-story" },
    { name: "Contact", path: "/contact-us" },
];

const QuickLinks = [
    // { name: "Company", path: "/" },
    { name: "Privacy Policy", path: "/" },
    { name: "Terms and Conditions", path: "/" },
    // { name: "About", path: "/about-us" },
];
const Followus = [

    {
        icon: PhoneCall,
        text: "+64 (0)21 315 9029",
        path: "https://www.facebook.com/p/Link-city-Whiskey-61553911774373/",
    },
    { icon: Mail, text: "info@gee3logistics.co.nz" },
    { icon: MapPin, text: "Auckland, New Zealand" },
];

const Footer = () => {
    return (
        <footer className="bg-black pt-20 pb-10 px-6 md:px-12 text-white">
            {/* Grid layout responsive */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
                {/* ---- Logo ---- */}
                <section className="flex flex-col gap-2 uppercase">
                    <img src={Logo} alt="" className="h-18 w-auto object-contain object-left" />
                    <p className="text-sm capitalize font-light tracking-wider leading-relaxed">
                        Thank you for exploring our world through the lens. From
                        capturing cherished memories to unveiling the beauty of the
                        everyday,
                    </p>
                </section>

                {/* ---- Main Links ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">
                        Main Links
                    </h6>
                    <hr className="my-5 border-gray-700" />
                    <ul className="space-y-4">
                        {Mainlinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className="hover:text-[#c1a372] transition-colors"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
                {/* ---- Quick Links ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">Company</h6>
                    <hr className="my-5 border-gray-700" />
                    <ul className="space-y-4">
                        {QuickLinks.map((item, index) => (
                            <li key={index}>
                                <a
                                    href={item.path}
                                    className="hover:text-[#c1a372] transition-colors"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* ---- Social Media ---- */}
                <section>
                    <h6 className="font-bold uppercase text-white">
                        Get in Touch
                    </h6>
                    <hr className="my-5 border-gray-700" />
                    <ul className="space-y-4">
                        {Followus.map((item, index) => (
                            <li key={index} className="flex items-center gap-2">
                                <NavLink to={`${item.path}`} className={"flex items-center gap-2"}>
                                    <item.icon
                                        strokeWidth={1.5}
                                        className="size-5 text-[#c1a372]"
                                    />
                                    <p>{item.text}</p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>

            {/* ---- Bottom ---- */}
            <div className="mt-16">
                <hr className="border-gray-700" />
                <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-3 pt-6 text-sm">
                    <p>
                        © {new Date().getFullYear()} Gee3 Logistics. All
                        rights reserved.
                    </p>
                    <p>
                        Designed by{" "}
                        <NavLink
                            target="_blank"
                            to="https://digitroncx.com/"
                            className="text-[#e2812a] font-medium"
                        >
                            DigitronCX
                        </NavLink>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;