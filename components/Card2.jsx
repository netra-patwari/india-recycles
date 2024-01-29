import React from "react";
import Image from "next/image";
import CardImg from "@/img/home/home-img-7home-img-pack.webp";

const Card2 = ({ img = CardImg, deg = 0, alt = "YOYO", text = "text" ,side}) => {
    const flexDirectionClass = side === 'right' ? 'flexyimgcard-div-reverse' : '';
  return (
    
    <>
<div className="card2-container">
<div className={`card2 ${flexDirectionClass}`}>
        <Image src={img} style={{ transform: `rotate(${deg}deg)` }} alt={alt} />
        <div className="textbox">
          <h6>{text}</h6>
        </div>
      </div>
</div>
    </>
  );
};

export default Card2;
