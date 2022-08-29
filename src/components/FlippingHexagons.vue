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
  }
</style>
