<template>
  <button :class="['regular-button', color]"><span>{{ caption }}</span></button>
</template>

<script>
export default {
  name: 'RegularButton',

  props: {
    caption: {
      type: String,
      default: 'caption missing',
    },
    color: {
      type: String,
      default: 'purple',
    },
  },
};
</script>

<style lang="scss" scoped>
.regular-button {
  width: 222px;
  height: 59px;
  background-color: transparent;
  color: #ffffff;

  position: relative;

  border: none;
  box-shadow: none;
  padding: 0;

  cursor: pointer;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;

  span {
    z-index: 4;
    display: block;
    position: relative;
    font-size: 20px;
    top: -3px;
  }

  &::before {
    content: '';
    width: 216px;
    height: 53px;
    background-color: #7147dd;
    opacity: 0.3;
    position: absolute;
    left: 6px;
    top: 6px;
  }
  &::after {
    content: '';
    width: 216px;
    height: 53px;
    background-color: #7147dd;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
  }

  &:hover {
    &::after {
      background-color: #26a6b5;
      transition: all 0.2s ease-in;
    }
    &::before {
      background-color: #26a6b5;
      opacity: 0.3;
      transition: all 0.2s ease-in;
      transform: rotate(360deg);
    }
  }

  &.green {
    &::before {
      background-color: #26a6b5;
      opacity: 0.3;
    }
    &::after {
      background-color: #26a6b5;
    }

    &:hover {
      &::after {
        background-color: #7147dd;
        transition: all 0.2s ease-in;
      }
      &::before {
        background-color: #7147dd;
        opacity: 0.3;
        transition: all 0.2s ease-in;
        transform: rotate(360deg);
      }
    }
  }
}
</style>
