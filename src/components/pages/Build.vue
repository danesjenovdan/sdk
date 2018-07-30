<template>
  <div id="build-page">
    <h1><span class="highlight">Sestavi koalicijo</span>, ki bo lahko zagotovila trdno vlado. A ne pozabi, da slednjo prinesejo le zadovoljni koalicijski partnerji ...</h1>
    <builder></builder>
  </div>
</template>

<script>
import Builder from '../Builder';
import TheFooter from '../Footer';

export default {
  name: 'Build',
  components: { Builder, TheFooter },
};
</script>

<style lang="scss" scoped>
#build-page {
  width: 100%;
  height: 100%;

  h1 {
    font-family: 'Overpass Mono', monospace;
    font-size: 38px;
    font-weight: 700;
    line-height: 48px;
    color: #070c2f;

    text-align: left;
    max-width: 861px;
  }
}
</style>

<style lang="scss">
  #footer {
    position: fixed;
    bottom: 0;
    left: 0;

    @media (max-width: 768px) {
      position: relative;
    }
  }
</style>
