import HeroImage from '../../assets/Container.png';
const Hero = () => {
    return (
        <main className='sm:min-h-screen relative'>
            <section className='px-4 sm:px-6 md:px-10 lg:px-20 mx-auto flex flex-col items-center justify-center gap-2'>
                <div className='max-w-3xl flex flex-col gap-3 sm:gap-5 w-full'>
                    <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center mt-10 sm:mt-20 lg:ml-24'>Gee3 &nbsp; Logistics</h1>
                    <h6 className='ml-auto w-fit py-2 px-4 bg-[#e2812a] text-white font-bold text-lg sm:text-xl md:text-2xl'>Seamless Delivery</h6>
                </div>
                <p className='max-w-lg text-gray-700 mr-auto text-xs sm:text-sm leading-6 sm:leading-7 px-2 sm:px-0'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laboriosam omnis odit fugiat nulla dicta. Est aspernatur beatae harum nobis voluptatum eum quasi perspiciatis pariatur. Sequi, fugit? Sint, tempora voluptatibus.</p>
            </section>
            <section className='absolute -top-10 -z-5 right-1/2 translate-x-1/2 w-full hidden sm:flex justify-center'>
                <img src={HeroImage} alt="" className='max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg animate-float' />
            </section>
            <div className='p-4 sm:p-6 md:p-10 lg:p-20 -z-10 min-h-fit md:h-85 w-full bg-[#f2f2f2] sm:absolute mt-10 flex flex-col md:flex-row items-center md:items-end justify-center md:justify-between gap-4 md:gap-10'>
                <button className='bg-slate-900 text-white px-4 py-2 font-semibold hover:bg-slate-800 transition-colors w-full sm:w-auto'>
                    Enquire Now
                </button>
                <p className='w-full md:w-sm text-gray-700 text-xs sm:text-sm leading-6 sm:leading-7 text-center md:text-right'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quod eos porro tempora porro tempora porro.
                </p>
            </div>
        </main>
    )
}

export default Hero
