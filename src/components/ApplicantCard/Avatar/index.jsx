import React from "react";
import "./Avatar.scss";
import setColor from "./ColorPicker";

// const avatarColors = {
//   a: ["#E3E7F9", "#405493"],
//   b: ["#CEF0F4", "#34ADC6"],
//   c: ["#F0F4E1", "#ACAF36"],
//   d: ["#FEE8D3", "#E97428"],
// };

// const setColor = () => {
//   const keys = Object.keys(avatarColors);
//   return avatarColors[keys[(keys.length * Math.random()) << 0]];
// };

const avatarColor = setColor();
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
