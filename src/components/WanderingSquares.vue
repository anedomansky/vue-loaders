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
          :class="['wandering-square', loaderItemClasses]"
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
  .wandering-square {
    --square: 3vmin;
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
</style>
