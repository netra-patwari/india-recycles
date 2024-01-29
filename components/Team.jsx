import React from "react";
import Card3 from "./Card3";
import Heading2 from "./Heading2";

import img4 from "@/img/about/about_page_4.webp";
import img7 from "@/img/about/about_page_7.webp";
import img11 from "@/img/about/about_page_11.webp";




const Team = () => {
  return (

<>
<Heading2  text="Our Team"/>
<section className="team-section">


<Card3
  name="PRANAV GUPTA"
  postion="CO-FOUNDER"
  img={img4}
/>

<Card3
  name="RENU POKHARNA"
  postion="FOUNDER"
  img={img11}
/>

<Card3
  name="SHEEBA MALIK"
  postion="PROJECT MANAGER"
  img={img7}
/>
</section>
</>

  );
};

export default Team;
