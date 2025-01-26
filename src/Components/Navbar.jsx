import { useGSAP } from '@gsap/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'

import profile from '../assets/Project-images/ME..jpeg'

const Navbar = () => {

    function upar(){
        gsap.to(".menu",{
            transform: "translateY(0)",
            duration:1,
            ease: "power3"
        })
    }
    function niche(){
        gsap.to(".menu",{
            transform: "translateY(100%)",
            ease:"power3.out",
            duration:1
        })
    }

    useGSAP(()=>{
        gsap.from(".right",{
            duration:2.5,
            transform: "translateX(-100%)",
            ease: "none",
            repeat: -1,
        }),
        gsap.to(".left",{
            duration:2.5,
            transform: "translateX(-150%)",
            ease: "none",
            repeat: -1
        })
    })
    
  return (
    <>
        <div className='w-full relative font-[opensans]'>
            <i onClick={upar} class="fixed z-[995] right-20 max-sm:right-5 top-10 text-4xl max-sm:text-3xl ri-menu-3-fill hover:cursor-pointer"></i>
            <a href='src/assets/Sachin-Reddu-Resume.pdf' download="SachinResumeDownloaded" class="fixed h-10 max-sm:h-9 w-10 max-sm:w-9 z-[995] right-20 max-sm:right-4 top-24 bg-white rounded-full hover:cursor-pointer text-black flex items-center justify-center">
                <h3 className='text-2xl max-sm:text-lg font-semibold font-[oswald]'>CV</h3> 
            </a>
            <div className='menu z-[996] translate-y-[100%] h-screen bg-[rgb(1,32,105)] w-full fixed'>
                <i onClick={niche} class="fixed right-20 max-sm:right-5 top-10 text-4xl max-sm:text-3xl hover:cursor-pointer ri-xrp-line"></i>
                <div className='w-fit h-fit flex items-center gap-3 mx-20 my-10 max-sm:my-5 max-sm:mx-10'>
                    <a href="#homePage"><h1 onClick={niche} className='text-6xl max-sm:text-5xl font-semibold font-[oswald] w-fit'>Sachin<br/>Reddu</h1></a>
                    <div className='text-4xl max-sm:text-3xl flex flex-col gap-2'>
                        <a href="https://github.com/SachinReddu-dot"><i class="ri-github-fill"></i></a>
                        <a href="https://www.linkedin.com/"><i class="ri-linkedin-box-fill"></i></a>
                        <a href="https://twitter.com/"><i class="ri-twitter-x-fill"></i></a>
                    </div>
                </div>
                <div className='w-full h-fit mt-20 max-sm:mt-0 max-sm:my-10 relative font-bold text-7xl max-sm:text-4xl leading-[70px]'>
                    
                    <div onClick={niche} className='flex  items-center whitespace-nowrap py-5 max-sm:py-2 cursor-pointer'>
                        <a href='#contactPage' className='right px-7'>Contact</a>
                        <a href='#contactPage' className='right px-7'>Contact</a>
                        <a href='#contactPage' className='right px-7'>Contact</a>
                        <a href='#contactPage' className='right px-7'>Contact</a>    
                        <a href='#contactPage' className='right px-7'>Contact</a>                        
                        <a href='#contactPage' className='right px-7'>Contact</a>
                        <a href='#contactPage' className='right px-7'>Contact</a>
                        <a href='#contactPage' className='right px-7'>Contact</a>
                    </div>
                    <div className='h-1 max-sm:h-[2px] w-full bg-white'></div>
                    <div onClick={niche} className='flex items-start whitespace-nowrap py-5 max-sm:py-2 cursor-pointer'>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                        <a href='#aboutPage' className='left px-7 -translate-x-[50%]'>About</a>
                    </div>
                    <div className='h-1 max-sm:h-[2px] w-full bg-white'></div>
                    <div onClick={niche} className='flex items-start whitespace-nowrap py-5 max-sm:py-2 cursor-pointer'>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                    </div>

                    <div className='backdrop-blur-xl bg-blue-950/60 rounded-lg overflow-hidden w-[600px] h-[500px] absolute right-40 -top-20 flex flex-col gap-1 max-sm:gap-5 max-sm:w-full max-sm:relative max-sm:h-[400px] max-sm:right-0 max-sm:top-10'>
                        <div className='w-full h-[300px] max-sm:h-[220px]  flex items-center'>
                            <img className='w-full h-full object-center object-cover grayscale hover:grayscale-0 ' src={profile} alt="" />
                        </div>
                        <p className='text-xl mt-10 max-sm:mt-0 text-justify font-semibold px-7 max-sm:px-5 max-sm:text-base'>
                        Hello there, I'm Sachin - I design web that are user-friendly, beautiful & convert your target audience - Currently based in <span className='line-through opacity-70'>Thana</span> ,Thane India.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    </>
)
}

export default Navbar