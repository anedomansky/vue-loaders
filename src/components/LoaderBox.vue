<template>
  <div className="loader-box">
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({});
</script>

<style scoped>
  .loader-box {
    height: 15vmin;
    width: 15vmin;
    background-color: #fff;
    border-radius: 5px;
  }
</style>
