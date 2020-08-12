import React from "react";
import "./Avatar.scss";

const avatarColors = {
  a: ["#E3E7F9", "#405493"],
  b: ["#CEF0F4", "#34ADC6"],
  c: ["#F0F4E1", "#ACAF36"],
  d: ["#FEE8D3", "#E97428"],
};

const setColor = (colorsObj) => {
  const keys = Object.keys(colorsObj);
  return colorsObj[keys[(keys.length * Math.random()) << 0]];
};

const avatarColor = setColor(avatarColors);
const avatarStyle = {
  backgroundColor: avatarColor[0],
};

const initialsStyle = {
  color: avatarColor[1],
};

const Avatar = ({ initials }) => {
  return (
    <div className="avatar-circle" style={avatarStyle}>
      <span className="initials" style={initialsStyle}>
        {initials}
      </span>
    </div>
  );
};

export default Avatar;
