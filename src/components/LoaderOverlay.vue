<template>
  <div :class="['loader-overlay', additionalClassNames]">
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
    background-color: #777;
    bottom: 0;
    left: 0;
    opacity: 0.3;
    position: fixed;
    right: 0;
    top: 0;
  }
</style>
