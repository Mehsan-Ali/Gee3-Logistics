import React from 'react'
import TransportImage from '../../assets/Services/transport.jpg'

const blogs = [
    {
        id: 1,
        image: TransportImage,
        title: 'Reducing Costs with Efficient Logistics Practices',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 2,
        image: TransportImage,
        title: 'Sustainable Practices in Modern Logistics Operations',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
        id: 3,
        image: TransportImage,
        title: 'Leveraging Machine Learning for Logistics Optimization',
        description: "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
]
const Blogs = () => {
    return (
        <section className='px-4 sm:px-6 md:px-10 lg:px-20'>
            {/* ------- Heading Section ------- */}
            <div className='text-center mt-10 md:mt-20 mb-6 md:mb-10 max-w-2xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Dedicated to delivering excellence in global logistics services </h2>
            </div>

            {/* ------- Blog List Section ------- */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
                {blogs.map((blogs) => (
                    <div key={blogs.id} className='mb-8'>
                        <picture>
                            <img src={blogs.image} alt={blogs.title} className='w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover mb-4 rounded-md' />
                        </picture>
                        <span className='flex flex-wrap items-center justify-between gap-2 py-2 text-[10px] sm:text-xs'>
                            <p className='bg-gray-100 px-2 py-1'>Efficiency</p>
                            <p className='bg-gray-100 px-2 py-1'>{new Date().toDateString()}</p>
                        </span>
                        <h3 className='text-base md:text-lg font-semibold mb-2'>{blogs.title}</h3>
                        <p className='text-gray-700 text-sm'>{blogs.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs
