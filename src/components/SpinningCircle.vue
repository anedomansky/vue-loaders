<template>
  <loader-dialog
    ref="loader"
    :additional-class-names="loaderDialogClasses"
    :additional-loader-text-class-names="loaderTextClasses"
    :loader-text="loaderText"
  >
    <loader-container :class="loaderContainerClasses">
      <loader-item
        :class="['spinning-circle', loaderItemClasses]"
      ></loader-item>
    </loader-container>
  </loader-dialog>
</template>

<script setup lang="ts">
  import LoaderDialog from './LoaderDialog.vue';
  import LoaderItem from './LoaderItem.vue';
  import LoaderContainer from './LoaderContainer.vue';
  import { defineProps, ref, toRefs } from 'vue';

  const props = defineProps({
    loaderDialogClasses: {
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
    loaderDialogClasses,
    loaderTextClasses,
    loaderText,
    loaderContainerClasses,
    loaderItemClasses,
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
    --spinner-color: #485665;
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
    animation: spin 1s linear infinite;
  }

  .spinning-circle::after {
    border: var(--border-inner-spinner) solid transparent;
    border-top-color: var(--spinner-color);
    animation: spin 0.5s linear infinite reverse;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
