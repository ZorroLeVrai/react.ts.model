import { useState, useEffect } from 'react';

export default function UseEffect()
{
  const [resourceType, setResourceType] = useState("posts");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [items, setItems] = useState<object[]>([]);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  //onMount
  useEffect(() => {
    window.addEventListener('resize', handleResize);

    //onUnmount(): clean up code
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json));
  }, [resourceType]);

  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <p>{windowWidth}</p>
      <h1>{resourceType}</h1>
      {items.slice(0,20).map((item, index) => <pre key={index}>{jsonItemToString(item)}</pre>)}
    </>
  );
}

function jsonItemToString(item : object): string
{
  return truncStr(JSON.stringify(item));

  function truncStr(str: string, nbChar: number = 50): string
  {
    if (str.length <= nbChar)
      return str;
    
    return `${str.substr(0, nbChar)}...`;
  }
}