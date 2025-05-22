import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = function () {
    setCount(count + 1);
  };
  const decrement = function () {
    if (count <= 0) {
      return;
    }
    setCount(count - 1);
  };
  return (
    <div className="border rounded p-4  m-3" style={{ maxWidth: '450px' }}>
      <h1 className="text-primary text-center border rounded border-secondary">
        {count}
      </h1>

      <button onClick={decrement} className="btn btn-danger m-2">
        -
      </button>
      <button onClick={increment} className="btn btn-primary">
        +
      </button>
    </div>
  );
};

export default Counter;
