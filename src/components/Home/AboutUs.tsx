import { Check, ArrowRight } from 'lucide-react';
import ImageOne from '../../assets/industrial-port-container-yard.jpg';
const AboutUs = () => {
    return (
        <main className="bg-white py-16 px-6 md:px-12 lg:px-20">
            <section className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <div className="text-orange-500 font-medium text-sm tracking-wider">
              //- About us
                        </div>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            Innovative Logistics, Global Reach
                        </h1>

                        <div className="space-y-4 text-gray-600">
                            <p>
                                Them ipsum dolor sit amet consectetur. Nibh enim ullamcorper eu nullam est
                                maecenas ulctetur. Nibh enim ullamcorper ermy.
                            </p>

                            <p>
                                Nunc lobortis elementum lectus arcu amet morbi. Sem netus sit et
                                vitae molestie id lacus ultricies dui at.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-900 font-medium">Safety and Compliance</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-900 font-medium">Continuous Improvement</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-900 font-medium">Innovative Technology</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-6 h-6 rounded-full bg-orange-500 flex items-center justify-center shrink-0">
                                    <Check className="w-4 h-4 text-white" strokeWidth={3} />
                                </div>
                                <span className="text-gray-900 font-medium">Quality Control System</span>
                            </div>
                        </div>

                        <button className="flex items-center gap-2 text-gray-900 font-semibold pt-4 group">
                            <span className="border-b-2 border-orange-500 pb-1">Explore More</span>
                            <ArrowRight className="w-5 h-5 text-orange-500 transition-transform group-hover:translate-x-1" />
                        </button>
                    </div>

                    {/* Right Images Grid */}
                    <section className="relative">
                        <div className='flex justify-between'>
                            <picture>
                                <img src={ImageOne} alt="" className='max-w-xl xl:max-w-xs h-80 object-cover' />
                            </picture>
                            <div className='flex flex-col items-center gap-2 pt-10'>
                                <p className='text-4xl text-[#e2812a] font-bold'>30+</p>
                                <h6>Years of Experience</h6>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='flex flex-col items-center gap-2 pt-10'>
                                <p className='text-4xl text-[#e2812a] font-bold'>500K+</p>
                                <h6>We have happy customer</h6>
                            </div>
                            <picture className='-mt-40'>
                                <img src={ImageOne} alt="" className='max-w-xs h-80 object-cover' />
                            </picture>
                        </div>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default AboutUs;