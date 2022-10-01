# vue-loaders

[![npm version](https://badge.fury.io/js/@anedomansky%2Fvue-loaders.svg)](https://badge.fury.io/js/@anedomansky%2Fvue-loaders)

A collection of pure CSS loaders made available as Vue components.

## Features

Different CSS-loaders/-throbbers:

- `CirclingSquares.vue`:

![CirclingSquares](./assets/CirclingSquares.gif "CirclingSquares")

- `FlippingHexagons.vue`:

![FlippingHexagons](./assets/FlippingHexagons.gif "FlippingHexagons")

- `JumpingDots.vue`:

![JumpingDots](./assets/JumpingDots.gif "JumpingDots")

- `PulsatingDot.vue`:

![PulsatingDot](./assets/PulsatingDot.gif "PulsatingDot")

- `SpinningCircle.vue`:

![SpinningCircle](./assets/SpinningCircle.gif "SpinningCircle")

- `TravellingBar.vue`:

![TravellingBar](./assets/TravellingBar.gif "TravellingBar")

- `WanderingSquares.vue`:

![WanderingSquares](./assets/WanderingSquares.gif "WanderingSquares")

## Installation

`npm install @anedomansky/vue-loaders`

## Setup

```js
<script setup>
  import '/node_modules/@anedomansky/vue-loaders/dist/style.css';
  import { SpinningCircle } from '@anedomansky/vue-loaders';
</script>
```

## Usage

```jsx
<template>
  <SpinningCircle
    ref="loader"
    text="Please wait"
    container-classes="test-spinning-circle"
    item-classes="item-test-spinning-circle"
  ></SpinningCircle>
  <button type="button" @click="open">Open loader</button>
</template>
```

```js
<script setup>
  import '/node_modules/@anedomansky/vue-loaders/dist/style.css';
  import { SpinningCircle } from '@anedomansky/vue-loaders';
  import { ref } from 'vue';

  const loader = ref(null);

  let timer;

  function open() {
    loader.value.showLoader();
    timer = setTimeout(close, 60000);
  }

  function close() {
    loader.value.hideLoader();
    clearTimeout(timer);
  }
</script>
```

## Props

| Name | Type | Default | Description |
|-----------|---------|---------|---------|
| dialogClasses | string  | ''  | Additional CSS classes for the `<dialog>`-Element
| textClasses   | string  | ''  | Additional CSS classes for the `<p>`-Element
| containerClasses  | string  | ''  | Additional CSS classes for the `<div>`-Element
| itemClasses | string  | ''  | Additional CSS classes for the `<div>`-Element
| text  | string  | ''  | Loader text (e. g. 'Please wait')
| backgroundColor | string  | undefined | Color of the `<dialog>:backdrop`
| color | string  | '#485665' | Color of the loader
| animationDuration | string  | Loader dependent  | The duration of the loader's animation

## Customization

You can always overwrite CSS classes that the different loader's are composed of.

Additionally, you can overwrite specific CSS custom properties that the loaders are using:

- `CirclingSquares.vue`:
  - `--square`: The size of the square
- `FlippingHexagons.vue`:
  - `--hexagon`: The base size of the hexagon
- `JumpingDots.vue`:
  - `--dot`: The size of the dot
- `PulsatingDot.vue`:
  - `--pulsating-dot`: The size of the dot
- `SpinningCircle.vue`:
  - `--spinner`: The size of the circle
  - `--border-inner-spinner`: The size of the inner border
  - `--border-outer-spinner`: The size of the outer border
- `TravellingBar.vue`:
  - `--bar-height`: The height of the bar
  - `--bar-width`: The width of the bar
- `WanderingSquares.vue`:
  - `--square`: The size of the square
