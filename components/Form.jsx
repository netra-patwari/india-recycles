"use client";

import React, { useState } from "react";
import CTA2 from "./CTA2";

import Image from 'next/image';


import ContactImg2 from "@/img/contact/contact_us_2.webp";
import ContactImg3 from "@/img/contact/contact_us_3.webp";
import ContactImg4 from "@/img/contact/contact_us_4.webp";
import ContactImg5 from "@/img/contact/contact_us_5.webp";


const Form = () => {
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [objective, setObjective] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPhoneNumber, setIsValidPhoneNumber] = useState(true);
  const [isFormValid, setIsFormValid] = useState(true);

  const handleEmailChange = (event) => {
    const enteredEmail = event.target.value;
    setEmail(enteredEmail);

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValidEmail(emailRegex.test(enteredEmail));
  };

  const handlePhoneNumberChange = (event) => {
    let enteredValue = event.target.value;
    enteredValue = enteredValue.replace(/\D/g, '');

    if (enteredValue.length > 10) {
      enteredValue = enteredValue.slice(0, 10);
    }

    setPhoneNumber(enteredValue);

    const phoneNumberRegex = /^\d{10}$/;
    setIsValidPhoneNumber(phoneNumberRegex.test(enteredValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const isEmailValid = isValidEmail && email.trim() !== "";
    const isPhoneNumberValid = isValidPhoneNumber && phoneNumber.trim() !== "";
    const isNameValid = name.trim() !== "";
    const isCityValid = city.trim() !== "";
    const isObjectiveValid = objective.trim() !== "";
  
    const isFormValid = isEmailValid && isPhoneNumberValid && isNameValid && isCityValid && isObjectiveValid;
    
    setIsFormValid(isFormValid);
  
    if (isFormValid) {
      setName("");
      setCity("");
      setEmail("");
      setPhoneNumber("");
      setObjective("");
    } 
  };
  

  return (
    <>
    <div className="form-section">
      <Image src={ContactImg2} className="form-img img-1"/>
      <Image src={ContactImg3} className="form-img img-2"/>

    <form action="" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-card">
          <h4>Contact Us</h4>

          <div className="contact-form-div">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
            {!isFormValid && !name.trim() && <span className="red">Name is required.</span>}
          </div>

          <div className="contact-form-div">
            <label htmlFor="city">City</label>
            <input type="text" id="city" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
            {!isFormValid && !city.trim() && <span className="red">City is required.</span>}
          </div>

          <div className="contact-form-div">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} />
            {!isFormValid && (!email.trim() || !isValidEmail) && <span className="red">Enter a valid email address.</span>}
          </div>

          <div className="contact-form-div">
            <label htmlFor="phone_number">Phone number</label>
            <input type="tel" id="phone_number" name="phone_number" value={phoneNumber} onChange={handlePhoneNumberChange} />
            {!isFormValid && (!phoneNumber.trim() || !isValidPhoneNumber) && <span className="red">Enter a valid phone number.</span>}
          </div>

          <div className="contact-form-div">
            <label htmlFor="objective">Join Us</label>
            <select id="objective" name="objective" value={objective} onChange={(e) => setObjective(e.target.value)}>
            <option value="" disabled selected className="default-option">HOW WOULD YOU LIKE TO JOIN US?</option>
              <option value="volunteer">Volunteer</option>
              <option value="drop-location">Drop Location</option>
              <option value="collaboration">Collaboration</option>
              <option value="other">Others</option>
            </select>
            {!isFormValid && !objective.trim() && <span className="red">Select an option to join us.</span>}
          </div>

          <div className="contact-form-div">
            <CTA2 title="SUBMIT" />
          </div>
        </div>
      </form>
      <Image src={ContactImg4} className="form-img img-3"/>
      <Image src={ContactImg5} className="form-img img-4"/>
    </div>

    </>
  );
};

export default Form;

