import React from "react";
import Image from "next/image";
import NumbordImg from "@/img/home/home-img-6home-img-pack.webp";


const NumBoard = () => {
  return (
    <>
      <div className="numboard-flex">
        <div className="numboard-img-div p2">
          <Image className="numboard-img" src={NumbordImg} alt="NumbordImg" />
        </div>
        <div className="numboard-grid">

          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


          <div class="numboard-grid-item">
            <h5>55</h5>
            <h6>Slum Sale</h6>
          </div>


        </div>
      </div>
    </>
  );
};

export default NumBoard;
