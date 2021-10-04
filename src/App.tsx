import './App.css';
import {useState} from 'react';
import NavBar from './NavBar';
import MainPage from './MainPage';

function App()
{
  const [componentName, setComponentName] = useState("Home");

  return (
    <div className="flex-rows full-height align-center">
      <NavBar setComponentName={setComponentName}/>
      <MainPage componentName={componentName}/>
    </div>
  );
}

export default App;