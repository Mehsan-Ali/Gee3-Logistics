import React from 'react'
import TransportImage from '../../assets/Services/transport.jpg'
const services = [
    {
        id: 1,
        image: TransportImage,
        title: 'Air & Sea Freight Booking',
        description: "Attention to Detail",
    },
    {
        id: 2,
        image: TransportImage,
        title: 'Trucking & Handling',
        description: "Expert Service",
    },
    {
        id: 3,
        image: TransportImage,
        title: 'Bookerage Clearance',
        description: "Customs Documentation",
    },
    {
        id: 4,
        image: TransportImage,
        title: 'Storage & Wearehousing',
        description: "Save & Secure",
    },
]
const Services = () => {
    return (
        <section className='py-0 sm:py-10 px-4 sm:px-6 md:px-10 lg:px-20'>
            {/* ------- Heading Section ------- */}
            <div className='text-center mt-10 md:mt-20 mb-6 md:mb-10 max-w-2xl mx-auto px-2'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Dedicated to delivering excellence in global logistics services </h2>
            </div>

            {/* ------- Services List Section ------- */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
                {services.map((service) => (
                    <div key={service.id} className='mb-4 hover:shadow-md transition-shadow duration-300 rounded-lg overflow-hidden'>
                        <picture>
                            <img src={service.image} alt={service.title} className='w-full h-56 sm:h-64 md:h-72 object-cover mb-4' />
                        </picture>
                        <div className='px-2'>
                            <h3 className='text-base md:text-lg font-semibold mb-2'>{service.title}</h3>
                            <p className='text-gray-700 text-sm'>{service.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services
