import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react'
import FaqImage from '../../assets/FaqImage.png'
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
const FaqSection = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const toggleShow = (id: number) => {
        setActiveFaq((prevId) => (prevId === id ? null : id)); // Toggle the active FAQ
    };
    return (
        <main className="px-10 pb-10 ">
            {/* ------- Heading Section ------- */}
            <section className='text-center mt-20 mb-10 max-w-2xl mx-auto'>
                <h2 className='text-4xl font-bold'>Frequently asked question</h2>
            </section>
            <div className="flex flex-col gap-10">
                <section className="flex-1">
                    <img src={FaqImage} alt="" className="h-72 w-full object-cover" />
                </section>
                <section className="flex flex-1 gap-5">
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className={`flex gap-x-5 p-5 justify-between border border-[#e2812a] pb-6 items-start cursor-pointer w-full mx-auto ${activeFaq === item.id
                                    ? "bg-[#e2812a] transition-all duration-1000"
                                    : "bg-gray-100 text-black transition-all duration-1000"
                                    }`}
                                onClick={() => toggleShow(item.id)}
                            >
                                <span className="order-1">
                                    {activeFaq === item.id ? (
                                        <ChevronUp size={22} />
                                    ) : (
                                        <ChevronDown size={22} />
                                    )}
                                </span>
                                <div className="">
                                    <p
                                        className={`font-semibold uppercase text-sm sm:text-base ${activeFaq === item.id
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
                                        <p className="pt-2 text-black">{item.answer}</p>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="space-y-4">
                        {faqData.map((item) => (
                            <div
                                key={item.id}
                                className={`flex gap-x-5 p-5 justify-between border border-[#e2812a] pb-6 items-start cursor-pointer w-full mx-auto ${activeFaq === item.id
                                    ? "bg-[#e2812a] transition-all duration-1000"
                                    : "bg-gray-100 text-black transition-all duration-1000"
                                    }`}
                                onClick={() => toggleShow(item.id)}
                            >
                                <span className="order-1">
                                    {activeFaq === item.id ? (
                                        <ChevronUp size={22} />
                                    ) : (
                                        <ChevronDown size={22} />
                                    )}
                                </span>
                                <div className="">
                                    <p
                                        className={`font-semibold uppercase text-sm sm:text-base ${activeFaq === item.id
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
                                        <p className="pt-2 text-black">{item.answer}</p>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </main>

    )
}

export default FaqSection