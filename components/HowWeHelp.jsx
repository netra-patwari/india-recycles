import React from 'react';
import Card1 from '@/components/Card1';
import CardImg1 from '@/img/home/home-img-7home-img-pack.webp';
import CardImg2 from '@/img/home/home-img-8home-img-pack.webp';
import CardImg3 from '@/img/home/home-img-9home-img-pack.webp';

const HowWeHelp = () => {
  return (
<>
<h1>How We Help</h1>
<div className='hdwh'>
    
    <Card1
      img={CardImg1}
      imgAlt="SLUM SALES"
      heading="SLUM SALES"
      caption="A price range of Rs.10-50"
    />
    <Card1
      img={CardImg2}
      imgAlt="GODADI PROJECT"
      heading="GODADI PROJECT"
      caption="Empowering Women .. Godadis are sold at Slum sales"
    />
    <Card1
      img={CardImg3}
      imgAlt="SOCIAL IMPACT"
      heading="SOCIAL IMPACT"
      caption="Medical Camps..Livelihood Programs..Educational Assistance"
    />
  </div>
</>
  );
};

export default HowWeHelp;