import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './Menu.css';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";



const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const tl = useRef(gsap.timeline({ paused: true }));
    const {pathname} = useLocation()


    useEffect(() => {
        tl.current.to('.menu', {
            duration: 1,
            x: '0%',
            ease: 'Expo.easeInOut'
        })
        .fromTo('.li', {
            y: '-100%',
            opacity: 0
        }, {
            duration: .4,
            opacity: 1,
            y: '0%',
            stagger: 0.25
        })
        .fromTo('.social-li', {
            y: '-50%',
            opacity: 0
        }, {
            duration: 0.8,
            opacity: 1,
            stagger: 0.25,
            ease: 'Expo.easeOut'
        }, '-= 0.5');
    }, []);

    const toggleMenu = () => {
        setMenuOpen(true);
        tl.current.play();
    };

    const toggleClose = () => {
        console.log("Close button clicked"); // Check if this log appears in the console
        setMenuOpen(false);
        tl.current.reverse();
    };

    const divStyle = {
        cursor: 'pointer' 
      };

      const divStylC = {
        cursor: 'pointer' 
      };



      const [showButton, setShowButton] = useState(true);

      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setShowButton(false);
          } else {
            setShowButton(true);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div>
            <div className="container">
          {  showButton  &&   <div   style={divStyle} className="button font-bold text-xl" onClick={toggleMenu}><GiHamburgerMenu />

</div>}
            </div> 
            <div className="menu">
            <div   style={divStylC} className="button " onClick={toggleClose}>close</div>

                <ul className="ul">
                    <li className="li1 li">
                    <Link to='/' className={`p-2 block ${pathname === '/' ?  'text-[#059473]' : 'text-slate-600' } `} >Home</Link>

                    </li>
                    <li className="li2 li">                           
                     <Link to='/shops' className={`p-2 block ${pathname === '/shops' ?  'text-[#059473]' : 'text-slate-600' } `} >Shop</Link>
                    </li>
                    <li className="li3 li"><a href="#">Services</a></li>
                    <li className="li4 li"><a href="#">Contact</a></li>
                    <div className="bg1 bg"></div>
                    <div className="bg2 bg"></div>
                    <div className="bg3 bg"></div>
                    <div className="bg4 bg"></div>
                </ul>
                <div className="social p-[25px]">
                    <ul className=' m-[15px] '>
                        <li className="social-li"><a href="#"><FaFacebookF /></a></li>
                        <li className="social-li"><a href="#"><FaInstagram /></a></li>
                        <li className="social-li"><a href="#"><FaTwitter /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;
