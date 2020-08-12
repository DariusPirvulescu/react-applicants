const avatarColors = {
  a: ["#E3E7F9", "#405493"],
  b: ["#CEF0F4", "#34ADC6"],
  c: ["#F0F4E1", "#ACAF36"],
  d: ["#FEE8D3", "#E97428"],
};

const setColor = () => {
  const keys = Object.keys(avatarColors);
  return avatarColors[keys[(keys.length * Math.random()) << 0]];
};

module.exports = setColor;
