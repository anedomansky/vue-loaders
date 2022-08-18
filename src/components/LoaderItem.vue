<template>
  <div :class="['loader-item', additionalClassNames]"></div>
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
  .loader-item {
    position: relative;
    display: grid;
    place-items: center;
  }

  .loader-item::before,
  .loader-item::after {
    content: ' ';
    position: absolute;
  }
</style>
