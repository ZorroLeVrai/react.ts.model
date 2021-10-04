import { Route, Switch, Redirect } from 'react-router-dom';
import Home from './Components/Home';
import UseState from './Components/UseState/UseState';
import UseEffect from './Components/UseEffect/UseEffect';
import UseRef from './Components/UseRef/UseRef';
import UseSimpleReducer from './Components/UseReducer/UseSimpleReducer';
import UseReducer from './Components/UseReducer/UseReducer';
import UseMemo from './Components/UseMemo/UseMemo';
import UseCallBack from './Components/UseCallback/UseCallback';
import UseImperativeHandle from './Components/UseImperativeHandle/UseImperativeHandle';
import RenderProps from './Components/RenderProps/RenderProps';
import WrappedComponentWithToolTip from './Components/HOC/WrappedComponentWithToolTip';
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
        <Route path="/useSimpleReducer" component={UseSimpleReducer} />
        <Route path="/useReducer" component={UseReducer} />
        <Route path="/useMemo" component={UseMemo} />
        <Route path="/useCallback" component={UseCallBack} />
        <Route path="/useImperativeHandle" component={UseImperativeHandle} />
        <Route path="/renderProps" component={RenderProps} />
        <Route path="/hoc" component={WrappedComponentWithToolTip} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/Home" />
        <Redirect to="/not-found"/>
      </Switch>
      <ComponentBadge componentName={componentName}/>
    </div>
  );
}