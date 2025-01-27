import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Footer = () => {
  return (
    <>
        <div className='w-full h-[150px] relative bg-black flex flex-col items-center justify-start max-sm:mt-[350px]'>
            <div className='flex gap-3 mb-3 text-3xl text-gray-400 mt-5'>
                <a href="https://github.com/SachinReddu-dot"><i class="ri-github-fill hover:text-white"></i></a>
                <a href="https://linkedin.com/in/sachin-reddu-b324422aa"><i class="ri-linkedin-box-fill hover:text-white"></i></a>
                <a href="https://twitter.com/"><i class="ri-twitter-x-fill hover:text-white"></i></a>
            </div>
            <div className='flex items-center gap-1 text-gray-400'>
                <i class="text-2xl ri-copyright-line"></i>
                <h1 className='font-[oswald] uppercase tracking-wide text-lg max-sm:text-sm font-semibold'>made with <span className='text-white'>skills</span> and animation by <span className='text-white'>sachin reddu</span></h1>
            </div>
            <h1 className='absolute bottom-0 text-lg font-semibold opacity-20'>||जय श्री राम||</h1>
        </div>
    </>
)
}

export default Footer