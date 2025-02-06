import { useGSAP } from '@gsap/react'
import React from 'react'
import 'remixicon/fonts/remixicon.css'
import gsap from 'gsap'
import { useState } from 'react'

import profile from '../assets/Project-images/ME..jpeg'
import CV from '../assets/Sachin-Reddu-Resume.pdf'

const Navbar = () => {

    const [menu, setMenu] = useState(true)

    function toggleMenu(){
        setMenu(!menu)
    }

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
        <div className='w-fullrelative font-sans'>
                {/* <div className='bg-black h-32 w-16 fixed z-[995] right-12 top-5 rounded-full'>
                    <div onChange={toggleMenu} className='fixed text-sm right-16 max-sm:right-5 top-7 z-[998]'>
                        <label onClick={menu ? upar : niche} class="hamburger">
                        <input type="checkbox"/>
                        <svg viewBox="0 0 32 32">
                            <path class="line2 line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path class="line2" d="M7 16 27 16"></path>
                        </svg>
                        </label>
                    </div>
                    <a href={CV} download="SachinResumeDownloaded.pdf" class="fixed z-[995] right-16 max-sm:right-4 top-[75px] flex items-center justify-center">
                        <button class="download-button">
                        <div class="docs">
                            <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="css-i6dzq1"
                            >
                            <path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            ></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            
                        </div>
                        <div class="download">
                            <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="css-i6dzq1"
                            >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                        </button>
                    </a>
                </div> */}
                <div className='bg-black h-32 w-12 gap-3 px-2 max-sm:right-4 fixed flex flex-col items-center justify-center z-[998] right-12 top-5 rounded-full'>
                    <div onChange={toggleMenu} className='text-sm'>
                        <label onClick={menu ? upar : niche} class="hamburger">
                        <input type="checkbox"/>
                        <svg viewBox="0 0 32 32">
                            <path class="line2 line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                            <path class="line2" d="M7 16 27 16"></path>
                        </svg>
                        </label>
                    </div>
                    <a href={CV} download="SachinResumeDownloaded.pdf" class="flex items-center justify-center">
                        <button class="download-button">
                        <div class="docs">
                            <svg
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="css-i6dzq1"
                            >
                            <path
                                d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                            ></path>
                            <polyline points="14 2 14 8 20 8"></polyline>
                            <line x1="16" y1="13" x2="8" y2="13"></line>
                            <line x1="16" y1="17" x2="8" y2="17"></line>
                            <polyline points="10 9 9 9 8 9"></polyline>
                            </svg>
                            
                        </div>
                        <div class="download">
                            <svg
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            stroke="currentColor"
                            stroke-width="2"
                            fill="none"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            class="css-i6dzq1"
                            >
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                        </button>
                    </a>
                </div>
            <div className='menu z-[996] translate-y-[100%] h-screen bg-[rgb(1,32,105)] w-full fixed'>
                <div className='w-fit h-fit flex items-center gap-3 mx-20 mb-10 max-sm:my-5 max-sm:mx-10'>
                    <a href="#homePage"><h1 onClick={niche} className='text-5xl max-sm:text-5xl font-semibold font-[oswald] w-fit'>Sachin<br/>Reddu</h1></a>
                    <div className='text-4xl max-sm:text-3xl flex flex-col gap-2'>
                        <a href="https://github.com/SachinReddu-dot"><i class="ri-github-fill"></i></a>
                        <a href="https://linkedin.com/in/sachin-reddu-b324422aa"><i class="ri-linkedin-box-fill"></i></a>
                        <a href="https://twitter.com/"><i class="ri-twitter-x-fill"></i></a>
                    </div>
                </div>
                <div className='w-full mt-14 h-fit max-sm:mt-0 max-sm:my-10 relative text-6xl max-sm:text-4xl leading-[70px]'>
                    
                    <div onClick={niche} className='flex items-center whitespace-nowrap font-bold py-3 max-sm:py-2 cursor-pointer'>
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
                    <div onClick={niche} className='flex items-start whitespace-nowrap py-3 font-bold max-sm:py-2 cursor-pointer'>
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
                    <div onClick={niche} className='flex items-start whitespace-nowrap py-3 font-bold max-sm:py-2 cursor-pointer'>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                        <a href='#projectPage' className='right px-7'>Projects</a>
                    </div>

                    {/* <div className='backdrop-blur-xl bg-blue-950/60 rounded-lg overflow-hidden w-[500px] h-[400px] absolute right-40 -top-20 flex flex-col gap-1 max-sm:gap-5 max-sm:w-full max-sm:relative max-sm:h-[400px] max-sm:right-0 max-sm:top-10'>
                        <div className='w-full h-[250px] max-sm:h-[220px] flex items-center'>
                            <img className='w-full h-full object-center object-cover grayscale hover:grayscale-0 ' src={profile} alt="" />
                        </div>
                        <p className='text-xl mt-10 max-sm:mt-0 text-justify font-semibold px-7 max-sm:px-5 max-sm:text-base'>
                        Hello there, I'm Sachin - I design web that are user-friendly, beautiful & convert your target audience - Currently based in <span className='line-through opacity-70'>Thana</span> ,Thane India.</p>
                    </div> */}
                    <div className='h-[400px] backdrop-blur-md bg-blue-950/70 w-[450px] rounded-xl overflow-hidden absolute -top-10 right-20 max-sm:gap-5 max-sm:w-full max-sm:relative max-sm:h-[400px] max-sm:right-0 max-sm:top-10'>
                        <div className='w-full h-3/5 max-sm:h-[220px]'>
                            <img className='w-full h-full object-cover object-center grayscale hover:grayscale-0' src={profile} alt="" />
                        </div>
                        <p className='px-5 mt-3 text-lg max-sm:text-[17px] tracking-tight max-sm:tracking-normal max-sm:px-4 max-sm:mt-5 font-medium font-sans h-2/5'>Hello there, I'm Sachin - I design web that are user-friendly, beautiful & convert your target audience - Currently based in <span className='line-through opacity-70'>Thana</span> ,Thane India.</p>
                    </div>
                </div>
            </div>
        </div>
    </>
)
}

export default Navbar