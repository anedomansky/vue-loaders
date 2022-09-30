<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="['circling-squares', containerClasses]">
      <loader-item :class="['circling-square', itemClasses]"></loader-item>
      <loader-item :class="['circling-square', itemClasses]"></loader-item>
      <loader-item :class="['circling-square', itemClasses]"></loader-item>
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
  .circling-squares {
    display: block;
    place-items: normal;
    position: relative;
  }

  .circling-square {
    --square: 4vmin;
    --square-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);

    display: block;
    position: initial;
  }

  .circling-square::before {
    animation-name: square-circling-1;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;
    background-color: var(--square-color);
    height: var(--square);
    left: 10%;
    top: 10%;
    width: var(--square);
  }

  .circling-square:nth-of-type(2)::before {
    animation-name: square-circling-2;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;
    bottom: 0;
    left: 10%;
    top: calc(90% - var(--square));
  }

  .circling-square:nth-of-type(3)::before {
    animation-name: square-circling-3;
    animation-duration: var(--animation-duration);
    animation-timing-function: ease-in-out;
    animation-iteration-count: infinite;
    animation-direction: normal;
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

  @media screen and (min-width: 765px) {
    .circling-square {
      --square: 3vmin;
    }
  }
</style>
