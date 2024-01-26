import Main from "@/components/main"
import Navbar from '@/components/Navbar'
import NumBoard from "@/components/NumBoard"
import Ruleset1 from "@/components/Ruleset1"
import HowWeHelp from "@/components/HowWeHelp"
import BigCTA from "@/components/BigCTA"
import SocialProof from "@/components/SocialProof"
import Footer from "@/components/Footer"

function page() {
  return (
<>
<Navbar></Navbar>
    <Main />
    <Ruleset1 />
    <NumBoard />
    <HowWeHelp />
    <BigCTA />
    <SocialProof />
    <Footer />
</>
)
}

export default page
