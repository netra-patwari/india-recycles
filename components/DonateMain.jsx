import React from "react";

import Image from "next/image";

import donateImg1 from "@/img/donate/donate_page_1.webp";
import donateImg2 from "@/img/donate/donate_page_2.webp";
import donateImg3 from "@/img/donate/donate_page_3.webp";
import donateImg4 from "@/img/donate/donate_page_4.webp";
import donateImg5 from "@/img/donate/donate_page_5.webp";
import donateImg6 from "@/img/donate/donate_page_6.webp";
import donateImg7 from "@/img/donate/donate_page_7.webp";

const DonateMain = () => {
  return (
    <>
      <main className="donate-main">
        <h1 className="main-h1">
        Be the Difference: Support Mission India Recycles
        </h1>
        {/* <div className="bgImgs">
          <Image src={donateImg2} className="donate-main-img img-1"/>
          <Image src={donateImg3} className="donate-main-img img-2"/>
          <Image src={donateImg6} className="donate-main-img img-3"/>
          <Image src={donateImg7} className="donate-main-img img-4"/>
        </div> */}
        <div className="centered-div">
        <div id="qr-box"></div>
        </div>

      </main>
    </>
  );
};

export default DonateMain;
