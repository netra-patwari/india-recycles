import React from 'react';
import Image from 'next/image';
import CardImg from '@/img/home/home-img-7home-img-pack.webp';

const splitCaption = (caption) => {
  return caption.split('..');
};

const Card1 = ({ img = CardImg, imgAlt = 'cardimg', heading = 'heading', caption = 'caption' }) => {
  const captionLines = splitCaption(caption);

  return (
    <>
      <div className="info-card">
        <div className="cards-grid">
          <Image className='card1-img' src={img} alt={imgAlt} />
          <div className="card-text">
            <h5>{heading}</h5>
            {captionLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card1;
