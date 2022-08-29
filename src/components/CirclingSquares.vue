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
      <loader-container :class="['circling-squares', loaderContainerClasses]">
        <loader-item
          :class="['circling-square', loaderItemClasses]"
        ></loader-item>
        <loader-item
          :class="['circling-square', loaderItemClasses]"
        ></loader-item>
        <loader-item
          :class="['circling-square', loaderItemClasses]"
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
  .circling-squares {
    display: block;
    height: 100%;
    place-items: normal;
    position: relative;
  }

  .circling-square {
    --square: 3vmin;
    --square-color: #485665;

    display: block;
    position: initial;
  }

  .circling-square::before {
    animation: square-circling-1 2s ease-in-out infinite;
    background-color: var(--square-color);
    height: var(--square);
    left: 10%;
    top: 10%;
    width: var(--square);
  }

  .circling-square:nth-of-type(2)::before {
    animation: square-circling-2 2s ease-in-out infinite;
    bottom: 0;
    left: 10%;
    top: calc(90% - var(--square));
  }

  .circling-square:nth-of-type(3)::before {
    animation: square-circling-3 2s ease-in-out infinite;
    background-color: var(--square-color);
    height: var(--square);
    left: calc(90% - var(--square));
    top: 10%;
    width: var(--square);
  }

  @keyframes square-circling-1 {
    0%,
    100% {
      top: 10%;
      left: 10%;
    }
    25% {
      top: 10%;
      left: calc(90% - var(--square));
    }
    50% {
      bottom: 0;
      left: calc(90% - var(--square));
      top: calc(90% - var(--square));
    }
    75% {
      bottom: 0;
      left: 10%;
      top: calc(90% - var(--square));
    }
  }

  @keyframes square-circling-2 {
    0%,
    100% {
      bottom: 0;
      left: 10%;
      top: calc(90% - var(--square));
    }
    25% {
      top: 10%;
      left: 10%;
    }
    50% {
      top: 10%;
      left: calc(90% - var(--square));
    }
    75% {
      bottom: 0;
      left: calc(90% - var(--square));
      top: calc(90% - var(--square));
    }
  }

  @keyframes square-circling-3 {
    0%,
    100% {
      top: 10%;
      left: calc(90% - var(--square));
    }
    25% {
      bottom: 0;
      left: calc(90% - var(--square));
      top: calc(90% - var(--square));
    }
    50% {
      bottom: 0;
      left: 10%;
      top: calc(90% - var(--square));
    }
    75% {
      top: 10%;
      left: 10%;
    }
  }
</style>
