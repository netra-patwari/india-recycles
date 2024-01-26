import React from 'react'
import Rules from "@/components/Rules"
import CTA from "@/components/CTA";

import Image from "next/image";

import Ruleset1Img from "@/img/home/home-img-5home-img-pack.webp";

const Ruleset1 = () => {
  return (
    <section className='ruleset-1-sec'>
        <h1 className='p2'>Things we are accepting</h1>
        <div className="ruleset1-grid">
            <Rules  />
           <div className="center-img">
           <Image 
            src={Ruleset1Img}
            alt='ruleset-1-img'
            width={400}
            height={"auto"}
            className='ruleset-fluid-img'/>
           </div>
        </div>
        <div className="center-btn p2">
        <CTA title={"DROP OFF POINTS"}></CTA>

        </div>

    </section>
  )
}

export default Ruleset1