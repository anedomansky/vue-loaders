<template>
  <div :class="['loader-box', additionalClassNames]">
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
  .loader-box {
    height: 15vmin;
    width: 15vmin;
    background-color: #fff;
    border-radius: 5px;
    z-index: 1;
    padding: 10px;
  }
</style>
