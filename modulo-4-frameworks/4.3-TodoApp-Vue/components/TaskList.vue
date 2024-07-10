<template>
   <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <button @click="toggleTask(index)">✔️</button>
      <button @click="removeTask(index)">❌</button>
      <button @click="editTask(index)">✏️</button>
    </li>
  </ul>
</template>

<script setup>
import { useTodoStore } from '../composables/todoApp';

const todoStore = useTodoStore()
const tasks = todoStore.tasks

const toggleTask = (index) => {
  todoStore.toggleTask(index)
}

const removeTask = (index) => {
  todoStore.removeTask(index)
}

const editTask = (index) => {
  const newTaskText = prompt('Edit task:', tasks[index].text)
  if (newTaskText !== null) {
    todoStore.editTask(index, newTaskText)
  }
}
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 0.5rem;
}
</style>
