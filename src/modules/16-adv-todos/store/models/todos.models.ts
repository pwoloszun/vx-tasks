export interface Todo {
  id: number;
  title: string;
  description?: string;
}

export type TodoParams = Partial<Todo>;

export enum TodoStatus {
  Persisted = 'ts-prs',
  Saving = 'ts-svg',
  Removing = 'ts-rmv',
  Editing = 'ts-edt',
}
