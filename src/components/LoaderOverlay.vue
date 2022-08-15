<template>
  <div :class="['loader-overlay', additionalClassNames]">
    <div class="loader-overlay__shade"></div>
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, toRefs } from 'vue';

  const props = defineProps({
    additionalClassNames: {
      required: false,
      default: '',
      type: String,
    },
  });

  const { additionalClassNames } = toRefs(props);
</script>

<style scoped>
  .loader-overlay {
    display: grid;
    place-items: center;
    height: 100vh;
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
  }

  .loader-overlay__shade {
    background-color: #777;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
