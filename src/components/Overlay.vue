<template>
  <div class="loader-overlay"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.loader-overlay {
  align-items: center;
  background-color: #777;
  bottom: 0;
  display: flex;
  left: 0;
  opacity: 0.3;
  position: fixed;
  right: 0;
  top: 0;
}
</style>
