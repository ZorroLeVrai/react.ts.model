import React, { useState, useCallback } from 'react';
import List from "./List";

export default function UseCallBack()
{
  const [number, setNumber] = useState(1);
  const [isDark, setIsDark] = useState(false);

  //Avoid creating a new callback each time - everytime a callback is created, it has a new reference => useEffect re-renders each time
  //when the array of dependencies contains `getItems`
  const getItems = useCallback((incrementor) => {
    return Array.from({length:5}, (_, index) => number + incrementor + index);
  }, [number]);

  const theme = {
    backgroundColor: isDark ? "#333" : "#FFF",
    color: isDark ? "#FFF" : "#333"
  };

  function handleChange(evt : React.ChangeEvent<HTMLInputElement>)
  {
    let val = evt.target.value;

    if (!val)
      return;

    let numVal = parseInt(val);
    if (!isNaN(numVal))
    {
      setNumber(numVal);
    }
  }

  return (
    <div style={theme}>
      <input type="number" value={number} onChange={handleChange} />
      <button onClick={() => setIsDark(prevIsDark => !prevIsDark)}>Toggle Theme</button>
      <List getItems={getItems}/>
    </div>
  );
}