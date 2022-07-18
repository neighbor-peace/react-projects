import React from "react";

const Die = ({value, isHeld, handleClick}) => {
  return (
    <div 
      className={isHeld ? "die-face held" : "die-face"}
      onClick={handleClick}
    >
      <h2 className="die-number">{value}</h2>
    </div>
  );
}

export default Die;