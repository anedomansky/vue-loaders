<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="loaderDialogClasses"
    :additional-loader-text-class-names="loaderTextClasses"
    :loader-text="loaderText"
    :loader-background-color="loaderBackgroundColor"
  >
    <loader-container :class="['jumping-dots', loaderContainerClasses]">
      <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
      <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
      <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
    </loader-container>
  </loader-dialog>
</template>

<script setup lang="ts">
  import LoaderDialog from './LoaderDialog.vue';
  import LoaderItem from './LoaderItem.vue';
  import LoaderContainer from './LoaderContainer.vue';
  import { defineProps, ref, toRefs } from 'vue';

  const props = defineProps({
    loaderDialogClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderTextClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderText: {
      required: false,
      default: '',
      type: String,
    },
    loaderContainerClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderItemClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderBackgroundColor: {
      required: false,
      default: undefined,
      type: String,
    },
  });

  const {
    loaderDialogClasses,
    loaderTextClasses,
    loaderText,
    loaderContainerClasses,
    loaderItemClasses,
    loaderBackgroundColor,
  } = toRefs(props);

  const loader = ref<InstanceType<typeof LoaderDialog> | null>(null);

  function showLoader() {
    loader.value?.showLoader();
  }

  function hideLoader() {
    loader.value?.hideLoader();
  }

  defineExpose({
    showLoader,
    hideLoader,
  });
</script>

<style scoped>
  .jumping-dots {
    grid-template-columns: repeat(3, 1fr);
  }

  .jumping-dot::before {
    --dot: 3.5vmin;
    --dot-color: #485665;

    animation: jump 1s ease-in-out infinite;
    background-color: var(--dot-color);
    border-radius: 50%;
    height: var(--dot);
    width: var(--dot);
  }

  .jumping-dot:nth-of-type(2)::before {
    animation: jump 1s ease-in-out infinite;
    animation-delay: -0.5s;
  }

  @keyframes jump {
    0%,
    100% {
      transform: translatey(-2vmin);
    }
    50% {
      transform: translatey(2vmin);
    }
  }

  @media screen and (min-width: 765px) {
    .jumping-dot::before {
      --dot: 2.5vmin;
    }
  }
</style>
