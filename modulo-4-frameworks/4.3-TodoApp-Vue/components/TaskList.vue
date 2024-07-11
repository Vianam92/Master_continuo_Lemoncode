<template>
  <ul class="flex flex-col items-center gap-x-8 gap-y-4">
    <li
      v-for="(task, index) in tasks"
      :key="index"
      class="flex justify-between"
    >
      <span :class="{ completed: task.completed }">{{ task.text }}</span>
      <div>
        <button
          @click="toggleTask(index)"
          aria-label="Marcar Tarea como completada"
        >
          ✔️
          <span class="sr-only">Marcar tarea como completada</span>
        </button>
        <button @click="removeTask(index)" aria-label="Eliminar tarea">
          ❌
          <span class="sr-only">Eliminar tarea</span>
        </button>
        <button @click="editTask(index)" aria-label="Editar tarea">
          ✏️
          <span class="sr-only">Editar tarea</span>
        </button>
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
ul,
li {
  width: 100%;
}
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 0.5rem;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
