<template>
  <div :class="['big-card', color, image]">
    <div class="card-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import RegularButton from './RegularButton';

export default {
  name: 'SmallCard',

  components: { RegularButton },

  props: {
    image: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'purple',
    },
  },
};
</script>

<style lang="scss" scoped>
.big-card {
  width: 100%;
  height: auto;
  padding: 0 4px 4px 0;
  background: transparent;
  position: relative;

  &::before {
    content: '';
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background-color: #7147dd;
    opacity: 0.3;
    position: absolute;
    left: 8px;
    top: 8px;
  }
  &::after {
    content: '';
    width: calc(100% - 8px);
    height: calc(100% - 8px);
    background-color: white;
    position: absolute;
    left: 0;
    top: 0;

    background-position: -16px 50px;
    background-repeat: no-repeat;
    background-size: 248px 302px;

    -moz-transform: scaleX(-1);
    -o-transform: scaleX(-1);
    -webkit-transform: scaleX(-1);
    transform: scaleX(-1);
    filter: FlipH;
    -ms-filter: "FlipH";

    @media (max-width: 992px) {
      background-image: none !important;
    }
  }

  img {
    display: inline-block;
    width: 100%;
    height: auto;
    z-index: 2;
  }

  .card-content {
    position: relative;
    z-index: 2;
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

  &.mi::after {
    background-image: url('../assets/mi.svg');
  }
  &.mizs::after {
    background-image: url('../assets/mizs.svg');
  }
  &.mop::after {
    background-image: url('../assets/mop.svg');
  }
  &.mgrt::after {
    background-image: url('../assets/mgrt.svg');
  }
  &.mk::after {
    background-image: url('../assets/mk.svg');
  }
  &.mddsz::after {
    background-image: url('../assets/mddsz.svg');
  }
  &.mz::after {
    background-image: url('../assets/mz.svg');
  }
  &.mkgp::after {
    background-image: url('../assets/mkgp.svg');
  }
  &.mju::after {
    background-image: url('../assets/mju.svg');
  }
  &.mi::after {
    background-image: url('../assets/mi.svg');
  }
  &.mf::after {
    background-image: url('../assets/mf.svg');
  }
  &.mp::after {
    background-image: url('../assets/mp.svg');
  }
  &.mzz::after {
    background-image: url('../assets/mzz.svg');
  }
  &.mnz::after {
    background-image: url('../assets/mnz.svg');
  }

}
</style>
