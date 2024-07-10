import { defineStore } from "pinia";

interface Task {
  text: string;
  completed: boolean;
}

interface TodoState {
  tasks: Task[];
}

export const useTodoStore = defineStore(
  "todo",
  () => {
    const tasks = ref<Task[]>([]);

    const addTask = (task: string) => {
      tasks.value.push({ text: task, completed: false });
    };

    const removeTask = (index: number) => {
      tasks.value.splice(index, 1);
    };
    const toggleTask = (index: number) => {
      tasks.value[index].completed = !tasks.value[index].completed;
    };

    const editTask = (index: number, newText: string) => {
      tasks.value[index].text = newText;
    };
    return {
      tasks,
      addTask,
      removeTask,
      toggleTask,
      editTask,
    };
  },
  {
    persist: true,
  }
);
