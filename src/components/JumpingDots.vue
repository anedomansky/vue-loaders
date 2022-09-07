<template>
  <loader-overlay
    :additional-class-names="loaderOverlayClasses"
    :additional-shade-class-names="loaderShadeClasses"
  >
    <loader-box
      :additional-class-names="loaderBoxClasses"
      :additional-loader-text-class-names="loaderTextClasses"
      :loader-text="loaderText"
    >
      <loader-container :class="['jumping-dots', loaderContainerClasses]">
        <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
        <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
        <loader-item :class="['jumping-dot', loaderItemClasses]"></loader-item>
      </loader-container>
    </loader-box>
  </loader-overlay>
</template>

<script setup lang="ts">
  import LoaderOverlay from './LoaderOverlay.vue';
  import LoaderBox from './LoaderBox.vue';
  import LoaderItem from './LoaderItem.vue';
  import LoaderContainer from './LoaderContainer.vue';
  import { defineProps, toRefs } from 'vue';

  const props = defineProps({
    loaderOverlayClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderShadeClasses: {
      required: false,
      default: '',
      type: String,
    },
    loaderBoxClasses: {
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
  });

  const {
    loaderOverlayClasses,
    loaderShadeClasses,
    loaderBoxClasses,
    loaderTextClasses,
    loaderText,
    loaderContainerClasses,
    loaderItemClasses,
  } = toRefs(props);
</script>

<style scoped>
  .jumping-dots {
    grid-template-columns: repeat(3, 1fr);
  }

  .jumping-dot::before {
    --dot: 2vmin;
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
</style>
