

import React, { useEffect } from "react";
import Slider from "react-slick";
import {
 
  FaHeart,
 
} from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./FeatureProducts.css";
import {
  add_to_card,
  add_to_wishlist,
  messageClear,
} from "../../store/reducers/cardReducer";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Rating from "../Rating";

const FeatureProducts = ({ products }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);
  const { errorMessage, successMessage } = useSelector((state) => state.card);

  const add_card = (id) => {
    if (userInfo) {
      dispatch(
        add_to_card({
          userId: userInfo.id,
          quantity: 1,
          productId: id,
        })
      );
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  const add_wishlist = (pro) => {
    dispatch(
      add_to_wishlist({
        userId: userInfo.id,
        productId: pro._id,
        name: pro.name,
        price: pro.price,
        image: pro.images[0],
        discount: pro.discount,
        rating: pro.rating,
        slug: pro.slug,
      })
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // Disable navigation arrows
    autoplay: true, // Enable auto sliding
    autoplaySpeed: 3000, // Set auto sliding speed (3000ms = 3s)
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="m-10 px-4">
      <h2 className="text-center text-4xl font-bold my-10">Feature Products</h2>
      <Slider {...settings}>
        {products.map((p, index) => (
          <div
            key={index}
            className="bg-cardColor shadow-lg w-[15rem] min-h-[9rem] text-gray-700 rounded-md overflow-hidden"
          >
            <img
              className="w-full h-[15rem] object-fit"
              src={p.images[0]}
              alt=""
            />
            <div className="p-4 flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="badge px-3 py-1 rounded-full text-xs bg-grayForc">
                  stock ready
                </span>
                <span className="badge px-3 py-1 rounded-full text-xs bg-grayForc">
                  official store
                </span>
              </div>
              <h2 className="overflow-ellipsis text-2xl overflow-hidden whitespace-nowrap">
              {p.name}
              </h2>
              <div>
                <span className="text-xl font-bold">${p.price - Math.floor((p.price * p.discount) / 100)} </span>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm line-through opacity-50">
                  ${p.price}
                  </span>
                  {p.discount ? (
                    <span className="bg-red-500 text-white rounded-md px-1.5">
                      {p.discount}%
                    </span>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
            <span className="flex items-center m-3 ">
            <div  className='flex text-slate-600 px-2 '>
             <Rating ratings={p.rating} /> 
                </div>
              <span className="text-xs ml-2 text-gray-500">20k reviews</span>
            </span>
            <div className="m-4 flex gap-2 ">
              <ul className="flex gap-2">
                <li
                  onClick={() => add_wishlist(p)}
                  className=" action-box border border-black shadow p-2 w-[38px] h-[38px] cursor-pointer opacity-50 flex-grow flex justify-center items-center bg-grayForc transition rounded"
                >
                  <FaHeart />
                </li>
                <Link
                  to={`/product/details/${p.slug}`}
                  className=" action-box border border-black p-2 w-[38px] h-[38px] cursor-pointer opacity-50 flex-grow flex justify-center items-center bg-grayForc transition rounded"
                >
                  <IoEyeSharp />
                </Link>{" "}
                <li
                  onClick={() => add_card(p._id)}
                  className=" action-box border border-black shadow p-2 flex cursor-pointer bg-grayForc rounded-md text-[14px] pt-2 text-gray-500 font-medium tracking-wider transition"
                >
                   Add To Cart
                </li>
              </ul>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default FeatureProducts;
