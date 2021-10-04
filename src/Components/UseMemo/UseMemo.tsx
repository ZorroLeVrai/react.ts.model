import { useState, useEffect, useMemo, ChangeEvent } from 'react';

export default function UseMemo()
{
  const [numberVal, setNumberVal] = useState(0);
  const [resultNumber, setResultNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  function timeoutFunc(result: number, delay: number) : Promise<number>
  {
    return new Promise((resolve, _) => {
      setTimeout((val) => resolve(result), delay);
    });
  }

  //useMemo for optimization : only necessary if the function returns a value
  useMemo(() => {
    timeoutFunc(2*numberVal, 2000)
      .then(value => setResultNumber(value));
  }, [numberVal]);

  //use the same `themeStyles` when possible to prevent `useEffect` from re-rendering
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: isDark ? 'black': 'white',
      color: isDark ? 'white': 'black'
    }
  }, [isDark]);

  useEffect(() => {
    console.log("Theme changed");
  }, [themeStyles]);

  function handleChange(evt : ChangeEvent<HTMLInputElement>)
  {
    let val = evt.target.value;

    if (!val)
      return;

    let numVal = parseInt(val);
    if (!isNaN(numVal))
    {
      setNumberVal(numVal);
    }
  }

  return (
    <>
      <input type="number" value={numberVal} onChange={handleChange} />
      <button onClick={() => setIsDark(prevIsDark => ! prevIsDark)}>Change Theme</button>
      <div style={themeStyles}>{resultNumber}</div>
    </>
  );
}
