import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FlexyImgCard from "@/components/FlexyImgCard";
import Timeline from "@/components/Timeline";
import AboutSection from "@/components/AboutSection";
import Team from "@/components/Team";

import img5 from "@/img/about/about_page_5.webp";
import img15 from "@/img/about/about_page_15.webp";

const page = () => {
  return (
    <>
      <Navbar />
      <h1>Our goal is to weave a sustainable future through recycled dreams.</h1>
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
