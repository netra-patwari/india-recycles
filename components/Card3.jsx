import React from "react";
import Image from "next/image";
import CardImg from "@/img/home/home-img-7home-img-pack.webp";


const Card3 = ({name="NAME" , postion="POSITION" , img=CardImg}) => {
  return (
    <>
      <div className="card3-container">
        <div className="card3">
            <Image 
                src={img}
                alt={name}
            />
            <div className="text-box">
                <p className="body1">{name}</p>
                <p className="body2">{postion}</p>
            </div>
        </div>
      </div>
    </>
  );
};

export default Card3;
