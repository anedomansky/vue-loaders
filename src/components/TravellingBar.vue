<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="containerClasses">
      <loader-item :class="['travelling-bar', itemClasses]"></loader-item>
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
  .travelling-bar {
    --bar-height: 1vmin;
    --bar-width: 10vmin;
    --travelling-bar-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);
  }

  .travelling-bar::before {
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: var(--travelling-bar-color);
    animation-name: bar;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
  }

  @keyframes bar {
    0%,
    33%,
    66.1%,
    100% {
      transform-origin: left;
    }
    0%,
    33%,
    66%,
    100% {
      transform: scaleX(0);
    }
    33.1%,
    66% {
      transform-origin: right;
    }
    25%,
    33% {
      transform: scaleX(1);
    }
  }

  @media screen and (min-width: 765px) {
    .travelling-bar {
      --bar-height: 0.75vmin;
      --bar-width: 7vmin;
    }
  }
</style>
