import { ChangeEvent } from 'react';
import { useLogUpdate } from './../UseContext/LogContext';

function LogSetter()
{
  let logSetter = useLogUpdate();

  function handleChange(evt: ChangeEvent<HTMLInputElement>)
  {
    console.log("define handleChange");
    logSetter(evt.target.checked);
  }

  return (
    <div>
      <input id="setLogger" type="checkbox" onChange={(evt) => handleChange(evt)}/>
      <label htmlFor="setLogger">Enable / Disable logger</label>
    </div>
  );
}

export default LogSetter;