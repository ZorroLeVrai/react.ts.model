import React, { useState } from 'react';

type PropType = {
  render: (count: number, incCount: () => void) => React.ReactNode
}

function Wrapper({render}: PropType)
{
  const [count, setCount] = useState(0);

  function incrementCount()
  {
    setCount(prevCount => prevCount + 1);
  }

  return (
    <div>
      {render(count, incrementCount)}
    </div>
  );
}

export default Wrapper;