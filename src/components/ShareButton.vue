<template>
  <button :class="['share-button', color, icon]"></button>
</template>

<script>
export default {
  name: 'ShareButton',

  props: {
    color: {
      type: String,
      default: 'purple',
    },
    icon: {
      type: String,
      default: 'fb',
    },
  },
};
</script>

<style lang="scss" scoped>
.share-button {
  width: 50px;
  height: 50px;
  color: #ffffff;

  border: none;
  box-shadow: none;
  padding: 0;

  display: inline-block;
  top: -10px;

  margin-left: 15px;

  cursor: pointer;
  font-family: 'Barlow', sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 30px;
  text-transform: uppercase;

  position: relative;
  &::before {
    content: '';
    width: 47px;
    height: 47px;
    background-color: #7147dd;
    opacity: 0.3;
    position: absolute;
    left: 3px;
    top: 3px;
  }
  &::after {
    content: '';
    width: 47px;
    height: 47px;
    background-color: #7147dd;
    position: absolute;
    left: 0;
    top: 0;

    background-position: center;
    background-repeat: no-repeat;
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
      transform: rotate(180deg);
    }
  }

  &.fb::after {
    background-image: url('../assets/facebook.svg');
    background-size: 50%;
  }
  &.tw::after {
    background-image: url('../assets/twitter.svg');
    background-size: 55%;
  }
  &.mail::after {
    background-image: url('../assets/mail.svg');
  }
}
</style>
