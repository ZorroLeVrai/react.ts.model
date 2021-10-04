import { useReducer} from 'react';

type State = {
  count: number;
}

enum ActionType {
  Increment,
  Decrement
}

type Action = {
  type: ActionType;
}

function reducer(currentState: State, action: Action) : State
{
  switch (action.type)
  {
    case ActionType.Increment:
      return { count: currentState.count + 1 };
    case ActionType.Decrement:
      return { count: currentState.count - 1 };
    default:
      throw new Error("Invalid Action Type");
  }
}

function UseSimpleReducer()
{
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <>
      <button onClick={() => dispatch({type: ActionType.Decrement})}>-</button>
      <span>{state.count}</span>
      <button onClick={() => dispatch({type: ActionType.Increment})}>+</button>
    </>
  );
}

export default UseSimpleReducer;