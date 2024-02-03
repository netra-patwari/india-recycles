import Navbar from "@/components/Navbar"
import DropLoc from "@/components/DropLoc";
import Dropdown from "@/components/Dropdown";
import DropLocCard from "@/components/DropLocCard";

const page = () => {
  return (
   <>
    <Navbar ></Navbar>
    <DropLoc />
    <Dropdown />
    <DropLocCard />
   </>
  )
}

export default page