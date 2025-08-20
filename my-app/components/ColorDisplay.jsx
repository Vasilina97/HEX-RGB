const ColorDisplay = ({ rgbColor, error }) => {
  const displayStyle = {
    backgroundColor: error ? 'transparent' : rgbColor,
    border: error ? '2px solid red' : 'none'
  };

  return (
    <div className="color-display" style={displayStyle}>
      <div className="color-value">{rgbColor}</div>
    </div>
  );
};

export default ColorDisplay;