import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import '../../App.css'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'

const testimonilasData = [
    {
        id: 1,
        name: 'David Lee',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
        text: 'Their team has helped us streamline our supply chain with innovative solutions and unmatched efficiency.',
    },
    {
        id: 2,
        name: 'Sarah Johnson',
        image: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=400&h=400&fit=crop',
        text: 'Exceptional service and attention to detail. They truly understand our logistics needs.',
    },
    {
        id: 3,
        name: 'Michael Smith',
        image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=400&h=400&fit=crop',
        text: 'Reliable and efficient. Our go-to logistics partner for all our shipping requirements.',
    },
]
const Testimonials: React.FC = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })

    const scrollPrev = () => {
        if (emblaApi) emblaApi.scrollPrev()
    }

    const scrollNext = () => {
        if (emblaApi) emblaApi.scrollNext()
    }
    return (
        <main className='px-4 sm:px-6 md:px-10 lg:px-20 pb-10'>

            {/* ------- Heading Section ------- */}
            <section className='text-center mt-10 md:mt-20 mb-6 md:mb-10 max-w-2xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>See what our clients say about our services.</h2>
            </section>
            <div className="embla" ref={emblaRef}>
                <div className="embla__container">
                    {
                        testimonilasData.map((testimonial) => (
                            <div className="embla__slide" key={testimonial.id}>
                                <div className="flex items-center justify-center">
                                    <div className="flex-1 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-6xl w-full px-2 md:px-0">
                                        {/* Profile Image Section */}
                                        <div className="relative shrink-0">
                                            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 rounded-full overflow-hidden bg-sky-400/80 mx-auto">
                                                <img
                                                    src={testimonial.image}
                                                    alt="Profile"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        </div>

                                        {/* Testimonial Content Section */}
                                        <div className="flex-1 w-full">
                                            <div className="bg-gray-100 px-4 sm:px-6 md:px-10 pt-6 md:pt-8 pb-4 relative border-l-4 border-orange-600 shadow-md">
                                                {/* Name */}
                                                <h3 className="text-lg md:text-xl border-b border-gray-400 pb-3 md:pb-4 font-bold text-gray-900 mb-4 md:mb-6 text-center md:text-left">
                                                    {testimonial.name}
                                                </h3>

                                                {/* Testimonial Text */}
                                                <p className="text-black text-sm md:text-lg font-bold leading-relaxed mb-6 md:mb-8 text-center md:text-left">
                                                    {testimonial.text}
                                                </p>

                                                {/* Quote Icon */}
                                                <div className="flex justify-end">
                                                    <svg
                                                        className="w-10 h-10 md:w-16 md:h-16 text-orange-600"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                    >
                                                        <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                {/* Navigation Buttons */}
                <div className='flex justify-center gap-4 my-8'>
                    <button
                        onClick={scrollPrev}
                        className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg cursor-pointer'
                        aria-label='Previous testimonial'
                    >
                        <ChevronLeftIcon />
                    </button>
                    <button
                        onClick={scrollNext}
                        className='w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-400 text-white flex items-center justify-center hover:bg-gray-700 transition-colors shadow-lg cursor-pointer'
                        aria-label='Next testimonial'
                    >
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </main>
    )
}
export default Testimonials
