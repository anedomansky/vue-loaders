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
      <loader-container :class="['flipping-hexagons', loaderContainerClasses]">
        <loader-item
          :class="['flipping-hexagon', loaderItemClasses]"
        ></loader-item>
        <loader-item
          :class="['flipping-hexagon', loaderItemClasses]"
        ></loader-item>
        <loader-item
          :class="['flipping-hexagon', loaderItemClasses]"
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
  .flipping-hexagons {
    grid-template-columns: repeat(3, 1fr);
  }

  .flipping-hexagon {
    --hexagon: 1vmin;
    /* 1:square root of 3 */
    --hexagon-border: calc(var(--hexagon) * 1.73205081);
    --hexagon-width: calc(var(--hexagon-border) * 2);
    --hexagon-height: calc(var(--hexagon) * 2);
    --hexagon-color: #485665;

    margin-top: var(--hexagon);
    height: var(--hexagon-height);
    width: var(--hexagon-width);
    position: relative;
    background-color: var(--hexagon-color);
    animation: slide 2s linear infinite;
  }

  .flipping-hexagon:nth-of-type(2) {
    animation-delay: 0.25s;
  }

  .flipping-hexagon:nth-of-type(3) {
    animation-delay: 0.5s;
  }

  .flipping-hexagon::before,
  .flipping-hexagon::after {
    width: 0;
    height: 0;
    border-left: var(--hexagon-border) solid transparent;
    border-right: var(--hexagon-border) solid transparent;
    position: absolute;
  }

  .flipping-hexagon::before {
    border-bottom: var(--hexagon) solid var(--hexagon-color);
    top: calc(var(--hexagon) * -1);
  }

  .flipping-hexagon::after {
    content: '';
    border-top: var(--hexagon) solid var(--hexagon-color);
    bottom: calc(var(--hexagon) * -1);
  }

  @keyframes slide {
    0%,
    10% {
      opacity: 1;
      transform: perspective(140px) rotateX(180deg);
    }

    25%,
    75% {
      opacity: 0.6;
      transform: perspective(140px) rotateX(0deg);
    }

    90%,
    100% {
      opacity: 1;
      transform: perspective(140px) rotateY(-180deg);
    }
  }
</style>
