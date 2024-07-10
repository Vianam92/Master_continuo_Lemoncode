<template>
  <ul class="flex flex-col items-center gap-x-8 gap-y-4">
    <li v-for="(task, index) in tasks" :key="index" class="flex justify-between">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <div>
        <button @click="toggleTask(index)">✔️</button>
        <button @click="removeTask(index)">❌</button>
        <button @click="editTask(index)">✏️</button>
      </div>
    </li>
  </ul>
</template>

<script setup>
import { useTodoStore } from "../composables/todoApp";

const todoStore = useTodoStore();
const tasks = todoStore.tasks;

const toggleTask = (index) => {
  todoStore.toggleTask(index);
};

const removeTask = (index) => {
  todoStore.removeTask(index);
};

const editTask = (index) => {
  const newTaskText = prompt("Edit task:", tasks[index].text);
  if (newTaskText !== null) {
    todoStore.editTask(index, newTaskText);
  }
};
</script>

<style scoped>
ul, li{
  width: 100%;
}
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 0.5rem;
}
</style>
