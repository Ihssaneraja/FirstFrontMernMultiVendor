import React, { useEffect, useRef, useState } from 'react'

import './Slider.css';
import gsap, { Power4 } from "gsap";
import AnimationText from '../Textanimation/AnimationText';


const Slider = () => {
  const [imageSrc, setImageSrc] = useState("");

  const introBlock1Ref = useRef(null);
  const introBlock2Ref = useRef(null);
  const introContainerRef = useRef(null);
  const textAndLinksRef = useRef(null);
  const imgMarqueeBlockRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const randomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      setImageSrc(`public/logo/0${randomNumber(1, 5)}.jpeg`);
    }, 300);

    const introTl = gsap.timeline();

    introTl
      .to(introBlock1Ref.current, {
        y: "-100%",
        delay: 1,
        ease: Power4.easeInOut,
        duration: 1.5,
      })
      .to(introBlock2Ref.current, {
        y: 0,
        delay: 1,
        ease: Power4.easeInOut,
        duration: 1.5,
      })
      .to(introContainerRef.current, {
        opacity: 0,
        duration: 1,
      })
      .set(introContainerRef.current, {
        zIndex: -20,
      })
      .from(textAndLinksRef.current, {
        opacity: 1,
        y: 30,
        stagger: {
          amount: 0.2,
        },
        duration: 0.5,
      }, "<")
      .to(imgMarqueeBlockRef.current, {
        y: "-100%",
        ease: Power4.easeInOut,
        duration: 1.5,
      }, "-=70%");

     

    return () => clearInterval(interval);
  }, []); // Run only once after component mounts
  return (
    <div className='overflow-hidden'>
     <div style={{backgroundImage: 'url("public/bg.jpg")'}} className="intro " ref={introContainerRef}>
      <div className="images-shower">
      <AnimationText/>
        <span>
         
          <img  src={imageSrc} id="introImg" alt="" />
          <div className="introBlock" id="introBlock1" ref={introBlock1Ref} ></div>
          <div className="introBlock" id="introBlock2" ref={introBlock2Ref}></div>
        </span>
      </div>
    </div>
   
      <div className='container bg-gray' >
     
       <div className='flex p-10 '><h1 className=' jacquard-12-regular font-bold text-6xl flex justify-left itmes-center '> All Right <br/> Reserved </h1><img className='imgTC m-0 pt-8' src="public/hasha.png" alt="" /></div> 
       <div className='flex '> <img className='imgT' src="public/fashion.jpg" alt="" /> <img className='imgTB m-0' src="public/mghlef.jpg" alt="" /></div> <p className='text-[10px] ms-8 p-0'>'full sycle space' 0-001</p> <div className='text  m-0 p-0' >
          <p className=' with-line font-bold text-5xl ml-5 pt-8'>Space Dev</p><p className='font-bold ml-5 text-3xl '>Fashion Brand </p><p className='ml-5 text-[10px] pt-3 text-justify'> In today's fast-paced world, the fashion industry,With the rise of social media and online, </p> <p className=' text-justify ml-5 text-[10px]'> driven by the ever-changing tastes and preferences rapidly across the globe of consumers</p><p className=' text-justify ml-5 text-[10px]'> Whether it's a statement handbag that adds a pop of color to a monochrome outfit,fashion </p>
          
          
         
          </div>
        <div className='text-section '  ref={textAndLinksRef}  >
          
     
        </div>

        <div className='image-section'>
          <div className='image-marquee'>
            <div >
              <span className= "border-4 border-black rounded-lg">
                <img  src="public\logo\01.jpeg" alt="" />
                <div className='img-marquee-block'></div>
              </span>
            </div>

            <div>
              <span className= "border-4 border-black rounded-lg">
                <img src="public\logo\02.jpeg" alt="" />
                <div className='img-marquee-block'></div>
              </span>
            </div>
            <div>
              <span className= "border-4 border-black rounded-lg">
                <img src="public\logo\03.jpeg" alt="" />
                <div className='img-marquee-block'></div>
              </span>
            </div>

            <div>
              <span className= "border-4 border-black rounded-lg">
                <img src="public\logo\04.jpeg" alt="" />
                <div className='img-marquee-block'></div>
              </span>
            </div>

            <div>
              <span className= "border-4 border-black rounded-lg">
                <img src="public\logo\05.jpeg" alt="" />
                <div className='img-marquee-block'></div>
              </span>
            </div>
            

          </div>

          <div className='vertical-text'>
          <p>built</p>
          <p>on</p>
          <p>trust</p>
          <p>and</p>
          <p>true</p>
          <p>creative</p>
          <p>spirit</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Slider
