<template>
  <dialog ref="loader" :class="['loader-box', additionalClassNames]">
    <slot></slot>
    <p :class="['loader-text', additionalLoaderTextClassNames]">
      {{ loaderText }}
    </p>
  </dialog>
</template>

<script setup lang="ts">
  import { defineProps, ref, toRefs } from 'vue';

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

  const loader = ref<HTMLDialogElement | null>(null);

  function showLoader() {
    loader.value?.showModal();
  }

  function hideLoader() {
    loader.value?.close();
  }

  defineExpose({
    showLoader,
    hideLoader,
  });
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

  dialog::backdrop {
    background-color: #777;
    opacity: 0.3;
  }

  dialog:not([open]) {
    display: none;
  }

  .loader-text {
    margin: 0;
    word-break: break-word;
  }
</style>
