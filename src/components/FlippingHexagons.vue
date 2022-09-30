<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="['flipping-hexagons', containerClasses]">
      <loader-item :class="['flipping-hexagon', itemClasses]"></loader-item>
      <loader-item :class="['flipping-hexagon', itemClasses]"></loader-item>
      <loader-item :class="['flipping-hexagon', itemClasses]"></loader-item>
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
  .flipping-hexagons {
    grid-template-columns: repeat(3, 1fr);
  }

  .flipping-hexagon {
    --hexagon: 1.25vmin;
    /* 1:square root of 3 */
    --hexagon-border: calc(var(--hexagon) * 1.73205081);
    --hexagon-width: calc(var(--hexagon-border) * 2);
    --hexagon-height: calc(var(--hexagon) * 2);
    --hexagon-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);

    margin-top: var(--hexagon);
    height: var(--hexagon-height);
    width: var(--hexagon-width);
    position: relative;
    background-color: var(--hexagon-color);
    animation-name: slide;
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
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

  @media screen and (min-width: 765px) {
    .flipping-hexagon {
      --hexagon: 1vmin;
    }
  }
</style>
