<template>
  <CommodityDetail v-show="cx" :sale="sale" @closeCX="closeCX" />
  <div class="commodity" @click="CX">
    <div class="image-wrapper">
      <img :src="sale.src[0]" alt="圖片" :class="{ outOfStock: outOfStock }" />
      <div
        class="addToCart"
        v-if="sale.remaining > 0"
        @click.stop="ADDCONTENT({ sale: sale, quantity: 1 })"
      >
        加入購物車
      </div>
      <div class="soldOut" v-if="sale.remaining === 0">售完</div>
    </div>
    <div class="info-wrapper">
      <p class="info-name">{{ sale.title }}</p>
      <p class="info-price">NT$ {{ sale.price }}</p>
    </div>
  </div>
</template>

<script>
import CommodityDetail from "./CommodityDetail.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "Commodity",
  components: {
    CommodityDetail,
  },
  props: ["sale"],
  data() {
    return {
      cx: false,
    };
  },
  computed: {
    ...mapState("saleContents", ["saleContents", "guestContents"]),
    outOfStock() {
      return this.sale.remaining === 0;
    },
  },
  methods: {
    ...mapMutations("saleContents", { ADDCONTENT: "ADDCONTENT" }),
    CX() {
      console.log("CX123");
      this.cx = true;
    },
    closeCX() {
      this.cx = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.commodity {
  display: flex;
  flex-direction: column;
  justify-content: center;
  // justify-content: start;
  align-items: center;
  background: #353535;
  color: #fff;
  box-shadow: rgba(3, 8, 20, 0.1) 0px 0.15rem 0.5rem,
    rgba(2, 8, 20, 0.1) 0px 0.075rem 0.175rem;
  height: 330px;
  width: 100%;
  max-width: 320px;
  border-radius: 4px;
  transition: all 500ms;
  overflow: hidden;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  cursor: pointer;

  &:hover {
    box-shadow: rgba(2, 8, 20, 0.1) 0px 0.35em 1.175em,
      rgba(2, 8, 20, 0.08) 0px 0.175em 0.5em;
    transform: translateY(-3px) scale(1.1);
  }

  &:hover .addToCart {
    display: block;
  }
}

.image-wrapper {
  height: 240px;
  display: flex;
  position: relative;

  img {
    display: block;
    margin: auto;
    max-height: 240px;
    max-width: 100%;
  }

  .outOfStock {
    opacity: 0.4;
  }

  .addToCart {
    display: none;
    position: absolute;
    background-color: #000;
    color: #fff;
    width: 100%;
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 1.5rem;
    opacity: 0.85;
    bottom: 0;
  }

  .soldOut {
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: #000;
    color: #fff;
    opacity: 0.8;
    font-size: 1.2rem;
    padding: 2px 4px;
    border-radius: 5px;
  }
}

.info-wrapper {
  width: 100%;
  height: 90px;
  text-align: center;
  color: rgb(200, 195, 188);

  .info-name {
    height: 20px;
    width: 100%;
    margin: 10px 0;
  }

  .info-price {
    height: 20px;
    width: 100%;
    margin: 10px 0;
  }
}
</style>
