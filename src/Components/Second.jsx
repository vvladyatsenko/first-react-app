import Input from './Input';
import { useState } from 'react';

export default function Second({ count }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  console.log(inputValue);

  const handleClick = () => {
    alert(`Input value: ${inputValue}`);
  };

  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <h1>Second Component</h1>
      <div style={{ fontSize: '50px', color: 'green', fontWeight: 900 }}>
        {count}
      </div>
      <hr />
      <Input
        text="Click Me"
        onClick={handleClick}
        placeholder="Enter something..."
        onChange={handleInputChange}
      ></Input>
    </div>
  );
}
