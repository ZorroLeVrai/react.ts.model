import React from 'react';
import { useLog } from './../UseContext/LogContext';
import CustomLogger from './CustomLogger';

type PropType = {
  counter: number;
}

function Counter({counter} : PropType)
{
  let logger = new CustomLogger(useLog());
  logger.log("Counter render");

  return (
    <div>
      {counter}
    </div>
  );
}

const OptimizedCounter = React.memo(Counter);

export default OptimizedCounter;