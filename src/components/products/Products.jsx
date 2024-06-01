import React from 'react';
import { FaStar, FaStarHalfAlt, FaHeart } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import './Product.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Carousel from 'react-multi-carousel';

const Product = () => {
  const {categorys} = useSelector(state => state.home)

  const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 6
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 6
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 4
    },
    mdtablet: {
        breakpoint: { max: 991, min: 464 },
        items: 4
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 3
    },
    smmobile: {
        breakpoint: { max: 640, min: 0 },
        items: 2
    },
    xsmobile: {
        breakpoint: { max: 440, min: 0 },
        items: 1
    },
}
  return (
    <div className="m-10 px-4">
      <h2 className="text-center text-4xl  font-bold my-10">Top Categories</h2>
      
      <div className=" wraper flex flex-wrap items-center  justify-center md:justify-between gap-5">
      <div className='w-[87%] mx-auto relative'>
           

                <Carousel
                    autoPlay={true}
                    infinite={true}
                    arrows={true} 
                    responsive={responsive}
                    transitionDuration={500}
                >
                {
                    categorys.map((c, i) => <Link  className=' flex justify-center items-center h-[300px]  block ' key={i} to={`/products?category=${c.name}`}>
                        <div className=' flex justify-center items-center  bw-full h-full relative '>
                        <img style={{transform:'translate(50%)',margin:'0 auto'}} className='object-fit h-full m-[5rem] border  block ' src={c.image} alt="" />
                        <div className='absolute bottom-6 w-full mx-auto font-bold left-0  flex justify-center items-center'>
                         <span style={{transform:'translate(50%)'}} className=' w-full text-center bg-[#3330301e] text-white font-bold'>{c.name}</span>

                        </div>
                        </div>
                        
                    </Link> )
                }
                </Carousel>        
         </div>
             
      <div className='pt-5'>
  <img className='w-full h-auto max-h-[40rem] object-cover' src="public/dyalnaFashion.jpg" alt="Dyalna Fashion" />
</div>


      </div>
    </div>
  );
};

export default Product;
