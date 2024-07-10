import { defineStore } from "pinia";

interface Task {
  text: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
}

export const useTodoStore = defineStore<"todo", TodoState>({
  id: "todo",
  state: (): TodoState => ({
    tasks: [],
  }),
  actions: {
    addTask(task: string) {
      this.tasks.push({ text: task, completed: false });
    },
    removeTask(index: number) {
      this.tasks.splice(index, 1);
    },
    toggleTask(index: number) {
      this.tasks[index].completed = !this.tasks[index].completed;
    },
    editTask(index: number, newText: string) {
      this.tasks[index].text = newText;
    },
  },
});
