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
        <section className='py-10 px-20'>
            {/* ------- Heading Section ------- */}
            <div className='text-center mt-20 mb-10 max-w-2xl mx-auto'>
                <h2 className='text-4xl font-bold'>Dedicated to delivering excellence in global logistics services </h2>
            </div>

            {/* ------- Services List Section ------- */}
            <div className='flex flex-wrap gap-4 justify-center'>
                {services.map((service) => (
                    <div key={service.id} className='flex-1 mb-8 hover:shadow-md transition-shadow duration-300'>
                        <picture>
                            <img src={service.image} alt={service.title} className='w-full h-72 object-cover mb-4' />
                        </picture>
                        <h3 className='text-lg font-semibold mb-2'>{service.title}</h3>
                        <p className='text-gray-700'>{service.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services