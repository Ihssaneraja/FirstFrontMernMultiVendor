import React, { useEffect, useState } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaList, FaLock, FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  get_card_products,
  get_wishlist_products,
} from "../../store/reducers/cardReducer";
import Menu from "../menu/Menu";

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {categorys} = useSelector(state => state.home) 
  const {userInfo} = useSelector(state => state.auth) 
  const {card_product_count,wishlist_count} = useSelector(state => state.card) 

  const {pathname} = useLocation()
   
  const [showShidebar, setShowShidebar] = useState(true);
  const [categoryShow, setCategoryShow] = useState(true);
   

  const [searchValue, setSearchValue] = useState('')
  const [category, setCategory] = useState('')

  const search = () => {
      navigate(`/products/search?category=${category}&&value=${searchValue}`)
  }

  const redirect_card_page = () => {
      if (userInfo) {
          navigate('/card')
      } else {
          navigate('/login')
      }
  } 

  useEffect(() => {
      if (userInfo) {
          dispatch(get_card_products(userInfo.id))
          dispatch(get_wishlist_products(userInfo.id))
      }  
  },[userInfo])
  return (
    <div className="w-full  z-30 border-b border-gray-200 ">

      <div className="header-top bg-transparent md-lg:hidden text-[#222222] ">

        <div className="w-[85%] lg:w-[90%] mx-auto flex  justify-between items-center h-[50px] ">

          <div className="flex w-full justify-between items-center h-[50px] ">
          <div>      <Menu/>
</div>

           <Link to='/' className="flex ml-[28px]">
           <img className="h-[50px] " src="public\logo\LogoPress.png" alt="" /></Link>
            

            <div className="flex justify-center items-center gap-10" >
              <div className="flex justify-center items-center gap-10">
               
                <div className="flex group cursor-pointer text-slate-800 text-sm justify-center items-center gap-1 relative after:h-[18px] after:w-[1px] after:bg-[#afafaf] after:-right-[16px] after:absolute before:absolute before:h-[18px] before:bg-[#afafaf] before:w-[1px] before:-left-[20px]">
                  <img src="public\logo\language.png" alt="" />
                  <span>
                    <IoMdArrowDropdown />
                  </span>
                  <ul className="absolute invisible transition-all top-12 rounded-sm duration-200 text-white p-2 w-[100px] flex flex-col gap-3 group-hover:visible group-hover:top-6 group-hover:bg-black z-10">
                    <li>francais</li>
                    <li>English</li>
                  </ul>
                </div>
                {userInfo ? (
                  <Link
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm "
                    to="/dashboard"
                  >
                    <span>
                     
                      <FaUser />
                    </span>
                    <span>{ userInfo.name }  </span>
                  </Link>
                ) : (
                  <Link
                    to="/login"
                    className="flex cursor-pointer justify-center items-center gap-2 text-sm text-slate-600"
                  >
                    <span>
                      {" "}
                      <FaLock />{" "}
                    </span>
                    <span>Login </span>
                  </Link>
                )}
              </div>
              <div className="md:lg:w-full  flex justify-end ">
                <div className="flex justify-between md-lg:justify-center items-center flex-wrap pl-8">
                  <div className="flex md-lg:hidden justify-center items-center gap-5">
                    <div className="flex justify-center gap-5">
                      <div
                        onClick={() =>
                          navigate(userInfo ? "/dashboard/my-wishlist" : "/login")
                        }
                        className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full"
                      >
                        <span className="text-xl">
                          <FaHeart />
                        </span>

                        {wishlist_count !== 0 && (
                          <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                            {wishlist_count}
                          </div>
                        )}
                      </div>

                      <div  onClick={redirect_card_page} className="relative flex justify-center items-center cursor-pointer w-[35px] h-[35px] rounded-full ">
                        <span className="text-xl">
                          <FaCartShopping />
                        </span>


                        {card_product_count !== 0 && (
                          <div className="w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white flex justify-center items-center -top-[3px] -right-[5px] ">
                            {card_product_count}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
