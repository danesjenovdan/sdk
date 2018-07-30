<template>
  <div :class="['party-button', selected ? 'selected' : '', italic ? 'italic' : '', big ? 'big' : '', arrowed ? 'arrowed' : '']">
    {{ caption }}
  </div>
</template>

<script>
export default {
  name: 'PartyButton',

  props: {
    caption: {
      required: true,
      type: String,
    },
    selected: {
      default: false,
      type: Boolean,
    },
    italic: {
      default: false,
      type: Boolean,
    },
    big: {
      default: false,
      type: Boolean,
    },
    arrowed: {
      default: false,
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.party-button {
  position: relative;
  width: 92px;
  height: 34px;
  border: 2px solid #26a6b5;

  margin: 2px;

  color: #26a6b5;
  font-family: Barlow, sans-serif;
  font-size: 16px;
  font-weight: 500;
  line-height: 35px;

  cursor: pointer;

  &:hover {
    background-color: #26a7b552;
    color: #efcddc;
  }

  &.selected {
    background-color: #26a6b5;
    color: #efcddc;
  }

  &.italic {
    font-style: italic;
  }

  &.big {
    width: 270px;
  }

  &.arrowed.selected {
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: -2px;
      right: -40px;

      width: 0;
      height: 0;
      border-top: 20px solid transparent;
      border-right: 20px solid #ffffff;
      border-bottom: 20px solid transparent;
    }
  }
}
</style>
