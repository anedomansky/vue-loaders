<template>
  <div className="loader-overlay">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({});
</script>

<style scoped>
  .loader-overlay {
    display: grid;
    place-items: center;
    background-color: #777;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
