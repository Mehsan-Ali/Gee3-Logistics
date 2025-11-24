import HeroImage from '../../assets/Container.png';
const Hero = () => {
    return (
        <main className='min-h-screen relative'>
            <section className='px-20 mx-auto flex flex-col items-center justify-center gap-2'>
                <div className='max-w-3xl flex flex-col gap-5 w-full'>
                    <h1 className='text-7xl font-bold text-center mt-20 ml-24'>Gee3 &nbsp; Logistics</h1>
                    <h6 className='ml-auto w-fit py-2 px-4 bg-[#e2812a] text-white font-bold text-2xl'>Seamless Delivery</h6>
                </div>
                <p className='max-w-lg text-gray-700 mr-auto text-sm leading-7'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias laboriosam omnis odit fugiat nulla dicta. Est aspernatur beatae harum nobis voluptatum eum quasi perspiciatis pariatur. Sequi, fugit? Sint, tempora voluptatibus.</p>
            </section >
            <section className='absolute -top-10 -z-5 right-1/2 translate-x-1/2'>
                <img src={HeroImage} alt="" className='max-w-lg animate-float' />
            </section>
            <div className='p-20 -z-10 h-85 w-full bg-[#f2f2f2] absolute mt-10 flex items-end justify-between gap-10'>

                <button className='bg-slate-900 text-white px-4 py-2 font-semibold'>Enquire Now</button>

                <p className='w-sm text-gray-700 text-sm leading-7'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis quod eos porro tempora porro tempora porro.
                </p>
            </div >
        </main>
    )
}

export default Hero