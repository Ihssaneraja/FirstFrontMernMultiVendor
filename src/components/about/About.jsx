import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className='container mx-auto pt-8'>
            <div className='flex flex-wrap md:flex-wrap justify-between items-start md:items-center'>
                <div className='mb-4 md:mb-0  flex md:flex-wrap'>
                    <p className='text-3xl font-bold'>ABOUT /</p>
                </div>

                <div className='md:flex-wrap'>
                    <p className='text-[12px] md:text-base text-justify'>
                        Welcome to AccesIT, where style meets functionality for developers. 
                        Born from the collective vision of our team, 
                        
                    </p>

                    <p className='text-[12px] md:text-base text-justify'>
                    AccesIT was created to offer a unique fashion 
                        tailored specifically for developers and IT professionals.<br/> 
                        Our brand seamlessly blends comfort and style, providing an array of apparel and accessories .
                       
                    </p>
                </div>
            </div>
           <div className='flex  justify-end h-[30rem]'> <img  src="public/galrinaobout.jpg"/></div>
        </div>
    );
};

export default About;
