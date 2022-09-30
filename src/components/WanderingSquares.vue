<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="containerClasses">
      <loader-item :class="['wandering-square', itemClasses]"></loader-item>
    </loader-container>
  </loader-dialog>
</template>

<script setup lang="ts">
  import LoaderDialog from './LoaderDialog.vue';
  import LoaderItem from './LoaderItem.vue';
  import LoaderContainer from './LoaderContainer.vue';
  import { defineProps, ref, toRefs } from 'vue';

  const props = defineProps({
    dialogClasses: {
      required: false,
      default: '',
      type: String,
    },
    textClasses: {
      required: false,
      default: '',
      type: String,
    },
    text: {
      required: false,
      default: '',
      type: String,
    },
    containerClasses: {
      required: false,
      default: '',
      type: String,
    },
    itemClasses: {
      required: false,
      default: '',
      type: String,
    },
    backgroundColor: {
      required: false,
      default: undefined,
      type: String,
    },
    color: {
      required: false,
      default: '#485665',
      type: String,
    },
    animationDuration: {
      required: false,
      default: '2s',
      type: String,
    },
  });

  const {
    dialogClasses,
    textClasses,
    text,
    containerClasses,
    itemClasses,
    backgroundColor,
    animationDuration,
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
    --square-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);
  }

  .wandering-square::before,
  .wandering-square::after {
    width: var(--square);
    height: var(--square);
    background-color: var(--square-color);
    animation-name: circling;
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    top: calc(50% - var(--square));
    left: calc(50% - var(--square));
  }

  .wandering-square::after {
    animation-name: circling-reverse;
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: alternate;
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
