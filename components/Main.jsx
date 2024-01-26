"use client";
import React from "react";
import CTA from "@/components/CTA";
import Image from "next/image";
import Mainimg1 from "@/img/home/main-img-1.png";
import Mainimg2 from "@/img/home/main-img-2.png";
import Mainimg3 from "@/img/home/main-img-3.png";
import Mainimg4 from "@/img/home/main-img-4.png";

// import Image from 'next/image';

function Main() {
  return (
    <>
      <div className="main-grid">
        <Image
          className="main-img main-img__1"
          src={Mainimg1}
          width={231}
          height={"auto"}
          alt="main-img-1"
          loading="lazy"
          placeholder="empty"
        />

        <Image
          className="main-img main-img__2"
          src={Mainimg2}
          width={231}
          height={"auto"}
          alt="main-img-1"
          loading="lazy"
          placeholder="empty"
        />

        <Image
          className="main-img main-img__3"
          src={Mainimg3}
          width={231}
          height={"auto"}
          alt="main-img-1"
          loading="lazy"
          placeholder="empty"
        />

        <Image
          className="main-img main-img__4"
          src={Mainimg4}
          width={231}
          height={"auto"}
          alt="main-img-1"
          loading="lazy"
          placeholder="empty"
        />

        <p className="main-p">Still throwing your old stuff ?</p>

        <h1 className="main-h1">
          Give poor a chance to <br />
          buy essential goods with <br />
          <span className="main-span">Dignity</span> and{" "}
          <span className="main-span">Ease</span>
        </h1>
        <div className="main-center-div">
          <Image
            className="main-img-mobile"
            src={Mainimg1}
            width={560}
            height={"auto"}
            alt="main-img-1"
            loading="lazy"
            placeholder="empty"
          />
        </div>

        <CTA title={"MAKE A DIFFERENCE"}></CTA>
      </div>
    </>
  );
}

export default Main;
