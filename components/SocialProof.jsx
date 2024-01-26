import React from 'react';
import Image from 'next/image';

import logo1 from "@/img/home/social-proof-logos/social_proof_logo_1.webp";
import logo2 from "@/img/home/social-proof-logos/social_proof_logo_2.webp";
import logo3 from "@/img/home/social-proof-logos/social_proof_logo_3.webp";
import logo4 from "@/img/home/social-proof-logos/social_proof_logo_4.webp";
import logo5 from "@/img/home/social-proof-logos/social_proof_logo_5.webp";
import logo6 from "@/img/home/social-proof-logos/social_proof_logo_6.webp";
import logo7 from "@/img/home/social-proof-logos/social_proof_logo_7.webp";
import logo8 from "@/img/home/social-proof-logos/social_proof_logo_8.webp";
import logo9 from "@/img/home/social-proof-logos/social_proof_logo_9.webp";
import logo10 from "@/img/home/social-proof-logos/social_proof_logo_10.webp";
import logo11 from "@/img/home/social-proof-logos/social_proof_logo_11.webp";
import logo12 from "@/img/home/social-proof-logos/social_proof_logo_12.webp";
import logo13 from "@/img/home/social-proof-logos/social_proof_logo_13.webp";
import logo14 from "@/img/home/social-proof-logos/social_proof_logo_14.webp";
import logo15 from "@/img/home/social-proof-logos/social_proof_logo_15.webp";
import logo16 from "@/img/home/social-proof-logos/social_proof_logo_16.webp";
import logo17 from "@/img/home/social-proof-logos/social_proof_logo_17.webp";
import logo18 from "@/img/home/social-proof-logos/social_proof_logo_18.webp";
import logo19 from "@/img/home/social-proof-logos/social_proof_logo_19.webp";
import logo20 from "@/img/home/social-proof-logos/social_proof_logo_20.webp";
import logo21 from "@/img/home/social-proof-logos/social_proof_logo_21.webp";
import logo22 from "@/img/home/social-proof-logos/social_proof_logo_22.webp";
import logo23 from "@/img/home/social-proof-logos/social_proof_logo_23.webp";
import logo24 from "@/img/home/social-proof-logos/social_proof_logo_24.webp";
import logo25 from "@/img/home/social-proof-logos/social_proof_logo_25.webp";


// ... import other logos

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8, logo9, logo10, logo11, logo12, logo13, logo14, logo15, logo16, logo17, logo18, logo19, logo20, logo21, logo22, logo23, logo24, logo25,]

const SocialProof = () => {
  // Create an array of image components
  const imageComponents = logos.map((logo, index) => (
    <div key={index} className="social-proof-logo">
      <Image className='social-proof-logo-img' src={logo} alt={`Social Proof Logo ${index + 1}`}/>
    </div>
  ));

  return (
    <>
      <section className="social-proof-div">
        {imageComponents}
      </section>
    </>
  );
};

export default SocialProof;
