<template>
  <div class="progress-bar-container">
    <div class="progress-text">{{ current }} / {{ goal }}</div>
    <div class="progress-bar">
      <div
        class="full"
        :style="{ width: `${(current / goal) * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProgressBar',

  props: {
    current: {
      type: Number,
      default: 50,
    },
    goal: {
      type: Number,
      default: 100,
    },
  },
};
</script>

<style lang="scss" scoped>
.progress-bar-container {
  width: 100%;

  .progress-text {
    color: #070c2f;
    font-family: 'Barlow', sans-serif;
    font-size: 20px;
    font-weight: 900;
    line-height: 34px;

    width: 100%;
    text-align: right;
  }

  .progress-bar {
    width: 100%;
    background-color: #c9a5dc;
    height: 27px;

    .full {
      height: 100%;
      background-color: #7147dd;
    }
  }
}
</style>
