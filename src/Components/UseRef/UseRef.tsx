import { useState, useEffect, useRef } from 'react';

function UseRef()
{
  const [ word, setWord ] = useState("");
  const nbRender = useRef(1);
  const previousWord = useRef("");
  const myInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nbRender.current += 1;
    previousWord.current = word;
  });

  function focusAndDelete()
  {
    setWord("");
    myInput.current?.focus();
  }

  return (
    <>
      <label htmlFor="word">Enter word</label>
      <input type="text" ref={myInput} value={word} id="word" onChange={e => setWord(e.target.value)}/>
      <p>My word is "{word}"</p>
      <p>My word was "{previousWord.current}"</p>
      <p>Component has been rendered {nbRender.current} time(s)"</p>
      <button onClick={focusAndDelete}>Focus and delete</button>
    </>
  )
}

export default UseRef;