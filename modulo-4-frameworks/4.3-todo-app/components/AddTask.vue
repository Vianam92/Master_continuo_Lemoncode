<template>
  <div>
    <input v-model="newTask" type="text" placeholder="Nueva tarea" />
    <button @click="addTask">Agregar</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useTodoStore } from "../store/todo";

export default defineComponent({
  setup() {
    const newTask = ref<string>("");
    const todoTask = useTodoStore();

    const addTask = () => {
      if (newTask.value.trim()) {
        newTask.value = "";
      }
    };

    return {
        newTask,
        addTask
    }
  },
});
</script>

<style></style>
