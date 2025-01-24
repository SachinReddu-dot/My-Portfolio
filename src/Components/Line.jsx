import { useGSAP } from '@gsap/react';
import React from 'react';
import gsap from 'gsap'

const Line = () => {

    var path = "M 10 100 Q 10 500 1500 100";
    var finalpath = "M 10 100 Q 500 100 1500 100";

    function hello(dets){
        path = `M 10 100 Q ${dets.clientX} ${dets.clientY} 1500 100`

        useGSAP(
            gsap.to(".line",{
                attr: {d: path},
                duration:.3,
                ease: 'power2'
            })
        )
    }
    function leave(){
        useGSAP(
            gsap.to(".line",{
                attr: {d: finalpath},
                duration:.8,
                ease: "elastic.out"
            })
        )
    }

  return (
    <>
        <div className='w-full flex items-center justify-center bg-black relative pt-20'>
            <svg onMouseMove={hello} onMouseLeave={leave} className=' h-[300px] max-sm:h-[120px] w-[1550px] max-sm:w-full max-sm:px-5'>
                <path className='line h-[100px]' d="M 10 100 Q 500 100 1500 100" stroke="white" fill="transparent"/>
            </svg>
        </div>
    </>
  )
}

export default Line;