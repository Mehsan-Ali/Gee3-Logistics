import React from 'react'
import BannerImag from '../../assets/Banner.png'
const Banner = () => {
  return (
    <div className='px-0 sm:px-4 md:px-10 lg:px-20'>
        <img src={BannerImag} alt="" className='w-full h-auto object-cover' />
    </div>
  )
}

export default Banner
