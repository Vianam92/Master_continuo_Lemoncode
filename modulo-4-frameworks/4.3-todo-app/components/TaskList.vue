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

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    const tasks: any = [];

    const toggleTask = (index: number) => {};

    const removeTask = (index: number) => {};

    const editTask = (index: number) => {
      const newTaskText = prompt("Edit task:", tasks[index].text);
      if (newTaskText !== null) {
      }
    };
    return {
      tasks,
      toggleTask,
      removeTask,
      editTask,
    };
  },
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
button {
  margin-left: 0.5rem;
}
</style>
