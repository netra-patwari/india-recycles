import React from 'react';
import Image from "next/image";
import Logo from "@/img/logo/logo-type=defaultlogo.png";

const BigCTA = ({ theme }) => {

  return (
    <>
      <section className='big-cta-sec'>
        <div className="big-cta-div p2" style={{ backgroundColor: theme=== "green" ? theme : '' }}>
          <div className="big-cta-img-div">
            <Image
              className='big-cta-img'
              src={Logo}
              alt='logo' />
          </div>

          <div className="big-cta-text" >
            <h1 style={{ color: theme === "green" ? 'white' : 'black' }}>Follow us on Instagram</h1>
            <h4 style={{ color: theme === "green" ? 'white' : 'black' }}>Get updates about Sorting parties, Revibe sales, and volunteering opportunities</h4>
          </div>
        </div>
      </section>
    </>
  )
}

export default BigCTA;
