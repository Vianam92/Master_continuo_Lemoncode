interface Tasks {
  text: string;
  completed: boolean;
}

export interface TodoState {
  tasks: Tasks[];
}
