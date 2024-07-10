<template>
  <div class="flex justify-center items-center gap-x-2 gap-y-4">
    <input v-model="newTask" type="text" placeholder="Nueva tarea" />
    <button @click="addTask" class="">Agregar</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useTodoStore } from "../composables/todoApp";

const newTask = ref("");
const todoStore = useTodoStore();

const addTask = () => {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value);
    newTask.value = "";
  }
};
</script>

<style scoped>
input {
  padding: 0.2rem;
  margin-right: 0.5rem;
  border-bottom: 1px solid rgb(46, 41, 41);
}
button {
  padding: 0.5rem;
  background-color: rgba(3, 73, 92, 0.856);
  border-radius: 8px;
  color:white;
}
</style>
