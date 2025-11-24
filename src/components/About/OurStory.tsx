import { Check } from 'lucide-react';
import ImageOne from '../../assets/industrial-port-container-yard.jpg';
const OurStory = () => {
    return (
        <main className="bg-white py-16 px-6 lg:px-10">
            <section className="mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left Content */}
                    <div className="space-y-6">
                        <h4 className="text-orange-500 font-medium text-sm tracking-wider">
                            //- Our Story
                        </h4>

                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                            The evolution of our logistics expertise and passion.
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

                        </div>
                    </div>

                    {/* Right Images Grid */}
                    <section className='flex-1'>
                        <picture>
                            <img src={ImageOne} alt="" className='w-full h-full object-cover' />
                        </picture>
                    </section>
                </div>
            </section>
        </main>
    );
};

export default OurStory;