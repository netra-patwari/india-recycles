"use client"
// import React, { useState } from "react";
// import Select from "react-select";

// export default function App() {
//   const [selectedOptions, setSelectedOptions] = useState();
  
//   const optionList = [
//     { value: "red", label: "Red" },
//     { value: "green", label: "Green" },
//     { value: "yellow", label: "Yellow" },
//     { value: "blue", label: "Blue" },
//     { value: "white", label: "White" }
//   ];

//   function handleSelect(data) {
//     setSelectedOptions(data);
//   }

//   return (
//     <div className="app">
//       <div className="dropdown-container">
//         <Select
//           options={optionList}
//           placeholder="Select color"
//           value={selectedOptions}
//           onChange={handleSelect}
//           isSearchable={true}
//           className="custom-dropdown" // Added a custom class for styling
//         />
//       </div>
//     </div>
//   );
// }


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
      borderColor: state.isFocused ? '#grey' : '#red',
      '&:hover': {
        borderColor: '#grey',
      }
    }),
    menu: base => ({
      ...base,
      backgroundColor: '#neutral-100',
      border: '5px solid #neutral-900',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      marginTop: '5px',
    }),
    option: (base, state) => ({
      ...base,
      padding: '10px 20px',
      color: '#neutral-900',
      backgroundColor: state.isSelected ? '#primary-600' : 'inherit',
      '&:hover': {
        backgroundColor: '#primary-100',
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
          options={optionList}
          placeholder="Select color"
          value={selectedOptions}
          onChange={handleSelect}
          isSearchable={true}
          styles={customStyles}
        />
      </div>
    </div>
  );
}
