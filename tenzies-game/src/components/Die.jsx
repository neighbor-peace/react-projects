import React from "react";

const Die = ({value}) => {
  
  return (
    <div className="die-face">
      <h2 className="die-number">{value}</h2>
    </div>
  );
}

export default Die;