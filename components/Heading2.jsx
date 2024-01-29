import React from 'react';

const heading2 = ({ text, color }) => {
  const className = color === 'primary-500' ? 'centered-text h2 h2-green' : 'centered-text h2 h2-black';

  return (
    <>
      <h2 className={`${className}`}>{text}</h2>
    </>
  );
};

export default heading2;
