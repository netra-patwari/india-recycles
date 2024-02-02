import Navbar from "@/components/Navbar"
import DonateMain from "@/components/DonateMain"
import Card2 from "@/components/Card2"
import Heading2 from "@/components/Heading2";

import donateImg1 from "@/img/donate/donate_page_1.webp";
import donateImg4 from "@/img/donate/donate_page_4.webp";
import donateImg5 from "@/img/donate/donate_page_5.webp";


const page = () => {
  return (
   <>
    <Navbar ></Navbar>
    <DonateMain />
    <Heading2 text={'Medical Camps'} color={'primary-500'}/>
    <Card2 img={donateImg4} text={'1000+ people benefitted from 5 medical camps conducted across 3 slums named Ganeshnagar, Krishnadham EWS and Gokul Awas EWS. The medical camps conducted were inclusive of the check ups such as general, orthopedic, gynae and eye check up.'}/>
    <Heading2 text={'Educational Assistance'} color={'primary-500'}/>
    <Card2 img={donateImg5} text={'Underprivileged children of informal workers sometimes are unable attend school regularly due to financial constraints. On regular basis, we provide educational scholarships to such children, so, they are able to re-enroll and attend school regularly. As of now, India Recycles has supported 25+ students with educational scholarships.'} side={'right'}/>
    <Heading2 text={'Livelihood Programs'} color={'primary-500'}/>
    <Card2 img={donateImg1} text={'We conduct financial literacy camps, identity documentation camps, hygiene and menstrual awareness camps, cleanliness camps and various others to create awareness about various socio-economic components necessary for financial growth and social development of residents of slums. We have conducted 5+ camps across 2 slums.'}/>

   </>
  )
}

export default page