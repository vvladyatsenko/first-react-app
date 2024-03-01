import { useState } from 'react';
import Second from './Second';

export default function First() {
  const [count, setCount] = useState(0);

  const btnStyle = {
    backgroundColor: 'red',
    width: '100px',
    height: '50px',
    borderRadius: '50%',
  };

  function countPlus() {
    setCount(count + 1);
  }
  return (
    <div style={{ margin: '0 auto', textAlign: 'center' }}>
      <h1>First Component</h1>
      <button style={btnStyle} onClick={countPlus}>
        Click! <span style={{ fontSize: '15px', color: 'white' }}>{count}</span>
      </button>
      <hr />
      <Second count={count}></Second>
    </div>
  );
}
