<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="dialogClasses"
    :additional-loader-text-class-names="textClasses"
    :text="text"
    :background-color="backgroundColor"
  >
    <loader-container :class="containerClasses">
      <loader-item :class="['spinning-circle', itemClasses]"></loader-item>
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
  .spinning-circle {
    --spinner: 4vmin;
    --border-inner-spinner: 3px;
    --border-outer-spinner: calc(var(--border-inner-spinner) * 2);
    --spinner-color: v-bind(color);
    --animation-duration: v-bind(animationDuration);
  }

  .spinning-circle::before,
  .spinning-circle::after {
    width: var(--spinner);
    height: var(--spinner);
    border-radius: 50%;
  }

  .spinning-circle::before {
    border: var(--border-outer-spinner) solid var(--spinner-color);
    border-top-color: transparent;
    animation-name: spin;
    animation-duration: var(--animation-duration);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  .spinning-circle::after {
    border: var(--border-inner-spinner) solid transparent;
    border-top-color: var(--spinner-color);
    animation-name: spin;
    animation-duration: calc(var(--animation-duration) * 0.5);
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    animation-direction: reverse;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  @media screen and (min-width: 765px) {
    .spinning-circle {
      --spinner: 6vmin;
    }
  }
</style>
