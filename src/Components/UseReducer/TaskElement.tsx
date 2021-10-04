import { Task, Action, ActionType } from './ReducerTypes';

type PropType = {
  task: Task;
  dispatch: React.Dispatch<Action>;
};

function getStyle(isCompleted: boolean)
{
  return {
    color: isCompleted ? "#AAA" : "#000"
  }
}

function handleToggle(task: Task, dispatch: React.Dispatch<Action>)
{
  dispatch({type: ActionType.ToggleTask, payload: task});
}

function handleDelete(task: Task, dispatch: React.Dispatch<Action>)
{
  dispatch({type: ActionType.DeleteTask, payload: task});
}

function TaskElement({task, dispatch} : PropType)
{
  return (
    <div>
      <span style={getStyle(task.completed)}>
        {task.name}
      </span>
      <button onClick={() => handleToggle(task, dispatch)}>Toggle</button>
      <button onClick={() => handleDelete(task, dispatch)}>Delete</button>
    </div>
  );
}

export default TaskElement;