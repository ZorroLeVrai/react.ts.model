import React, { ChangeEvent, useReducer, useState } from 'react';
import TaskElement from './TaskElement';
import { Task, State, ActionType, Action } from './ReducerTypes';

function reducer(currentState: State, action: Action) : State
{
  switch (action.type)
  {
    case ActionType.AddTask:
      return {...currentState, tasks: [...currentState.tasks, action.payload] };
    case ActionType.ToggleTask:
      return {...currentState, tasks: currentState.tasks.map(task => task.id === action.payload.id ? {...task, completed: !task.completed} : task)};
    case ActionType.DeleteTask:
      return {...currentState, tasks: currentState.tasks.filter(task => task.id !== action.payload.id)};
    default:
      throw new Error("Invalid Action Type");
  }
}

function newTask(name: string) : Task
{
  return {
    id: Date.now(),
    name,
    completed: false
  };
}

function UseReducer()
{
  const [ todos, dispatch ] = useReducer(reducer, { tasks: []});
  const [ taskName, setTaskName ] = useState("");

  function handleOnChange(evt: ChangeEvent<HTMLInputElement>)
  {
    setTaskName(evt.target.value);
  }

  function handleSubmit(evt: React.FormEvent<HTMLFormElement>)
  {
    //prevent default behaviour
    evt.preventDefault();

    dispatch({ type: ActionType.AddTask, payload: newTask(taskName) });
    setTaskName("");
  }

  return (
    <>
      <form onSubmit={e => handleSubmit(e)}>
        <label htmlFor="taskName">Enter task</label>
        <input id="taskName" type="text" value={taskName} onChange={e => handleOnChange(e)}/>
      </form>
      {todos.tasks.map(task => {
        return <TaskElement key={task.id} task={task} dispatch={dispatch}/>
      })}
    </>
  );
}

export default UseReducer;