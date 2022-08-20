<template>
  <div :class="['loader-box', additionalClassNames]">
    <slot></slot>
    <p :class="['loader-text', additionalLoaderTextClassNames]">
      {{ loaderText }}
    </p>
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
    additionalLoaderTextClassNames: {
      required: false,
      default: '',
      type: String,
    },
    loaderText: {
      required: false,
      default: '',
      type: String,
    },
  });

  const { additionalClassNames, additionalLoaderTextClassNames, loaderText } =
    toRefs(props);
</script>

<style scoped>
  .loader-box {
    --box: 15vmin;
    --background-color: #fff;
    --z-index: 1;

    display: flex;
    flex-direction: column;
    height: var(--box);
    width: var(--box);
    background-color: var(--background-color);
    border-radius: 5px;
    z-index: var(--z-index);
    padding: 10px;
  }

  .loader-text {
    margin: 0;
    word-break: break-word;
  }
</style>
