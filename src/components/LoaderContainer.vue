<template>
  <div :class="['loader-container', additionalClassNames]">
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
  .loader-container {
    display: grid;
    place-items: center;
  }

  .loader-container.jumping-dots,
  .loader-container.flipping-hexagons {
    grid-template-columns: repeat(3, 1fr);
  }
</style>
