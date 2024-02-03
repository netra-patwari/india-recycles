import React from "react";
import Rules from "./Rules";

import Image from "next/image";
import dropLocImg1 from "@/img/droploc/img_droploc_1.webp";
import dropLocImg2 from "@/img/droploc/img_droploc_2.webp";

const DropLoc = () => {
  return (
    <>
      <main className="droploc">
        <header className="droploc-header">
          <h2>WE ARE COLLECTING, ALWAYS !</h2>
          <h4>Collection Drop-Off Points</h4>
        </header>
        <div className="droploc-container">
          <div className="droploc-box">
            <h4>Things we are accepting</h4>
            <Rules />
          </div>
          <div className="droploc-box">
            <Image src={dropLocImg1} />
          </div>
        </div>
      </main>
    </>
  );
};

export default DropLoc;
