<template>
  <div :class="['small-card', color]" :style="{ 'background-image': `url(${imgSrc})` }">
    <p class="caption">{{ caption }}</p>
    <regular-button :color="color"></regular-button>
  </div>
</template>

<script>
import RegularButton from './RegularButton';

export default {
  name: 'SmallCard',

  components: { RegularButton },

  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: 'Blablabla',
    },
    color: {
      type: String,
      default: 'purple',
    },
  },
};
</script>

<style lang="scss" scoped>
.small-card {
  width: 316px;
  height: 197px;
  padding: 0 4px 4px 0;
  background: transparent;
  position: relative;

  &::before {
    content: '';
    width: 310px;
    height: 188px;
    background-color: #7147dd;
    opacity: 0.3;
    position: absolute;
    left: 6px;
    top: 9px;
  }
  &::after {
    content: '';
    width: 310px;
    height: 188px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    display: inline-block;
    width: 100%;
    height: auto;
    z-index: 2;
  }

  .caption {
    font-family: 'Barlow', sans-serif;
    position: relative;
    z-index: 2;

    color: #7147dd;
    font-size: 24px;
    font-weight: 700;
  }

  .regular-button {
    z-index: 2;
    position: relative;
  }

  &.green {
    &::before {
      background-color: #26a6b5;
    }

    .caption {
      color: #26a6b5;
    }
  }
}
</style>
