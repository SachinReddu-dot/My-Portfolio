import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

import image1 from '../assets/Project-images/DUO-SS.png'
import image2 from '../assets/Project-images/TwogoodSS.png'
import image3 from '../assets/Project-images/AnzoportSS.png'
import image4 from '../assets/Project-images/OchiSS.png'
import image5 from '../assets/Project-images/supreme.png'
import image6 from '../assets/Project-images/ThirtysixstudioSS.png'
import image7 from '../assets/Project-images/CareTrack.png'

import font1 from '../assets/Font/Lora/Lora-VariableFont_wght.ttf'


const Page3 = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
            document.querySelectorAll(".elem").forEach((elem) => {
            let image = elem.querySelector("img");
            let tl = gsap.timeline();
        
            let xTransform = gsap.utils.random(-100, 100);

            gsap.from(".flu",{
                transform: "translateX(10%)",
                display: "hidden",
                duration:2
            }),

            tl
                .set(image, {
                    transformOrigin: `${xTransform < 0 ? 0 : '100%'}`
                })
        
                .to(image,{
                    scale: 0,
                    ease: 'none',
                    duration:1,
                    scrollTrigger: {
                        trigger: image,
                        // markers: true,
                        start: 'top top',
                        bottom: "bottom top",
                        scrub: true
                    }
                })
                .to(elem,{
                    xPercent: xTransform,
                    ease:"none",
                    scrollTrigger: {
                        trigger: image,
                        // markers: true,
                        start: 'top bottom',
                        bottom: "bottom top",
                        scrub: true
                    }
                })
        })
    })

  return (
    <>
        <div id='homePage' className="bg-[rgb(1,32,105)] w-full relative text-white">
            <h1 className='text-lg opacity-10 font-semibold absolute w-full flex items-center justify-center top-7'>||जय श्री राम||</h1>
            <div className="grid grid-cols-8 grid-rows-13 gap-2 max-sm:gap-7 overflow-x-hidden">
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 1, "--c": 1}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image1} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 1, "--c": 7}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image3} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 2, "--c": 2}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image4} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 2, "--c": 7}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image6} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1 max-sm:hidden" style={{"--r": 3, "--c": 2}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image2} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 3, "--c": 8}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image5} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 4, "--c": 1}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image1} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 4, "--c": 6}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image2} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 5, "--c": 7}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image7} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 5, "--c": 2}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image6} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 6, "--c": 1}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image2} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 6, "--c": 5}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image5} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 7, "--c": 2}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image4} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 7, "--c": 6}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image6} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 8, "--c": 8}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image1} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 8, "--c": 4}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image2} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 9, "--c": 3}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image5} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 9, "--c": 7}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image3} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 10, "--c": 1}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image7} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 10, "--c": 5}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image4} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 11, "--c": 8}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image1} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 11, "--c": 4}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image2} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 12, "--c": 3}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image5} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 12, "--c": 7}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image3} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 13, "--c": 1}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image6} alt="" /></div>
                <div className="elem rounded-xl overflow-hidden w-[240px] max-sm:w-[100px] h-fit max-sm:h-[100px] max-sm:gap-5 col-span-1 row-span-1" style={{"--r": 13, "--c": 5}}><img className="w-full h-full object-contain max-sm:object-cover max-sm:object-left" src={image7} alt="" /></div>
            </div>
            <div className="w-full h-full leading-[70px] max-sm:leading-8 fixed top-0 left-0 flex flex-col items-center justify-center mix-blend-difference">
                <h1 className="font-[oswald] text-[77px] max-sm:text-4xl mb-5 max-sm:mb-2 font-semibold">Front-End Developer</h1>
                <h1 className="text-2xl max-sm:text-lg font-medium font-sans tracking-tight">SACHIN REDDU</h1>
            </div>
        </div>
    </>
  )
}

export default Page3
