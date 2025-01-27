import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import { useState } from 'react'

import image1 from '../assets/Project-images/DUO-SS.png'
import image2 from '../assets/Project-images/TwogoodSS.png'
import image3 from '../assets/Project-images/AnzoportSS.png'
import image4 from '../assets/Project-images/OchiSS.png'
import image5 from '../assets/Project-images/supreme.png'
import image6 from '../assets/Project-images/ThirtysixstudioSS.png'
import image7 from '../assets/Project-images/CareTrack.png'
import Footer from '../Components/Footer'


const ContactPage2 = () => {

    const [Result, setResult] = useState()
    
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "150ebafa-5f76-4e6c-8d0d-65600ea79dba");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

    useGSAP(()=>{
        gsap.from(".blink",{
            opacity: 0,
            repeat:-1,
            duration:.8,
            ease: "power3.inOut"
        })
        const tl = gsap.timeline({
            repeat:-1,
            ease: "power2",
        })
        tl
        .to(".img1",{
            opacity:1,
            duration:1.5
        })
        .to(".img2",{
            opacity:1,
            duration:1.5
        })
        .to(".img3",{
            opacity:1,
            duration:1.5
        })
        .to(".img4",{
            opacity:1,
            duration:1.5
        })
        .to(".img5",{
            opacity:1,
            duration:1.5
        })
        .to(".img6",{
            opacity:1,
            duration:1.5
        })
        .to(".img7",{
            opacity:1,
            duration:1.5
        })
    })

    function icon(){
        gsap.to(".icon1",{
            backgroundColor: "black",
            color:"white",
            transform: "translateY(-10px)",
            ease: "power2"
        })
    }
    function iconleave(){
        gsap.to(".icon1",{
            backgroundColor: '#9ca3af',
            color: '#4b5563',
            transform: "translateY(0)"
        })
    }

    function icon2(){
        gsap.to(".icon2",{
            backgroundColor: "black",
            color:"white",
            transform: "translateY(-10px)",
            ease: "power2"
        })
    }
    function iconleave2(){
        gsap.to(".icon2",{
            backgroundColor: '#9ca3af',
            color: '#4b5563',
            transform: "translateY(0)"
        })
    }

    function icon3(){
        gsap.to(".icon3",{
            backgroundColor: "black",
            color:"white",
            transform: "translateY(-10px)",
            ease: "power2"
        })
    }
    function iconleave3(){
        gsap.to(".icon3",{
            backgroundColor: '#9ca3af',
            color: '#4b5563',
            transform: "translateY(0)"
        })
    }

  return (
    <>
        <div id='contactPage' className='w-full relative pt-5 pb-7 max-sm:py-0 max-sm:px-0 px-40 font-sans bg-[rgb(1,32,105)]'>
            <div className='w-full h-[95vh] relative flex max-sm:flex-col overflow-hidden max-sm:overflow-visible rounded-xl'>
                <div className='relative w-1/4 max-sm:h-[250px] max-sm:w-full'>
                    {/* IMAGES */}
                    <div className='w-full h-full relative opacity-70 max-sm:pt-20'>
                        <img className='img1 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image1} alt="" />
                        <img className='img2 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image2} alt="" />
                        <img className='img3 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image3} alt="" />
                        <img className='img4 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image4} alt="" />
                        <img className='img5 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image5} alt="" />
                        <img className='img6 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image6} alt="" />
                        <img className='img7 opacity-0 absolute w-full h-full object-cover object-left max-sm:object-center' src={image7} alt="" />
                    </div>
                    {/* SOCIAL LINKS */}
                    <div className='w-full backdrop-blur-3xl h-[100px] max-sm:h-[70px] p-10 max-sm:p-0 absolute max-sm:relative max-sm:mt-10 bottom-0 flex items-center justify-center max-sm:justify-normal max-sm:pl-5 gap-3'>
                        <a href='https://github.com/SachinReddu-dot'><div onMouseEnter={icon} onMouseLeave={iconleave} className='icon1 h-12 w-12 bg-gray-400 text-gray-600 rounded-md text-3xl flex items-center justify-center'>
                            <i class="ri-github-fill"></i>
                        </div></a>
                        <a href="https://linkedin.com/in/sachin-reddu-b324422aa"><div onMouseEnter={icon2} onMouseLeave={iconleave2} className='icon2 h-12 w-12 bg-gray-400 text-gray-600 rounded-md text-3xl flex items-center justify-center'>
                            <i class="ri-linkedin-fill"></i>
                        </div></a>
                        <a href='https://x.com/?mx=2'><div onMouseEnter={icon3} onMouseLeave={iconleave3} className='icon3 h-12 w-12 bg-gray-400 text-gray-600 rounded-md text-3xl flex items-center justify-center'>
                            <i class="ri-twitter-x-fill"></i>
                        </div></a>                   
                    </div>
                </div>
                <div className='w-2/3 max-sm:w-full max-sm:mt-5 bg-black max-sm:bg-[rgb(1,32,105)] rounded-tr-xl rounded-br-xl p-10 max-sm:px-3 max-sm:pt-28'>
                    <div className='h-full w-full '>
                        <div className='w-full font-sans max-sm:pl-2'>
                            <div className='w-full flex items-center justify-between'>
                                <h1 className='text-3xl font-[oswald] font-semibold uppercase'>Let's Talk</h1>
                                <div className='flex items-center justify-center gap-2'>
                                    <div className='blink bg-green-700 h-4 w-4 rounded-full'></div>
                                    <h3 className='mr-10 max-sm:mr-0 max-sm:text-xl text-lg font-medium font-[oswald]'>Availabe for new project</h3>
                                </div>
                            </div>
                            <p className='text-lg font-medium max-sm:text-lg mt-1 max-sm:mt-2 font-sans'>Whether you're looking for creative input or just want to chat, I'm here for it!</p>
                        </div>
                        <div className='w-full my-5 max-sm:my-10 flex max-sm:flex-col items-center gap-10 max-sm:gap-5 max-sm:pl-2'>
                            <div className='w-full'>
                                <h1 className='text-2xl font-semibold uppercase font-[oswald]'>Email</h1>
                                <p className='underline text-lg font-medium font-sans hover:cursor-pointer'>sachinreddu55@gmail.com</p>
                            </div>
                            <div className='w-full'>
                                <h1 className='text-2xl font-semibold uppercase font-[oswald]'>Phone</h1>
                                <p className='text-lg font-sans font-medium underline hover:cursor-pointer'>+91-7303393519</p>
                            </div>
                        </div>
                        <div className='w-full font-sans mt-7 max-sm:mt-14 max-sm:px-2'>
                            <form onSubmit={onSubmit} method='POST'>
                                <div className='flex max-sm:flex-col gap-5'>
                                    <div className='flex h-fit rounded-md w-1/2 max-sm:w-full items-center gap-3 p-2 border-gray-500 border-[2px]'>
                                        <i class="text-2xl ri-user-3-fill"></i>
                                        <input className='w-full font-medium bg-transparent outline-none' placeholder='Name' type="text" name='Name' autoComplete='off' required/>
                                    </div>
                                    <div className='flex h-fit rounded-md w-1/2 max-sm:w-full items-center gap-3 p-2 border-gray-500 border-[2px]'>
                                        <i class="text-2xl ri-smartphone-line"></i>
                                        <input className='w-full font-medium bg-transparent outline-none' placeholder='Phone' type="Number" name='Number' autoComplete='off' required/>
                                    </div>
                                </div>
                                <div className='flex h-fit rounded-md w-full mt-5 items-center gap-3 p-2 border-gray-500 border-[2px]'>
                                    <i class="text-2xl ri-mail-line"></i>
                                    <input className='w-full font-medium bg-transparent outline-none' placeholder='Email' type="text" name='E-mail' autoComplete='off' required/>
                                </div>
                                <textarea className='w-full rounded-md outline-none resize-none font-medium h-[150px] mt-5 p-3 bg-transparent border-gray-500 border-[2px]' placeholder='Enter your Message' name="Message"></textarea>
                                <span className='w-full text-xl font-semibold mt-3'>{Result}</span>
                                <button className='text-white w-full rounded-md bg-blue-700 text-xl font-semibold py-4 mt-3'>Send</button>   
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default ContactPage2