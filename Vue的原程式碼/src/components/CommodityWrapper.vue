<template>
  <div class="wrapper" v-show="!isCCtrue">
    <Commodity v-for="sale in showSC" :key="sale.id" :sale="sale" />
  </div>
  <div class="ccWrapper" v-show="isCCtrue">
    <ChangeCommodity />
  </div>
</template>

<script>
import ChangeCommodity from "../pages/ChangeCommodity.vue";
import Commodity from "../pages/Commodity.vue";
import { mapGetters, mapState } from "vuex";
export default {
  name: "goods",
  components: {
    Commodity,
    ChangeCommodity,
  },
  computed: {
    ...mapState("homepage", ["goodsType"]),
    ...mapGetters("saleContents", ["showSC"]),
    isCCtrue() {
      return this.goodsType === "changeCommodity";
    },
  },
};
</script>

<style scoped>
.wrapper {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  /* grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); */
  /* grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); */
  margin: 1.2rem;
  height: calc(100vh - 120px);
}
.ccWrapper {
  width: 100vh;
  margin: 0 auto;
}
</style>
