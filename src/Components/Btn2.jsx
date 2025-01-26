import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

const Btn2 = (props) => {
    
    useGSAP(()=>{
        gsap.to(".btn2",{
            repeat: -1,
            transform: "translateX(-200%)",
            duration:3.5,
            ease: "none",
        })
    })

    function contact(){
        useGSAP(
            gsap.to(".box1",{
                opacity: 1,
                duration: 0.1
            }),
            gsap.to(".box2",{
                opacity: 0,
                duration: 0.1
            })
        )
    }
    function contact2(){
        useGSAP(
            gsap.to(".box1",{
                opacity: 0,
            }),
            gsap.to(".box2",{
                opacity: 1,
                duration: 0.5
            })
        )
    }

  return (
    <> 
            {/* <div>
                <div onMouseEnter={contact} onMouseLeave={contact2} className=' font-semibold text-5xl border-2 border-white flex items-center justify-center rounded-full whitespace-nowrap flex-nowrap'>
                    <div className='btn1 shrink-0'>Contact</div>
                    <div className='flex items-center justify-center flex-nowrap'>
                        <h1 className='btn2 shrink-0 px-5'>{props.text}</h1>
                        <h1 className='btn2 shrink-0 px-5'>{props.text}</h1>
                        <h1 className='btn2 shrink-0 px-5'>{props.text}</h1>
                    </div>
                </div>
            </div> */}

            <div className='flex flex-col-reverse items-center font-[oswald] mt-5'>
                <h1 className='text-lg text-center font-medium w-full mt-2 tracking-wide'>{props.title}</h1>
                <div onMouseEnter={contact} onMouseLeave={contact2} className='overflow-hidden border-white border-[1px] w-[300px] h-14 py-5 rounded-full flex flex-nowrap relative hover:cursor-pointer'>
                    <div className='box1 uppercase opacity-0 w-full h-full flex items-center justify-center text-5xl font-bold shrink-0'>
                        <h1>{props.text}</h1>
                    </div>
                    <div className='box2 w-full uppercase h-full flex text-5xl font-bold items-center justify-center'>
                        <h1 className='btn2 px-5 shrink-0'>{props.text}</h1>
                        <h1 className='btn2 px-5 shrink-0'>{props.text}</h1>
                        <h1 className='btn2 px-5 shrink-0'>{props.text}</h1>
                    </div>
                </div>
            </div>
    </>
)
}

export default Btn2