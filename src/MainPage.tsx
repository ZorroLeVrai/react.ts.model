import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import UseState from './Components/UseState/UseState';
import UseEffect from './Components/UseEffect/UseEffect';
import UseRef from './Components/UseRef/UseRef';
import NotFound from './Components/NotFound';
import ComponentBadge, {ComponentName} from './ComponentBadge';

export default function MainPage({componentName}: ComponentName)
{
  return (
    <div className="flex-stretch relative-position">
      <Switch>
        <Route path="/Home" component={Home} />
        <Route path="/useState" component={UseState} />
        <Route path="/useEffect" component={UseEffect} />
        <Route path="/useRef" component={UseRef} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/Home" />
        <Redirect to="/not-found"/>
      </Switch>
      <ComponentBadge componentName={componentName}/>
    </div>
  );
}