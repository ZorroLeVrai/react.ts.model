import React, { useState, forwardRef, useImperativeHandle } from 'react';

type IncrementHandle = {
  increment: () => void
}

type PropType = {}

const Counter: React.ForwardRefRenderFunction<IncrementHandle, PropType> = (_, ref) =>
{
  const [count, setCount] = useState(0);
  useImperativeHandle(ref, () => ({
    increment
  }));

  function increment()
  {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      <button onClick={increment}>click</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default forwardRef(Counter);