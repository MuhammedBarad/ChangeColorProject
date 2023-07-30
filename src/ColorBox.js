import React from "react";
import "./colorbox.css";
const ColorBox = ({ NewColor }) => {
  return (
    <div className="colorBoxBody py-5">
      <div style={{ background: NewColor }} className="colorBox">
        <h1 className="text to_upper">{NewColor}</h1>
      </div>
    </div>

  );
};

export default ColorBox;
