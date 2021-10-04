import { useState } from 'react';
import { LogProvider, useLog } from './../UseContext/LogContext';
import Counter from './Counter';
import Dummy from './Dummy';
import LogSetter from './LogSetter';
import CustomLogger from './CustomLogger';

function UseState()
{
  let doesLog = useLog();
  let logger = new CustomLogger(doesLog);
  const [counter, setCounter] = useState(() => getInitialCounter(logger, 0));

  function getInitialCounter(localLogger: CustomLogger, initialValue: number)
  {
    localLogger.log("Get initial counter");
    return initialValue;
  }

  function addToCounter(nb: number)
  {
    setCounter(prevCount => prevCount + nb);
  }

  logger.log("UseState render");

  return (
    <LogProvider>
      <h1>UseState example</h1>
      <LogSetter/>
      <Counter counter={counter}/>
      <div>
        <button onClick={() => addToCounter(-1)}>-</button>
        <button onClick={() => addToCounter(0)}>=</button>
        <button onClick={() => addToCounter(1)}>+</button>
      </div>
      <Dummy/>
    </LogProvider>
  );
}

export default UseState;