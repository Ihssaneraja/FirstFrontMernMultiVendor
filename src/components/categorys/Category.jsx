import React from 'react';
import './Category.css';
import { Link } from 'react-router-dom';

const Category = () => {
  return (
    <div className='container pt-[50px]'>
        <div className='flex  justify-between items-center font-bold text-4xl pb-8'><h3>IT's Fashion/FOR</h3> <p className='border-t border-b border-black py-2 w-[50%] font-bold '> <p className='border-b border-black pb-1 w-[100%] font-bold'>WOMENS</p>MENS</p> </div> 

      <section className="category-section  ">
      
        <div className='categorieImages opacity-90 '>
          
          <img className='imageone' src="public/image1.jpg" alt="first"/>
          <img className='imagetwo' src="public/image2.jpg" alt="two"/>
          <img className='imagethree' src="public/image6.jpg" alt="three"/>
          <img className='imagefour' src="public/image7.jpg" alt="first"/>
          <img className='imagetwo' src="public/image15.jpg" alt="two"/>
          <img className='imagethree' src="public/image13.jpg" alt="three"/>
        </div>
        <div className='text-overlay'>
          <Link  to='/shops'><h2 className='titleCategori text-6xl text-black font-bold'>Shop Now</h2></Link>
        </div>

      </section>
      
       
      
    </div>
    
  );
}

export default Category;
