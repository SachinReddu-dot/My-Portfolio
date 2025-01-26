import React from 'react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.glyph.json'

import image1 from '../assets/Project-images/DUO-SS.png'
import image2 from '../assets/Project-images/TwogoodSS.png'
import image3 from '../assets/Project-images/AnzoportSS.png'
import image4 from '../assets/Project-images/OchiSS.png'
import image5 from '../assets/Project-images/supreme.png'
import image6 from '../assets/Project-images/ThirtysixstudioSS.png'
import image7 from '../assets/Project-images/CareTrack.png'

const More = () => {

    const move = (e)=>{
         gsap.to(".box0",{
            left: e.clientX
        }),
        gsap.to(".box1",{
            left: e.clientX
        }),
        gsap.to(".box2",{
            left: e.clientX
        }),
        gsap.to(".box3",{
            left: e.clientX
        }),
        gsap.to(".box4",{
            left: e.clientX
        }),
        gsap.to(".box5",{
            left: e.clientX
        }),
        gsap.to(".box6",{
            left: e.clientX
        })
    }

    const box0 = ()=>{
        gsap.to('.box0',{
           scale: 1,
           opacity: 1,
            duration:.5
        }),
        gsap.to(".parent0",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent0 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent0 button i',{
            opacity: 1
         })
    }
    const boxleave0 = ()=>{
        gsap.to('.box0',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent0",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent0 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent0 button i',{
            opacity: 0
         })
    }

    const box1 = ()=>{
        gsap.to('.box1',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent1",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent1 button',{
            backgroundColor: "black",
            color: "white"
        }),
        gsap.to('.parent1 button i',{
            opacity:1 
        })
    }
    const boxleave1 = ()=>{
        gsap.to('.box1',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent1",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent1 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent1 button i',{
            opacity:0 
        })
    }
    
    const box2 = ()=>{
        gsap.to('.box2',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent2",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent2 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent2 button i',{
            opacity: 1
         })
    }
    const boxleave2 = ()=>{
        gsap.to('.box2',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent2",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent2 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent2 button i',{
            opacity:0 
        })
    } 

    const box3 = ()=>{
        gsap.to('.box3',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent3",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent3 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent3 button i',{
            opacity: 1
         })
    }
    const boxleave3 = ()=>{
        gsap.to('.box3',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent3",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent3 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent3 button i',{
            opacity:0 
        })
    } 

    const box4 = ()=>{
        gsap.to('.box4',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent4",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent4 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent4 button i',{
            opacity: 1
         })
    }
    const boxleave4 = ()=>{
        gsap.to('.box4',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent4",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent4 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent4 button i',{
            opacity:0 
        })
    } 

    const box5 = ()=>{
        gsap.to('.box5',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent5",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent5 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent5 button i',{
            opacity: 1
         })
    }
    const boxleave5 = ()=>{
        gsap.to('.box5',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent5",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent5 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent5 button i',{
            opacity:0 
        })
    } 

    const box6 = ()=>{
        gsap.to('.box6',{
           scale: 1,
           opacity: 1,
            duration:.5
        })
        gsap.to(".parent6",{
            backgroundColor: "white",
            color: "black",
            borderRadius: "10px",
            padding: "0 20px",
            ease: "power2",
            duration: 0.5
        }),
        gsap.to('.parent6 button',{
            backgroundColor: "black",
            color: "white"
         })
         gsap.to('.parent6 button i',{
            opacity: 1
         })
    }
    const boxleave6 = ()=>{
        gsap.to('.box6',{
            scale: 0,
            opacity: 0,
        }),
        gsap.to(".parent6",{
            backgroundColor: "transparent",
            color: "white",
            borderRadius: 0,
            padding: 0,
        }),
        gsap.to('.parent6 button',{
            backgroundColor: "",
        }),
        gsap.to('.parent6 button i',{
            opacity:0 
        })
    }

  return (
    <>
            {/* <div className='h-screen w-full relative'>
                <div className='absolute -top-28 text-[18vw] max-sm:text-9xl mix-blend-difference'>
                    <h1>More</h1>
                </div>
            </div> */}
            <div className='w-full relative px-20 rounded-2xl max-sm:hidden'>
                <div className='backdrop-blur-xl bg-black/60 w-full rounded-3xl py-10 hover:cursor-pointer font-sans'>
                    <div>
                        <div className='flex items-center justify-between text-3xl font-[oswald] py-5'>
                            <h1 className='w-[100px] mr-[100px] text-transparent'>year</h1>
                            <h1 className='w-[300px] mr-[100px]'>project</h1>
                            <h1 className='w-[400px] mr-[100px]'>Technology</h1>
                            <h1 className='w-[100px] mr-[100px] text-transparent'>link</h1>                            
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box0} onMouseLeave={boxleave0} onMouseMove={move} className='parent0 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px] '>CareTrack - FullStack</h1>
                            <h1 className='w-[400px] text-lg mr-[100px]'>Reactjs, Nextjs, TailwindCSS, Backend</h1>
                            <button className='border-2 font-semibold rounded-full px-7 py-2 mr-[100px] flex items-center gap-1'>
                                <a href="https://github.com/frazaq/Internship_Techplement.git">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>
                            <div className='box0 scale-0 opacity-0 w-[550px] h-[300px] absolute top-[185px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image7} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box1} onMouseLeave={boxleave1} onMouseMove={move} className='parent1 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium font-sans py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>Thirtysixstudio</h1>
                            <h1 className='w-[400px] mr-[100px]'>Reactjs, Tailwind css, Canvas, JavaScript</h1>
                            <button className='border-2 font-semibold rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>                           
                            <div className='box1 opacity-0 scale-0 w-[550px] h-[300px] rounded-xl absolute top-[260px] overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image6} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box2} onMouseLeave={boxleave2} onMouseMove={move} className='parent2 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>OCHI</h1>
                            <h1 className='w-[400px] mr-[100px]'>Reactjs, Tailwind css, FramerMotion, Locomotive</h1>
                            <button className='border-2 rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot/ochi.git">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>                            
                            <div className='box2 opacity-0 scale-0 w-[550px] h-[300px] absolute top-[340px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image4} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>
                    
                    <div onMouseEnter={box3} onMouseLeave={boxleave3} onMouseMove={move} className='parent3 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>DUO</h1>
                            <h1 className='w-[400px] mr-[100px]'>Reactjs, TailwindCSS, JavaScript, ScrollTrigger</h1>
                            <button className='border-2 rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>
                            <div className='box3 opacity-0 scale-0 w-[550px] h-[300px] absolute bottom-[335px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image1} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box4} onMouseLeave={boxleave4} onMouseMove={move} className='parent4 w-full'>
                        <div className='w-full flex items-center justify-between text-xl font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>Anzo Portfolio</h1>
                            <h1 className='w-[400px] mr-[100px]'>HTML, CSS, JavaScript, Canvas, GSAP</h1>
                            <button className='border-2 rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>
                            <div className='box4 opacity-0 scale-0 w-[550px] h-[300px] absolute bottom-[260px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image3} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box5} onMouseLeave={boxleave5} onMouseMove={move} className='parent5 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>Two Good Co.</h1>
                            <h1 className='w-[400px] mr-[100px]'>HTML ,CSS ,JavaScript, GSAP</h1>
                            <button className='border-2 rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>
                            <div className='box5 opacity-0 scale-0 w-[550px] h-[300px] absolute bottom-[180px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image2} alt="" />
                            </div>
                        </div>
                        <div className='w-full h-[1px] bg-white'></div>
                    </div>

                    <div onMouseEnter={box6} onMouseLeave={boxleave6} onMouseMove={move} className='parent6 w-full'>
                        <div className='w-full flex items-center justify-between text-lg font-medium py-3'>
                            <h1 className='w-[100px] mr-[100px]'>2024</h1>
                            <h1 className='w-[300px] text-xl font-semibold mr-[100px]'>SUPREME</h1>
                            <h1 className='w-[400px] mr-[100px]'>HTML ,CSS ,JavaScript</h1>
                            <button className='border-2 rounded-full px-7 py-2 mr-[100px] flex items-center gap-2'>
                                <a href="https://github.com/SachinReddu-dot/Projects.git">Link</a>
                                <i class="opacity-0 ri-links-line"></i>
                            </button>
                            <div className='box6 opacity-0 scale-0 w-[550px] h-[300px] absolute bottom-[110px] rounded-xl overflow-hidden'> 
                                <img className='w-full h-full object-cover object-center' src={image5} alt="" />
                            </div>
                        </div>
                        {/* <div className='w-full h-[1px] bg-white'></div> */}
                    </div>

                </div>
            </div>
            
    </>
  )
}

export default More