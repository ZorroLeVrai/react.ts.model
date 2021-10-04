import { useState, useEffect } from 'react';

type PropType = {
  getItems : (val: number) => number[];
}

export default function List({ getItems } : PropType)
{
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    setItems(getItems(1));
    console.log("Update items");
  }, [getItems]);

  return (
    <>
      {items.map((item, index) => <div key={index}>{item}</div>)}
    </>
  );
}