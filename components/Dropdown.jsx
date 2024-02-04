"use client"

import React, { useState } from "react";
import Select from "react-select";

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState();

  const optionList = [
    { value: "red", label: "Red" },
    { value: "green", label: "Green" },
    { value: "yellow", label: "Yellow" },
    { value: "blue", label: "Blue" },
    { value: "white", label: "White" }
  ];

  const customStyles = {
    control: (base, state) => ({
      ...base,
      fontFamily: 'Inter',
      fontSize: 'clamp(0.875rem, 1vw + .1rem, 1rem)',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '-0.03rem',
      backgroundColor: '#FBF5F0',
      border: '2px solid #008036',
      borderColor: state.isActive ? '#008036' : '#ccc',
      borderRadius: '8px',
      outline : 'none',
      '&:hover': {
        borderColor: '#008036',
      },
    }),
    menu: base => ({
      ...base,
      fontFamily: 'Inter',
      fontSize: 'clamp(0.875rem, 1vw + .1rem, 1rem)',
      fontStyle: 'normal',
      fontWeight: 700,
      lineHeight: '120%',
      letterSpacing: '-0.03rem',
      backgroundColor: '#FBF5F0',
      border: '3px solid #000',
      borderRadius: '8px',
      marginTop: '5px',
    }),
    option: (base, state) => ({
      ...base,
      padding: '10px 20px',
      color: state.isSelected ? '#FBF5F0' : '#000',
      backgroundColor: state.isSelected ? '#008036' : '',
      '&:hover': {
        backgroundColor: state.isSelected ? '#05B750' : '',
        backgroundColor :'#05B750',
        color:'#FBF5F0',
      },
    }),
  };
  
  
  function handleSelect(data) {
    setSelectedOptions(data);
  }

  return (
    <div className="app">
      <div className="dropdown-container">
        <Select
          classNamePrefix='filter'
          options={optionList}
          placeholder="Drop Location near your Area"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          // styles={customStyles}
        />
      </div>
    </div>
  );
}
