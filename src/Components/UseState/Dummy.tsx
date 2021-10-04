import React from 'react';
import { useLog } from './../UseContext/LogContext';
import CustomLogger from './CustomLogger';

function Dummy()
{
  let logger = new CustomLogger(useLog());
  logger.log("Dummy render");

  return (
    <div>
      Invariant component
    </div>
  );
}

//create an optimized Dummy
//const OptimizedDummy = React.memo(Dummy);
export default React.memo(Dummy);