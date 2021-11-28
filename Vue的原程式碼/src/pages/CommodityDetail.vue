<template>
  <div class="detail">
    <transition name="blur">
      <div class="g" v-show="blur" @click="switchBlur"></div>
    </transition>
    <transition name="blur">
      <div class="bigPicture" v-show="blur" @click="switchBlur">
        <img :src="showingPicture" alt="大張圖" />
      </div>
    </transition>

    <div class="flex">
      <div class="left" @click="displayMax">
        <img :src="showingPicture" @click="switchBlur" />
      </div>
      <div class="right">
        <h3>{{ sale.title }}</h3>
        <h4>NT$ {{ sale.price }}</h4>
        <div class="CommodityDescription">
          <p>商品敘述</p>
        </div>
        <div class="inputGroup">
          <h4>數量:</h4>
          <button @click="subQuantity">-</button>
          <!-- <p>{{ quantity }}</p> -->
          <div>{{ quantity }}</div>
          <!-- <input type="number" v-model.number="quantity" /> -->
          <button @click="addQuantity">+</button>
        </div>
        <button
          class="confirmAdd"
          @click="ADDCONTENT({ sale: sale, quantity: quantity })"
        >
          加入購物車
        </button>
        <h5>現庫存只剩下 {{ sale.remaining }} 件</h5>
        <div class="imgControl">
          <div class="imgGroup" ref="box">
            <img
              :src="img"
              :key="index"
              @click="switchPicture(img)"
              v-for="(img, index) of sale.src"
            />
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="close" @click="displaySmallSellBox">X</div> -->
    <div class="close" @click="close">X</div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "detail",
  props: ["sale"],
  data() {
    return {
      showingPicture: this.sale.src[0],
      blur: false,
      quantity: 1,
    };
  },
  methods: {
    ...mapMutations("saleContents", { ADDCONTENT: "ADDCONTENT" }),
    close() {
      this.$emit("closeCX");
    },
    switchBlur() {
      this.blur = !this.blur;
    },
    switchPicture(img) {
      this.showingPicture = img;
    },
    subQuantity() {
      if (this.quantity > 1) {
        this.quantity--;
      } else {
        this.quantity = 1;
      }
    },
    addQuantity() {
      if (this.sale.remaining > this.quantity) this.quantity++;
    },
  },
};
</script>

<style lang="scss" scoped>
$sideBarWidth: 310px;
$topBarHeight: 50px;

.detail {
  position: fixed;
  z-index: 10;
  left: $sideBarWidth;
  top: $topBarHeight;
  background-color: #000;
  height: calc(100vh - 50px);
  width: calc(100vw - 310px);
}

.g {
  position: fixed;
  backdrop-filter: blur(6px);
  z-index: 19;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
}

.bigPicture {
  z-index: 20;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  img {
    max-width: 100%;
  }
}

.flex {
  display: flex;

  .left {
    background-color: gray;
    // width: 285px;
    width: 50%;
    // height: 570px;
    height: 100vh;
    height: calc(100vh - 50px);
    position: relative;

    img {
      max-height: 100%;
      max-width: 100%;
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      margin: auto;
    }
  }

  .right {
    background-color: rgb(38, 42, 43);
    // width: 255px;
    // height: 540px;
    width: 50%;
    height: calc(100vh - 80px);
    margin: 15px;

    h3 {
      font-size: 20px;
      margin: 15px 0 0 0;
      text-align: left;
    }

    h4 {
      margin: 15px 0 0 0;
      text-align: left;
    }

    .CommodityDescription {
      height: 180px;
      width: 255px;

      p {
        margin: 10px 0 0 0;
        text-align: left;
      }
    }

    .inputGroup {
      // 讓button和input邊距為0
      font-size: 0;

      h4 {
        font-size: 18px;
        margin: 5px 0;
      }

      button {
        background-color: #000;
        color: #fff;
        height: 30px;
        width: 30px;
        border-radius: 5px 0 0 5px;
        font-size: 16px;
        border: 1px solid transparent;
        // 讓button和input高度相同
        vertical-align: middle;

        &:last-child {
          border-radius: 0 5px 5px 0;
        }
      }

      div {
        background-color: rgb(24, 26, 27);
        // color: rgb(178, 171, 161);
        color: #fff;
        height: 30px;
        display: inline-block;
        width: calc(50% - 62px);
        border: 1px solid #ccc;
        vertical-align: middle;
        text-align: center;
        font-size: 1rem;
        line-height: 30px;
      }
    }

    .confirmAdd {
      background-color: rgba(51, 51, 51, 0.95);
      color: #fff;
      border: 1px solid rgb(129, 120, 106);
      width: 255px;
      height: 40px;
      margin: 15px 0;
      border-radius: 5px;
      font-weight: 600;
      font-size: 20px;
    }

    h5 {
      color: red;
      font-size: 18px;
    }

    .imgControl {
      position: relative;
      width: 100%;
      // height: 118px;
      height: 118px;

      .a {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        left: 0;
        // margin: auto 0;
        width: 30px;
        height: 100px;
        line-height: 100px;
      }

      .ab {
        background-color: rgba(0, 0, 0, 0.6);
        position: absolute;
        top: 0;
        right: 0;
        // margin: auto 0;
        width: 30px;
        height: 100px;
        line-height: 100px;
      }

      .imgGroup {
        width: 100%;
        height: calc(50vh - 40px);
        display: grid;
        overflow: auto;
        grid-template-columns: 1fr 1fr 1fr;

        img {
          width: 100%;
          align-self: center;
        }
      }
    }
  }
}
.close {
  position: absolute;
  right: 0;
  top: 0;
  width: 35px;
  height: 35px;
  line-height: 35px;
  font-size: 35px;
  text-align: center;
  cursor: pointer;
}
.blur-enter-active,
.blur-leave-active {
  transition: all 0.3s;
}
.blur-enter-from,
.blur-leave-to {
  opacity: 0;
}
</style>
