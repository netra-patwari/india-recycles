import React from "react";
import Image from "next/image";
import img2 from "@/img/about/about_page_2.webp";
import img3 from "@/img/about/about_page_3.webp";
import img6 from "@/img/about/about_page_6.webp";
import img12 from "@/img/about/about_page_12.webp";
import img14 from "@/img/about/about_page_14.webp";
import img17 from "@/img/about/about_page_17.webp";

const Timeline = () => {
  return (
<div className="timeline-container">
<div className="timeline">
        <div className="box box-left">
          <div className="container left-container">
            <div className="text-box left-text-box">
              <h2>Collection of pre-loved items from Drop Points</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-1" src={img3} alt="timeline-img" />
        </div>

        <div className="box box-right">
          <div className="container right-container">
            <div className="text-box">
              <h2>Sorting of collected items</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-2" src={img17} alt="timeline-img" />
        </div>

        <div className="box box-left">
          <div className="container left-container">
            <div className="text-box left-text-box">
              <h2>Conduction of weekly SLUM SALES</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-3" src={img2} alt="timeline-img" />
        </div>

        <div className="box box-right">
          <div className="container right-container">
            <div className="text-box">
              <h2>Unsold and unusable items are used for Upcycle and recycle</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-4" src={img12} alt="timeline-img" />
        </div>

        <div className="box box-left">
          <div className="container left-container">
            <div className="text-box left-text-box">
              <h2>"Revibe" - our brand of upcycled products made from unsold items</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-5" src={img6} alt="timeline-img" />
        </div>

        <div className="box box-right">
          <div className="container right-container">
            <div className="text-box left-text-box">
              <h2>"The Godadi Project" - blankets made out of unwearable & faded clothes</h2>
            </div>
          </div>
          <Image className="timeline-img timeline-img-6" src={img14} alt="timeline-img" />
        </div>
      </div>
    </div>);
};

export default Timeline;
