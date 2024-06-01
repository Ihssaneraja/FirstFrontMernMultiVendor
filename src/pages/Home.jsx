

import React, { useEffect } from 'react';
import Header from '../components/header/Header';
import Slider from '../components/slider/Slider';
import Category from '../components/categorys/Category';
import FeatureProducts from '../components/products/FeatureProducts';
import Products from '../components/products/Products';
import Footer from '../components/Footer/Footer';
import Details from './details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { get_category, get_products } from '../store/reducers/homeReducer';
import Product from '../components/products/Products';
import About from '../components/about/About';

const Home = () => {
    const dispatch = useDispatch()
        const {products,latest_product,topRated_product,discount_product} = useSelector(state => state.home)
        useEffect(() => { 
            dispatch(get_products())
        },[])
    
    
    return (
        <div className='w-full'>
           <Header/>
            <Slider/>  
           <div className='pt-[100px]'>
           <Category/>
           </div>
           
           <div  className='pt-[10px]'>
            <Product/>
     <FeatureProducts products={products} />
           </div>

           <div  className='pt-[99px]'>
             <About/>
            
           </div>

           <h3 className='font-bold text-3xl mx-auto pt-10 ms-[5rem] md:m-5'>Follow Us /</h3>
  <div>
    <div className='flex flex-wrap justify-center items-start md:items-center gap-1'>
    <img className='w-[8rem] h-auto' src="public/BagFASHION.jpg" alt="bag"/>
    {/* <img className='w-[8rem] h-auto ' src="public/logo/AccesPNG.png" alt="bag"/> */}
    <img className='w-[8rem] h-auto' src="public/capushe.jpg" alt="capush"/>
    <img className='w-[8rem] h-auto' src="public/capushAcces.jpg" alt="capushAcces"/>
    <img className='w-[8rem] h-auto' src="public/bascketFASHION.jpg" alt="FASHION"/>
    </div>
  </div>


  <Footer/>


        
          
        
        </div>
    );
};

export default Home;