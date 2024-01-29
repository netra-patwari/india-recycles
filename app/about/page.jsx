import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlexyImgCard from "@/components/FlexyImgCard";
import Timeline from "@/components/Timeline";
import AboutSection from "@/components/AboutSection";
import Team from "@/components/Team";

import img1 from "@/img/about/about_page_1.webp";
import img2 from "@/img/about/about_page_2.webp";
import img3 from "@/img/about/about_page_3.webp";
import img4 from "@/img/about/about_page_4.webp";
import img5 from "@/img/about/about_page_5.webp";
import img6 from "@/img/about/about_page_6.webp";
import img7 from "@/img/about/about_page_7.webp";
import img8 from "@/img/about/about_page_8.webp";
import img9 from "@/img/about/about_page_9.webp";
import img10 from "@/img/about/about_page_10.webp";
import img11 from "@/img/about/about_page_11.webp";
import img12 from "@/img/about/about_page_12.webp";
import img13 from "@/img/about/about_page_13.webp";
import img14 from "@/img/about/about_page_14.webp";
import img15 from "@/img/about/about_page_15.webp";
import img16 from "@/img/about/about_page_16.webp";
import img17 from "@/img/about/about_page_17.webp";
 

const page = () => {
  return (
    <>
      <Navbar />
      <h1>Our Goal is to -------------</h1>
      <FlexyImgCard
        img={img5}
        caption="India Recycles is a campaign started with an aim to promote the sustainable model of various concepts surrounding the Reuse & Recycling of products through the collection of various pre-owned items as donations. The target is to bring this awareness to every community, class and society of the city."
      />

<FlexyImgCard
        img={img15}
        caption="The story behind India Recycles begins in a thrift store in New York. As a grad student, our founder Renu would often visit thrift stores to buy designer clothes at throwaway prices. Upon her return to India, she noticed that with the advent of fast fashion, a lot of clothes were being discarded at a very rapid rate in India. Hence, In 2017, Renu organized the first swap restricted to her friends, of pre owned items such as clothes, accessories, footwear, bags and so on in the city of Ahmedabad."
        side="right"
      />
      <Timeline />
      <AboutSection />
      <Team />

      <Footer />

    </>
  );
};

export default page;
