import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react'
import FaqImage from '../../assets/FaqImage.png'
import { NavLink } from "react-router-dom";
const faqData = [
    {
        id: 1,
        question: "What shipping services do you offer?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        question:
            "Do you offer international shipping?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        question: "How can I track my shipment status?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 4,
        question:
            "What are the shipping options available?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 5,
        question:
            "How do I handle damaged goods claims?",
        answer: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];
const FAQ = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleShow = (id: number) => {
        setActiveFaq((prevId) => (prevId === id ? null : id)); // Toggle the active FAQ
    };
    return (
        <main className="px-4 sm:px-6 md:px-10 pb-10">
            {/* ------- Heading Section ------- */}
            <section className='text-center mt-10 md:mt-20 mb-6 md:mb-10 max-w-2xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Why our logistics solutions are your best choice.</h2>
            </section>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
                <section className="flex-1 hidden md:block">
                    <img src={FaqImage} alt="FAQ" className="w-full h-auto" />
                </section>
                <section className="flex flex-1 flex-col gap-5">
                    {faqData.map((item) => (
                        <div
                            key={item.id}
                            className={`flex gap-x-4 sm:gap-x-5 p-3 sm:p-5 justify-between border border-[#e2812a] pb-4 sm:pb-6 items-start cursor-pointer w-full ${activeFaq === item.id
                                ? "bg-[#e2812a] transition-all duration-1000"
                                : "bg-gray-100 text-black transition-all duration-1000"
                                }`}
                            onClick={() => toggleShow(item.id)}
                        >
                            <span className="order-1 shrink-0">
                                {activeFaq === item.id ? (
                                    <ChevronUp size={18} className="sm:w-6 sm:h-6" />
                                ) : (
                                    <ChevronDown size={18} className="sm:w-6 sm:h-6" />
                                )}
                            </span>
                            <div className="flex-1">
                                <p
                                    className={`font-semibold uppercase text-xs sm:text-sm md:text-base ${activeFaq === item.id
                                        ? "text-black "
                                        : "text-black"
                                        }`}
                                >
                                    {item.question}
                                </p>
                                <motion.div
                                    initial={{ opacity: 0, y: -20, height: 0 }}
                                    animate={
                                        activeFaq === item.id
                                            ? { opacity: 1, y: 0, height: "auto" }
                                            : { opacity: 0, y: -20, height: 0 }
                                    }
                                    transition={{
                                        duration: 0.3,
                                        ease: "easeInOut",
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="pt-2 text-black text-xs sm:text-sm">{item.answer}</p>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                    <NavLink to={'/faq'}>
                        <button className="bg-[#e2812a] cursor-pointer w-fit mr-auto px-6 sm:px-8 py-2 text-white text-sm sm:text-base">
                            View All
                        </button>
                    </NavLink>
                </section>
            </div>
        </main>

    )
}

export default FAQ
