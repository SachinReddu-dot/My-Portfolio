import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

import profile from '../assets/Project-images/ME..jpeg'

const Btn2 = React.lazy(()=> import('../Components/Btn2'))

const About = () => {

    gsap.registerPlugin(ScrollTrigger)

    useGSAP(()=>{
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: ".page1",
                // markers: true,
                start: "top 10%",
                end: "top 0"
            }
        })
        tl
        .from(".text",{
            transform: "translateY(100%)",
            duration:1,
            ease: "power3",
            stagger:.1
        })
        .from(".front",{
            transform: "translateX(100%)",
            duration:.8,
            ease:"power3"
        })
        .from(".hello3",{
            transform: "translateY(100%)",
            duration: .8,
        })     
    })

  return (
    <>
        <div id='aboutPage' className='page1 w-full relative bg-black font-sans'>
            <div className='w-full lg:h-screen min-h-screen relative flex max-sm:flex-col overflow-hidden'>
                {/* Left Side */}
                <div className='w-1/2 max-sm:w-full h-full relative flex flex-col leading-[250px] px-5 max-sm:px-5'>
                    <div className='w-full h-3/4 max-sm:h-[600px] bg-red-900 overflow-hidden'>
                        <img className='w-full h-screen object-cover object-bottom grayscale hover:grayscale-0' src={profile} alt="" />
                    </div>
                    <div className='-mt-7 w-[700px] overflow-hidden relative flex font-[oswald] uppercase font-semibold text-[15vw] max-sm:text-8xl tracking-tight'>
                        {["s","a","c","h","i","n"].map((e)=>{
                            return <h1 className='text'>{e}</h1>
                        })}
                    </div>
                    <div className='absolute scale-90 h-[100px] right-0 bottom-20 max-sm:bottom-5 max-sm:right-0 flex items-center rotate-90'>
                        <h4 className='bg-white text-black text-2xl font-bold font-[oswald] px-2'>#1</h4>
                        <div className='uppercase ml-3 leading-[10px]'>
                            <h4 className='text-sm'>Episode-1</h4>
                            <h2 className='text-lg font-[lora] font-semibold'>Shadow</h2>
                        </div>
                    </div>
                </div>
                {/* Right Side */}
                <div className='w-1/2 max-sm:w-full relative max-sm:mt-16 h-full py-10 pl-10 max-sm:p-0'>
                    <div className='w-full h-full relative flex max-sm:flex-col'>
                        {/* Desktop */}
                        <div className='w-3/4 h-full mt-12 text-[16px] font-[opensans] px-5 font-medium max-sm:hidden'>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Hello! I'm a passionate Front-End Developer from India,</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>dedicated to creating stunning, user-focused websites.</p>
                            </div><br/>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>As a developer, I focus on crafting user-friendly and</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>beautiful designs that not only look great but also work</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>seamlessly across different devices and platforms.</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>I believe that a website should be more than just visually</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>attractive – it should be intuitive, easy to navigate, and</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>most importantly, convert your target audience into</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> loyal customers or followers.</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Whether you need a sleek static website to showcase</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>your portfolio or a dynamic, interactive platform that</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>drives engagement, I’m here to turn your vision into</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> loyal customers or followers.</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>reality. Let's work together to bring your ideas to life</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> with a website that truly makes an impact.</p>
                            </div><br/>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Feel free to reach out – I’d love to help you create something exceptional!</p>
                            </div>  
                            
                            {/* <p className='text-[20px] max-sm:text-[16px] font-[opensans] px-5 font-medium'>Hello! I'm a passionate Front-End Developer from India, dedicated to creating stunning, user-focused websites..<br/><br/>

                            As a developer, I focus on crafting user-friendly and beautiful designs that not only look great but also work seamlessly across different devices and platforms. I believe that a website should be more than just visually attractive – it should be intuitive, easy to navigate, and most importantly, convert your target audience into loyal customers or followers.

                            Whether you need a sleek static website to showcase your portfolio or a dynamic, interactive platform that drives engagement, I’m here to turn your vision into reality. Let's work together to bring your ideas to life with a website that truly makes an impact.<br/><br/>

                            Feel free to reach out – I’d love to help you create something exceptional!
                            </p> */}
                        </div>
                        {/* Mobile */}
                        <div className='pl-4 text-[17px] w-[85%] font-sans md:hidden'>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Hello! I'm a passionate Front-End Developer</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> from India, dedicated to creating stunning,</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> user-focused websites.</p>
                            </div><br/>

                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>As a developer, I focus on crafting user-</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>friendly and beautiful designs that not only</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>look great but also work seamlessly across</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>different devices and platforms. I believe</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> that a website should be more than just</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>visually most importantly, convert your</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>target audience into loyal customers or</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>followers.</p>
                            </div><br/>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'> Whether you need a sleek static website to</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>showcase your portfolio or a dynamic,</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>interactive platform that drives engagement,</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Let's work together to bring your ideas to life</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>with a website that truly makes an impact.</p>
                            </div> 
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>I’m here to turn your vision into reality.</p>
                            </div><br/>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>Feel free to reach out – I’d love to help you</p>
                            </div>
                            <div className='w-full overflow-hidden'>
                                <p className='hello3'>create something exceptional!</p>
                            </div>
                            
                             
                        </div>
                        <h1 className='front w-fit h-fit text-[80px] max-sm:text-6xl font-[oswald] rotate-90 absolute -right-3 max-sm:-right-20 max-sm:top-20 top-36 uppercase'>frontend</h1>
                        <div className='absolute left-5 -bottom-10 max-sm:scale-75 max-sm:mr-40 max-sm:relative'>
                            <a href="#contactPage"><Btn2 text="contact me" title="Yes this is a button!"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default About
