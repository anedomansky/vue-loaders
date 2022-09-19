<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="loaderDialogClasses"
    :additional-loader-text-class-names="loaderTextClasses"
    :loader-text="loaderText"
    :loader-background-color="loaderBackgroundColor"
  >
    <loader-container :class="loaderContainerClasses">
      <loader-item
        :class="['wandering-square', loaderItemClasses]"
      ></loader-item>
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
  .wandering-square {
    --square: 3.5vmin;
    --square-color: #485665;
  }

  .wandering-square::before,
  .wandering-square::after {
    width: var(--square);
    height: var(--square);
    background-color: var(--square-color);
    animation: circling 2s linear infinite alternate;
    top: calc(50% - var(--square));
    left: calc(50% - var(--square));
  }

  .wandering-square::after {
    animation: circling-reverse 2s linear infinite alternate;
    top: 50%;
    left: 50%;
  }

  @keyframes circling {
    0%,
    100% {
      transform: none;
    }
    25% {
      transform: translate(0, 100%);
    }
    50% {
      transform: translate(100%, 100%);
    }
    75% {
      transform: translate(100%, 0);
    }
  }

  @keyframes circling-reverse {
    0%,
    100% {
      transform: none;
    }
    25% {
      transform: translate(0, -100%);
    }
    50% {
      transform: translate(-100%, -100%);
    }
    75% {
      transform: translate(-100%, 0);
    }
  }

  @media screen and (min-width: 765px) {
    .wandering-square {
      --square: 3vmin;
    }
  }
</style>
