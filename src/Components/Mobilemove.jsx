import React from 'react'
import 'remixicon/fonts/remixicon.glyph.json'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'

const Mobilemove = () => {

    const [circle0, setcircle0] = useState(false)
    const [circle1, setcircle1] = useState(false)
    const [circle2, setcircle2] = useState(false)
    const [circle3, setcircle3] = useState(false)
    const [circle4, setcircle4] = useState(false)
    const [circle5, setcircle5] = useState(false)
    const [circle6, setcircle6] = useState(false)


function hello0(){
        useGSAP(
            gsap.to(".mobileparent0",{
                height: 400
            }),
            gsap.to(".mobileparent0 i",{
               rotate: 45
            })
        )
    }
function helloleave0(){
        useGSAP(
            gsap.to(".mobileparent0",{
                height: 60
            }),
            gsap.to(".mobileparent0 i",{
               rotate: 0
            })
        )
    }
    
function hello1(){
    useGSAP(
        gsap.to(".mobileparent1",{
            height: 400
        }),
        gsap.to(".mobileparent1 i",{
           rotate: 45
        })
    )
}
function helloleave1(){
    useGSAP(
        gsap.to(".mobileparent1",{
            height: 60
        }),
        gsap.to(".mobileparent1 i",{
           rotate: 0
        })
    )
}

function hello2(){
    useGSAP(
        gsap.to(".mobileparent2",{
            height: 400,
        }),
        gsap.to(".mobileparent2 i",{
           rotate: 45
        })
    )
}
function helloleave2(){
    useGSAP(
        gsap.to(".mobileparent2",{
            height: 60
        }),
        gsap.to(".mobileparent2 i",{
           rotate: 0
        })
    )
}

function hello3(){
    useGSAP(
        gsap.to(".mobileparent3",{
            height: 400,
        }),
        gsap.to(".mobileparent3 i",{
           rotate: 45
        })
    )
}
function helloleave3(){
    useGSAP(
        gsap.to(".mobileparent3",{
            height: 50
        }),
        gsap.to(".mobileparent3 i",{
           rotate: 0
        })
    )
}

function hello4(){
    useGSAP(
        gsap.to(".mobileparent4",{
            height: 400,
        }),
        gsap.to(".mobileparent4 i",{
           rotate: 45
        })
    )
}
function helloleave4(){
    useGSAP(
        gsap.to(".mobileparent4",{
            height: 50
        }),
        gsap.to(".mobileparent4 i",{
           rotate: 0
        })
    )
}

function hello5(){
    useGSAP(
        gsap.to(".mobileparent5",{
            height: 400,
        }),
        gsap.to(".mobileparent5 i",{
           rotate: 45
        })
    )
}
function helloleave5(){
    useGSAP(
        gsap.to(".mobileparent5",{
            height: 50
        }),
        gsap.to(".mobileparent5 i",{
           rotate: 0
        })
    )
}

function hello6(){
    useGSAP(
        gsap.to(".mobileparent6",{
            height: 400,
        }),
        gsap.to(".mobileparent6 i",{
           rotate: 45
        })
    )
}
function helloleave6(){
    useGSAP(
        gsap.to(".mobileparent6",{
            height: 50
        }),
        gsap.to(".mobileparent6 i",{
           rotate: 0
        })
    )
}


  return (
    <>
        <div className='w-full -mt-[500px] h-screen pt-20 relative px-2 text-xl sm:hidden'>

            <div className='w-full h-fit backdrop-blur-lg rounded-lg overflow-hidden font-sans font-medium text-lg'>
                <div className='py-3 h-[60px] overflow-hidden'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1 className='text-transparent'>2022</h1>
                            <h1 className='text-2xl'>Projects</h1>
                        </div>
                        <i class="text-transparent ri-add-line"></i>
                    </div>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle0(!circle0)} className='mobileparent0 py-4 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>CareTrack - FullStack</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle0 ? hello0() : helloleave0()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/CareTrack.png" alt="" />
                    </div>
                    <a href="https://github.com/frazaq/Internship_Techplement.git"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle1(!circle1)} className='mobileparent1 py-4 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-center'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>Thirtysixstudio</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle1 ? hello1() : helloleave1()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/ThirtysixstudioSS.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot?tab=repositories"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle2(!circle2)} className='mobileparent2 py-4 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>Ochi</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle2 ? hello2() : helloleave2()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/OchiSS.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot/ochi.git"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle3(!circle3)} className='mobileparent3 py-3 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>Duo</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle3 ? hello3() : helloleave3()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/DUO-SS.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot?tab=repositories"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle4(!circle4)} className='mobileparent4 py-3 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>TwoGoodCo.</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle4 ? hello4() : helloleave4()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/TwogoodSS.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot?tab=repositories"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle5(!circle5)} className='mobileparent5 py-3 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>Anzo Portfolio</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle5 ? hello5() : helloleave5()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/AnzoportSS.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot?tab=repositories"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>

                <div onClick={()=>setcircle6(!circle6)} className='mobileparent6 py-3 my-2 h-[60px] overflow-hidden '>
                    <div className='w-full flex items-center justify-between'>
                        <div className='w-full flex items-center gap-20'>
                            <h1>2024</h1>
                            <h1 className='text-xl'>Supreme</h1>
                        </div>
                        <i class="mr-7 ri-add-line">{circle6 ? hello6() : helloleave6()}</i>
                    </div>
                    <div className='h-[250px] w-full mt-5'>
                        <img className='h-full w-full object-contain' src="src/assets/Project-images/supreme.png" alt="" />
                    </div>
                    <a href="https://github.com/SachinReddu-dot?tab=repositories"><button className='w-32 h-10 rounded-full bg-white text-black mt-5'>Visit <i class="ri-links-line"></i> </button></a>
                </div>
                <div className='h-[1px] w-full bg-white'></div>
            </div>

        </div>
    </>  
)
}

export default Mobilemove