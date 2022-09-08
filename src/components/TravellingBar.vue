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
      <loader-container :class="loaderContainerClasses">
        <loader-item
          :class="['travelling-bar', loaderItemClasses]"
        ></loader-item>
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
  .travelling-bar {
    --bar-height: 0.5vmin;
    --bar-width: 5vmin;
    --travelling-bar-color: #485665;
  }

  .travelling-bar::before {
    width: var(--bar-width);
    height: var(--bar-height);
    background-color: var(--travelling-bar-color);
    animation: bar 1s ease-in-out infinite;
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
</style>
