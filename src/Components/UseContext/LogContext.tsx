import React, {useState, useContext } from 'react';

const LogContext = createContext("LogContext", false);
const LogUpdateContext = createContextUpdate<boolean>("LogUpdateContext");

function createContext<T>(name: string, initValue: T)
{
  let context = React.createContext(initValue);
  context.displayName = name;
  return context;
}

function createContextUpdate<T>(name: string)
{
  return createContext(name, (value: T) => { console.log(`${name} is not initialized`)});
}

type PropType = {
  children: React.ReactNode
};

export function LogProvider({children}: PropType)
{
  const [isLogger, setIsLogger] = useState(() => false);

  return (
    <LogContext.Provider value={isLogger}>
      <LogUpdateContext.Provider value={setIsLogger}>
        {children}
      </LogUpdateContext.Provider>
    </LogContext.Provider>
  );
}

/** Costum hooks */
export function useLog()
{
  return useContext(LogContext);
}

export function useLogUpdate()
{
  return useContext(LogUpdateContext);
}
