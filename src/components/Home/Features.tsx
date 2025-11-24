import { Truck } from 'lucide-react'
import React from 'react'

const featuresList = [
    {
        id: 1,
        icon: <Truck />,
        title: 'Reliable Delivery',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, rem!',
    },
    {
        id: 2,
        icon: <Truck />,
        title: 'Advanced Technology',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, rem!',
    },
    {
        id: 3,
        icon: <Truck />,
        title: 'Global Research',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, rem!',
    },
    {
        id: 4,
        icon: <Truck />,
        title: 'Customized Solutions',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Inventore, rem!',
    },
]
const Features: React.FC = () => {
    return (
        <div className='px-4 sm:px-6 md:px-10 pb-10'>
            {/* ------- Heading Section ------- */}
            <section className='text-center mt-10 md:mt-20 mb-6 md:mb-10 max-w-2xl mx-auto'>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold'>Why our logistics solutions are your best choice.</h2>
            </section>

            {/* ------- Features List Section ------- */}
            <section className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6 md:pt-10'>
                {
                    featuresList.map((feature) => (
                        <div key={feature.id} className='flex flex-col justify-center items-center text-center gap-5'>
                            <div className='bg-[#e2812a] text-white p-4 sm:p-5 rounded-lg flex flex-col items-center w-fit justify-center gap-4 mx-auto'>
                                {feature.icon}
                            </div>
                            <div className='space-y-2'>
                                <h5 className='font-bold text-base md:text-lg'>{feature.title}</h5>
                                <p className='text-gray-700 text-sm'>{feature.description}</p>
                            </div>
                        </div>
                    ))
                }
            </section>
        </div>
    )
}

export default Features
