<template>
  <dialog
    ref="loader"
    :class="['loader-dialog', additionalClassNames]"
    @cancel.prevent
  >
    <slot></slot>
    <p :class="['loader-text', additionalTextClassNames]">
      {{ text }}
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
    additionalTextClassNames: {
      required: false,
      default: '',
      type: String,
    },
    text: {
      required: false,
      default: '',
      type: String,
    },
    backgroundColor: {
      required: false,
      default: '#fff',
      type: String,
    },
  });

  const { additionalClassNames, additionalTextClassNames, text } =
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
  .loader-dialog {
    --box: 20vmin;
    --background-color: v-bind(backgroundColor);

    display: flex;
    flex-direction: column;
    height: var(--box);
    width: var(--box);
    background-color: var(--background-color);
    border-radius: 5px;
    padding: 10px;
    border: 0;
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
    width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media screen and (min-width: 765px) {
    .loader-dialog {
      --box: 15vmin;
    }

    .loader-text {
      word-break: break-word;
      width: auto;
      text-overflow: initial;
      white-space: initial;
      overflow: initial;
    }
  }
</style>
