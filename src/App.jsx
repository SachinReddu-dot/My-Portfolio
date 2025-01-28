import React, {Suspense, useEffect} from 'react'
import Lenis from 'lenis';
import gsap from 'gsap'

const Navbar = React.lazy(() => import('./Components/Navbar'));
const Line = React.lazy(() => import('./Components/Line'));
const Page3 = React.lazy(() => import("./pages/Page3"));
const About = React.lazy(() => import("./pages/About"));
const ContactPage2 = React.lazy(() => import('./pages/ContactPage2'));
const Scroll2 = React.lazy(() => import("./Components/Scroll2"));
const Page22 = React.lazy(() => import("./pages/Page22"));
const Footer = React.lazy(() => import("./Components/Footer"));



const App = () => {

  useEffect(()=>{
    const lenis = new Lenis({
      // infinite: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    document.addEventListener("contextmenu",function(e){
      e.preventDefault();
    },false)
  })

  const cursor = (dets) => {
    gsap.to(".cursor",{
        x: dets.clientX + 20,
        y: dets.clientY + 20,
        ease: "power1",
        duration:1
    })
  }

  return (
    <>        
      <div className='cursor  max-sm:hidden w-7 h-7 bg-white z-[99] fixed rounded-full mix-blend-difference'></div>
      <div onMouseMove={cursor} onContextMenu="return false" className='relative z-50 w-full overflow-x-hidden'>
          <Suspense>
              <Navbar/>
              <Page3 />
              <About />
              <Line/>
              <Page22 />
              <Line/>
              <Scroll2/>            
              <ContactPage2/>
              <Footer/>
          </Suspense>
      </div>
    </>
  )
}

export default App