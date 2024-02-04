import React from 'react'

const DropLocCard = ({area='Area',address='7th Floor, Popular House Above ICICI Bank, Ashram Road Ahmedabad - 380009' , refPer='refperson' , contact='contact'}) => {
  return (
    <>
    <div className="green-card-container">
        <h6 className='bold'>{area}</h6>
        <h6>{address}</h6>
        <h6><span className='bold'>Reference Person :</span>{refPer}</h6>
        <h6> <span className='bold'>Contact :</span>{contact}</h6>
    </div>
    </>
  )
}

export default DropLocCard