import React from 'react'
import Image from "next/image";
import ContactImg1 from "@/img/contact/contact_us_1.webp";


const ContactGrid = () => {
  return (
    <div>
        <main className="contact-main">
            <div className="contact-main-grid">
                <div className="row">
                    <div className="container img-widget">
                    <Image 
                    src={ContactImg1}
                    className='fluid-img'
                    />
                    </div>
                    <div className="container">
                    <div className="info-widget">
                    <svg className='footer-icon'  width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M12 21.325q-.35 0-.7-.125t-.625-.375Q9.05 19.325 7.8 17.9t-2.087-2.762q-.838-1.338-1.275-2.575T4 10.2q0-3.75 2.413-5.975T12 2q3.175 0 5.588 2.225T20 10.2q0 1.125-.437 2.363t-1.275 2.575Q17.45 16.475 16.2 17.9t-2.875 2.925q-.275.25-.625.375t-.7.125M12 12q.825 0 1.413-.587T14 10q0-.825-.587-1.412T12 8q-.825 0-1.412.588T10 10q0 .825.588 1.413T12 12"/></svg>
                    <h5>India Recycles Wing-A, 13th Floor, Westgate, Near YMCA Club,SG Highway, Ahmedabad, Gujarat, 380015</h5>
                    </div>
                    </div>

                </div>
                <div className="row">
                    <div className="container">
                    <div className="info-widget">
                    <svg className='footer-icon'  width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863q-2.5-2.5-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"/></svg>
                    <h5>(M) +91  7202035700</h5><h5>(M) +91  9727988901</h5>
                    </div>
                    </div>

                    <div className="container">
                    <div className="info-widget">
                    <svg className='footer-icon'  width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm8-7.175q.125 0 .263-.038t.262-.112L19.6 8.25q.2-.125.3-.312t.1-.413q0-.5-.425-.75T18.7 6.8L12 11L5.3 6.8q-.45-.275-.875-.012T4 7.525q0 .25.1.438t.3.287l7.075 4.425q.125.075.263.113t.262.037"/></svg>
                    <h5>csr@infoanalytica.com</h5>
                    </div>
                    </div>


                </div>
            </div>
        </main>
    </div>
  )
}

export default ContactGrid