import { BiRightArrow } from "react-icons/bi"

import './Details.css'
import { useEffect, useState } from "react";
const Details = () => {
    const [segmentHeight, setSegmentHeight] = useState(0);

    useEffect(() => {
      const productCopy = document.querySelector(".product-copy");
  
      const calculateSegmentHeight = () => {
        return (productCopy.scrollHeight - window.innerHeight) / 8;
      };
  
      const handleScroll = () => {
        const currentSegment = Math.min(
          9,
          Math.max(1, Math.floor(window.scrollY / segmentHeight) + 1)
        );
        productImage.src = `./${currentSegment}.jpg`;
      };
  
      setSegmentHeight(calculateSegmentHeight());
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [segmentHeight]);
  
    useEffect(() => {
      const randomCharacter = () => {
        const chars =
          "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        return chars[Math.floor(Math.random() * chars.length)];
      };
  
      const setInitialDataTextAttribute = () => {
        const paragraphs = document.querySelectorAll("p");
  
        paragraphs.forEach((p) => {
          const textContent = p.textContent.trim();
          if (!p.getAttribute("data-text") && textContent) {
            p.setAttribute("data-text", textContent);
            p.textContent = "";
          }
        });
      };
  
      const revealedText = (element) => {
        const originalText = element.getAttribute("data-text");
        let revealedText = "";
        let index = 0;
  
        const revealNextLetter = () => {
          if (index < originalText.length) {
            revealedText += originalText[index];
            let tempText = revealedText;
            for (let i = index + 1; i < originalText.length; i++) {
              tempText += randomCharacter();
            }
            element.textContent = tempText;
            index++;
            setTimeout(revealNextLetter, 50);
          } else {
            element.textContent = originalText;
          }
        };
  
        revealNextLetter();
      };
  
      setInitialDataTextAttribute();
  
      const paragraphs = document.querySelectorAll("p[data-text]");
      paragraphs.forEach((p) => {
        revealedText(p);
      });
    }, []);
  return (
    <div>
      <div className="page-content">
        <div className="col product-img">
    <div className="product-img-wrapper">
        <img src="public\Product\image1.jpg" alt="" />
    </div>
        </div>
        <div className="col product-copy">
            <div className="product-details">
                <p data-text=' 02 SHIRT ROCK'>02 shirt rock</p>
                <br/>
                <p>180 USD</p>
                <br/>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
                <p>- Lorem ipsum dolor</p>
            </div>
            <div className="product-vars">
                <img src="public\Product\image2.jpg" alt="" />
                <img src="public\Product\image5.jpg" alt="" />
                <img src="public\Product\image5.jpg" alt="" />
            </div>
                <div className="product-size">
                   
                    <p  className="size">s</p>
                    <p  className="size">xl</p>
                    <p  className="size">l</p>
                    <p  className="size">xxl</p>
                    
                
                </div>
            <button className="size-btn">
                    select your size
                    <i className="ph-bold "> 
                    </i>
                 


            </button>

            <div className="other-products">
                <div className="product">
                    <img src="public\Product\image7.jpg" alt="" />
                    <p>ipsum lorum</p>
                </div>
                <div className="product">
                    <img src="public\Product\image10.jpg" alt="" />
                    <p>ipsum lorum</p>
                </div>
                <div className="product">
                    <img src="public\Product\image10.jpg" alt="" />
                    <p>ipsum lorum</p>
                </div>
                <div className="product">
                    <img src="public\Product\image10.jpg" alt="" />
                    <p>ipsum lorum</p>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Details

