import Navbar from "@/components/Navbar"
import ContactGrid from "@/components/ContactGrid"
import BigCTA from "@/components/BigCTA"
import Footer from "@/components/Footer"
import Form from "@/components/Form"

const page = () => {
  return (
  <>
    <Navbar ></Navbar>
    <ContactGrid />
    <BigCTA theme='green'/>
    <Form />
    <Footer />
  </>
  )
}

export default page