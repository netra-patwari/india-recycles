'use client'
import Link from "next/link";


const CTA = ({title}) => {
  return (
    <>
   <button className="CTA">
        <Link className="link" href='/droplocation'>{title}</Link>
        
    </button>
    </>
  )
}

export default CTA