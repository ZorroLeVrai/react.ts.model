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
      <NavLink to="/useSimpleReducer" onClick={() => setComponentName("useSimpleReducer")}>useReducer (Simple)</NavLink>
      <NavLink to="/useReducer" onClick={() => setComponentName("useReducer")}>useReducer</NavLink>
      <NavLink to="/useMemo" onClick={() => setComponentName("useMemo")}>useMemo</NavLink>
      <NavLink to="/useCallback" onClick={() => setComponentName("useCallBack")}>useCallback</NavLink>
      <NavLink to="/useImperativeHandle" onClick={() => setComponentName("useImperativeHandle")}>useImperativeHandle</NavLink>
      <NavLink to="/renderProps" onClick={() => setComponentName("renderProps")}>renderProps</NavLink>
      <NavLink to="/hoc" onClick={() => setComponentName("HOC")}>HeigherOrderComponent</NavLink>
    </div>
  );
}

export default NavBar;