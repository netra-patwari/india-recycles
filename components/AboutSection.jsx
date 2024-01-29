import React from "react";
import Heading2 from "./Heading2";
import Card2 from "./Card2";

import img1 from "@/img/about/about_page_1.webp";
import img6 from "@/img/about/about_page_6.webp";
import img18 from "@/img/about/about_page_18.webp";
import img14 from "@/img/about/about_page_14.webp";

const AboutSection = () => {
  return (
    <section className="aboutsec">
      <Heading2 text="Slum Sale" color="primary-500" />
      <Card2
        img={img1}
        deg={6.953}
        text="A seconds sale that takes place once a week in various slum locations of different cities. All the donated pre-owned items are sold for a price range of Rs.10-50, which also helps our customers gain a sense of responsibility and maintain their dignity."
      />

      <Heading2 text="Yearly Sale" color="primary-500" />
      <Card2
        img={img6}
        deg={-3.953}
        text="Yearly sale for richer patrons which takes place twice a year to celebrate sustainable model of clothing. ​High end donated items are sold in these sales with an aim to normalize the concept of using used items in urban moneyed population. "      
        side='right'
/>
   

<Heading2 text="Revibe" color="primary-500" />
      <Card2
        img={img18}
        deg={4.566}
        text="“Revibe” is our new brand of upcycled product range that has all items made primarily from donated clothes which no longer can be reworn or reused. From shoes to clothes to other items, we try and fashion them into produces in our effort to be zero waste. We have trained women groups from slum areas in Ahmedabad & Vadodara to make various products out of waste clothes and items at stitching units developed in their slums. “Revibe” items are sold at our yearly sale and revenue earned is equally distributed amongst the women members."

/>
   

   <Heading2 text="The Godadi Project" color="primary-500" />
      <Card2
        img={img14}
        deg={-1}
        text="Godadi or blanket which we use during winters are stuffed with donated clothes, which are too worn out or torn to be resold. We have a stitching unit run by women from Ganeshnagar slum area in Ahmedabad that make these. Hence, there is zero waste from the clothes that are donated. We provide cloth & stitching material to women, they make the Godadis which are sold at Slum sales. The revenue earned from the sale is distributed equally amongst the women workers.        "
        side='right'
        />


    </section>
  );
};

export default AboutSection;
