export interface Task
{
  id: number;
  name: string;
  completed: boolean
}

export type State = {
  tasks: Task[];
}

export enum ActionType {
  AddTask,
  ToggleTask,
  DeleteTask
}

export type Action = {
  type: ActionType;
  payload: Task
}