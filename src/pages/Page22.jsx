import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import image1 from '../assets/Project-images/ThirtysixstudioSS.png'
import image3 from '../assets/Project-images/DUO-SS.png'
import image2 from '../assets/Project-images/OchiSS.png'

const More = React.lazy(() => import('../Components/More'))
const Mobilemove = React.lazy(() => import('../Components/Mobilemove'))


const Page22 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to(".page22",{
            scrollTrigger:{
                trigger: ".work",
                start: "top top",
                end: "bottom 100%",
                // markers: true,
                scrub: true,
                pin: ".page22"
            }
        })
    })


  return (
    <>
        <div id='projectPage' className='work w-full relative bg-black'>
            <div className='page22 h-screen w-full absolute top-0 left-0 flex items-center justify-center'>
                <h1 className='text-[25vw] font-[oswald]'>PROJECTS</h1>
            </div>
            <div className='w-full h-screen'>
            </div>

            <div className='w-full h-screen relative'>
                <div className='absolute left-40 max-sm:left-10'>
                    <div className='h-[500px] max-sm:h-[370px] w-[300px] max-sm:w-[200px] bg-red-900 rounded-md overflow-hidden'>
                        <img className='w-full h-full object-cover object-left' src={image1} alt="" />
                    </div>
                    <h1 className='text-3xl max-sm:text-2xl font-[opensans] mix-blend-difference mt-3'>Thirtysixstudio</h1>
                </div> 
            </div>
            <div className='w-full h-screen relative'>
                <div className='absolute right-24 -top-60'>
                    <div className='h-[500px] max-sm:h-[370px] w-[300px] max-sm:w-[200px] bg-red-900 rounded-md overflow-hidden'>
                        <img className='w-full h-full object-cover object-left' src={image2} alt="" />
                    </div>
                    <h1 className='text-3xl max-sm:text-2xl mt-3 font-[opensans] mix-blend-difference'>Ochi</h1>
                </div>
            </div>
            <div className='w-full h-screen relative'>
                <div className='absolute -top-60 max-sm:-top-[500px] left-[27%] max-sm:left-20'>
                    <div className='h-[500px] max-sm:h-[370px] w-[300px] max-sm:w-[200px] overflow-hidden bg-red-900 rounded-md'>
                        <img className='w-full h-full object-cover object-left' src={image3} alt="" />
                    </div>
                    <h1 className='text-3xl max-sm:text-2xl mt-3 font-[opensans] mix-blend-difference'>DUO</h1>
                </div>
            </div>

            <More/>
            <div className='w-full h-screen max-sm:hidden'>
            </div>
            <Mobilemove/>
            <div className='w-full h-[400px] relative lg:hidden'>
            </div>
        </div>
    </>
  )
}

export default Page22