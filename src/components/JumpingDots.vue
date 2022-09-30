<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="['jumping-dots', containerClasses]">
      <loader-item :class="['jumping-dot', itemClasses]"></loader-item>
      <loader-item :class="['jumping-dot', itemClasses]"></loader-item>
      <loader-item :class="['jumping-dot', itemClasses]"></loader-item>
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
      default: '1s',
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
  .jumping-dots {
    grid-template-columns: repeat(3, 1fr);
  }

  .jumping-dot::before {
    --dot: 3.5vmin;
    --dot-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);

    animation-name: jump;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    background-color: var(--dot-color);
    border-radius: 50%;
    height: var(--dot);
    width: var(--dot);
  }

  .jumping-dot:nth-of-type(2)::before {
    animation-name: jump;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
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
