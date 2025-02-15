import React from 'react'

const BannerSlider = () => {
  return (
    <div className='banner-slider'>
        <div className='relative flex justify-center items-center h-[50vh]'>
            <img src="https://via.placeholder.com/800x600" alt="" className='object-cover h-[50vh] w-full absolute top-0 left-0 -z-[1]'/>
        
        <div className='text-center'>
            <ul className='flex justify-center gap-2'>
                <li className='bg-stone-600 p-2 py-1 rounded-lg text-white font-bold text-sm'>Travel</li>
            </ul>
            <h2 className='px-1 mt-4 text-balance text-3xl text-primary'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h2>

            <ul className='flex gap-4 justify-center text-sm text-primary'>
                <li>loverboy</li>
                <li>May 22, 2023</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default BannerSlider