<template>
  <div class="tiny-card">
    <img :src="`/sdk/static/sad/${imgSrc}`">
    <p class="caption">{{ caption }}</p>
  </div>
</template>

<script>
export default {
  name: 'TinyCard',

  props: {
    imgSrc: {
      type: String,
      default: '',
    },
    caption: {
      type: String,
      default: 'Blablabla',
    },
  },
};
</script>

<style lang="scss" scoped>
.tiny-card {
  width: 222px;
  height: 222px;
  padding: 0 4px 4px 0;
  background: transparent;
  position: relative;

  &:nth-child(2) {
    margin-left: 10px;
  }

  &::before {
    content: '';
    width: 216px;
    height: 216px;
    background-color: #7147dd;
    opacity: 0.3;
    position: absolute;
    left: 6px;
    top: 6px;
  }
  &::after {
    content: '';
    width: 216px;
    height: 216px;
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;
  }

  img {
    display: inline-block;
    width: calc(100% - 6px);
    height: auto;
    z-index: 2;
    position: relative;
    left: -3px;
  }

  .caption {
    color: #070c2f;
    font-family: 'Barlow', sans-serif;
    position: relative;
    z-index: 2;
    margin-top: 3px;
    padding-left: 4px;
    padding-right: 7px;
  }
}
</style>
