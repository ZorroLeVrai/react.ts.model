import React, { useRef } from 'react';
import Counter from './Counter';

function UseImperativeHandle()
{
  type CounterHandle = React.ElementRef<typeof Counter>;
  const counterRef = useRef<CounterHandle>(null);

  return (
    <>
      <Counter ref={counterRef} />
      <button onClick={() => counterRef?.current?.increment()}>Another button</button>
    </>
  );
}

export default UseImperativeHandle;