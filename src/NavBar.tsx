import { NavLink, Link } from 'react-router-dom';

interface PropType
{
  setComponentName: React.Dispatch<React.SetStateAction<string>>
}

//{setComponentName}: PropType
function NavBar({setComponentName}:PropType)
{
  return (
    <div className="flex-fixed flex-columns full-height lightblue-background">
      <Link to="/Home" onClick={() => setComponentName("Home")}>Home</Link>
      <NavLink to="/useState" onClick={() => setComponentName("useState")}>useState</NavLink>
      <NavLink to="/useEffect" onClick={() => setComponentName("useEffect")}>useEffect</NavLink>
      <NavLink to="/useRef" onClick={() => setComponentName("useRef")}>useRef</NavLink>
    </div>
  );
}

export default NavBar;