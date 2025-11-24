import { MapPin } from 'lucide-react'
import React from 'react'

const data = [
    {
        title: "Location",
        description: "Auckland, New Zealand"
    },
    {
        title: "Phone",
        description: "+64 (0)21 315 9029"
    },
    {
        title: "Email",
        description: "info@gee3logistics.co.nz"
    },
]
const ContactDeatils = () => {
    return (
        <div className='flex justify-between items-center p-10'>
            {
                data.map((item, index) => (
                    <div key={index} className="mb-8 flex-1 bg-white shadow-2xl border border-gray-200 rounded-lg mx-4 text-center">
                        <div className='flex justify-end -mr-2 bg-[#e2812a] w-fit h-fit ml-auto text-white p-4 rounded-full'>
                            <MapPin/>
                        </div>
                        <div className='pb-10'>
                            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default ContactDeatils