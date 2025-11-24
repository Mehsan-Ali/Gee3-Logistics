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
        <section className='px-20'>
            {/* ------- Heading Section ------- */}
            <div className='text-center mt-20 mb-10 max-w-2xl mx-auto'>
                <h2 className='text-4xl font-bold'>Dedicated to delivering excellence in global logistics services </h2>
            </div>

            {/* ------- Services List Section ------- */}
            <div className='flex flex-wrap gap-4 justify-center'>
                {blogs.map((blogs) => (
                    <div key={blogs.id} className='flex-1 mb-8'>
                        <picture>
                            <img src={blogs.image} alt={blogs.title} className='w-full h-72 object-cover mb-4' />
                        </picture>
                        <span className='flex justify-between py-2 text-xs'>
                            <p className='bg-gray-100 px-2 py-1'>Efficiency</p>
                            <p className='bg-gray-100 px-2 py-1'>{new Date().toDateString()}</p>
                        </span>
                        <h3 className='text-lg font-semibold mb-2'>{blogs.title}</h3>
                        <p className='text-gray-700 text-sm'>{blogs.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Blogs