import React from 'react';
import Image from 'next/image';
import logo1 from "@/img/about/about_page_1.webp";

const FlexyImgCard = ({ img = logo1, imgAlt = 'cardimg', caption = 'caption', side = '' }) => {

    const flexDirectionClass = side === 'right' ? 'flexyimgcard-div-reverse' : '';


  return (
    <div className={`flexyimgcard-div ${flexDirectionClass}`}>
      <div className="flexyimgcard-img-div">
        <Image className='flexyimgcard-img' src={img} alt={imgAlt} />
      </div>
      <div className="flexyimgcard-text">
        <h6>{caption}</h6>
      </div>

    </div>
  );
}

export default FlexyImgCard;
