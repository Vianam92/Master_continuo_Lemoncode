<template>
  <div>
    <input v-model="newTask" type="text" placeholder="Nueva tarea" />
    <button @click="addTask">Agregar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '../composables/todoApp'

const newTask = ref('')
const todoStore = useTodoStore()

const addTask = () => {
  if (newTask.value.trim()) {
    todoStore.addTask(newTask.value)
    newTask.value = ''
  }
}
</script>

<style></style>
