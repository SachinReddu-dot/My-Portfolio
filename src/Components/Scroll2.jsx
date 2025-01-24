import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import {ScrollTrigger} from 'gsap/all'

const ScrollCompo0 = React.lazy(() => import ('./ScrollCompo'))
const ScrollCompo1 = React.lazy(() => import ('./ScrollCompo1'))


const Scroll2 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        gsap.to('.scroll1',{
            transform: "translateX(-300%)",
            duration:8,
            repeat: -1,
            ease: "none"
        }),
        gsap.to('.scroll2',{
            transform: "translateX(300%)",
            duration:10,
            repeat: -1,
            ease: "none"
        }),
        gsap.to(".tech",{
            scrollTrigger:{
                trigger: ".tech",
                start: "top 0",
                end: "bottom 100%",
                // markers: true,
                pin: ".hello",
                scrub: true
            }
        })
    })

  return (
    <>
        <div className='tech bg-black w-full relative'>
            <div className='w-full bg-black h-screen relative flex items-center justify-center'>
                <h1 className='hello absolute text-[30vw] max-sm:text-[40vw] font-[oswald]'>TECH</h1>
            </div>
            <div className='w-full h-screen flex items-center justify-center relative'>            
                {/* BACKEND */}
                <div className='w-full py-5 bg-blue-900 h-[60px] -rotate-1 max-sm:-rotate-6 flex items-center justify-center flex-nowrap whitespace-nowrap'>

                    <ScrollCompo0 name="MongoDB"/>

                    <ScrollCompo0 name="Nodejs"/>

                    <ScrollCompo0 name="Expressjs"/>

                    <ScrollCompo0 name="MongoDB"/>

                    <ScrollCompo0 name="Nodejs"/>

                    <ScrollCompo0 name="Expressjs"/>

                    <ScrollCompo0 name="MongoDB"/>

                    <ScrollCompo0 name="Nodejs"/>

                    <ScrollCompo0 name="Expressjs"/>

                </div>

                {/* FORNTEND */}
                <div className='w-full bg-red-900 py-5 mb-40 max-sm:mb-0 absolute max-sm:top-64 rotate-6 h-[60px] flex items-center justify-center flex-nowrap whitespace-nowrap'>

                    <ScrollCompo1 name="Reactjs"/>

                    <ScrollCompo1 name="TailwindCSS"/>

                    <ScrollCompo1 name="Nextjs"/>

                    <ScrollCompo1 name="Reactjs"/>

                    <ScrollCompo1 name="TailwindCSS"/>

                    <ScrollCompo1 name="Nextjs"/>

                    <ScrollCompo1 name="Reactjs"/>

                    <ScrollCompo1 name="TailwindCSS"/>

                    <ScrollCompo1 name="Nextjs"/>

                </div>

                {/* OTHERS */}
                <div className='w-full bg-green-900 py-5 absolute bottom-32 max-sm:bottom-64 max-sm:-rotate-3 h-[60px] flex items-center justify-center flex-nowrap whitespace-nowrap'>

                    <ScrollCompo0 name="GSAP"/>

                    <ScrollCompo0 name="RESTful APIs"/>

                    <ScrollCompo0 name="Redux"/>

                    <ScrollCompo0 name="GSAP"/>

                    <ScrollCompo0 name="RESTful APIs"/>

                    <ScrollCompo0 name="Redux"/>

                    <ScrollCompo0 name="GSAP"/>

                    <ScrollCompo0 name="RESTful APIs"/>

                    <ScrollCompo0 name="Redux"/>

                </div>
            </div>
            <div className='w-full h-[600px] relative'>
            </div>
        </div>
    </>
  )
}

export default Scroll2