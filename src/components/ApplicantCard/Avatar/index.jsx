import React from "react";
import "./Avatar.scss";
import setColor from "./ColorPicker";

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
