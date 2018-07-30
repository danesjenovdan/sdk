<template>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2676.35 2623.4">
  <title>parlament</title>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <g id="Layer_2-2" data-name="Layer 2">
        <g id="Layer_1-2-2" data-name="Layer 1-2">
          <!-- circles -->
          <circle
            v-for="(circle, i) in  dz.seats"
            :key="circle.id"
            :cx="circle.cx"
            :cy="circle.cy"
            r="62"
            :class="i < numHighlighted ? 'highlighted' : ''"
          ></circle>
          <text :x="940 + numberOffset" y="1550">{{ numHighlighted > 0 ? numHighlighted : '' }}</text>
        </g>
      </g>
    </g>
  </g>
</svg>
</template>

<script>
import dz from '../assets/dz.json';

export default {
  name: 'DZVec',

  props: {
    numHighlighted: {
      type: Number,
      default: 0,
    },
  },

  data() {
    return {
      dz,
    };
  },

  computed: {
    numberOffset() {
      return this.numHighlighted > 9 ? 0 : 180;
    },
  },

  methods: {
  },

  mounted() {
  },
};
</script>

<style lang="scss" scoped>
  circle {
    fill: #ffffff;

    &.highlighted {
      fill: #26a6b5;
    }
  }
  text {
    font-size: 650px;
    font-weight: bold;
    fill: #7147dd;
  }
</style>
