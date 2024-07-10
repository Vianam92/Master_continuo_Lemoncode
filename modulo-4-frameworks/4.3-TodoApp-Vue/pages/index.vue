<template>
  <div class="flex flex-col items-center  gap-x-8 gap-y-4">
    <AddTasks />
    <TaskList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style>
body {
  font-family: Arial, sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
}
</style>
