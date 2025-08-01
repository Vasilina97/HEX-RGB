import { useState } from 'react';
import ColorDisplay from './ColorDisplay';

const ColorConverter = () => {
  const [hexColor, setHexColor] = useState('#');
  const [rgbColor, setRgbColor] = useState('');
  const [error, setError] = useState(false);

  const handleHexChange = (e) => {
    const value = e.target.value;
    setHexColor(value);

    if (value.length === 7) {
      const isValid = /^#[0-9A-F]{6}$/i.test(value);
      if (isValid) {
        setError(false);
        const r = parseInt(value.substring(1, 3), 16);
        const g = parseInt(value.substring(3, 5), 16);
        const b = parseInt(value.substring(5, 7), 16);
        setRgbColor(`rgb(${r}, ${g}, ${b})`);
      } else {
        setError(true);
        setRgbColor('Ошибка!');
      }
    } else if (value.length > 7) {
      setError(true);
      setRgbColor('Ошибка!');
    } else {
      setRgbColor('');
    }
  };

  return (
    <div className="converter-container">
      <input
        type="text"
        value={hexColor}
        onChange={handleHexChange}
        maxLength={7}
        className="hex-input"
      />
      <ColorDisplay rgbColor={rgbColor} error={error} />
    </div>
  );
};

export default ColorConverter;