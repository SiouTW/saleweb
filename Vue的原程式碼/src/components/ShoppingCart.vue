<template>
  <!-- <div class="scWrapper" v-show="SC"> -->
  <transition name="move">
    <!-- <div class="scWrapper" :class="{ move: SC }"> -->
    <div class="scWrapper" v-show="SC">
      <div class="sc">購物車</div>
      <div class="scIntroduction">
        <div class="scImg">圖片</div>
        <div class="scTitle">名稱</div>
        <div class="scPrice">價格</div>
        <div class="scNum">數量</div>
        <div class="scNum">小計</div>
        <div class="scDelete">刪除</div>
      </div>

      <ul>
        <li v-for="guestContent of guestContents" :key="guestContent.id">
          <div class="scImg">
            <img :src="guestContent.src[0]" />
          </div>
          <div class="scTitle">
            <div class="inlineBlock">{{ guestContent.title }}</div>
          </div>
          <div class="scPrice">
            <div class="inlineBlock">NT:{{ guestContent.price }}</div>
          </div>
          <div class="scNum">
            <div class="inlineBlock">{{ guestContent.num }}</div>
          </div>
          <div class="scNum">
            <div class="inlineBlock">
              {{ guestContent.price * guestContent.num }}
            </div>
          </div>
          <div class="scDelete">
            <div class="inlineBlock" @click="DELETECONTENT(guestContent)">
              刪除
            </div>
          </div>
        </li>
        <li class="scTotlePrice" v-show="isgcEmpty">
          <div>總計: {{ countTotal }}</div>
          <!-- <div>總計:</div> -->
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "ShoppingCart",
  computed: {
    ...mapState("saleContents", ["guestContents"]),
    ...mapState("homepage", ["SC"]),
    isgcEmpty() {
      if (this.guestContents.length === 0) {
        return false;
      } else {
        return true;
      }
    },
    countTotal() {
      let x = 0;
      for (let i = 0; i < this.guestContents.length; i++) {
        x = x + this.guestContents[i].num * this.guestContents[i].price;
      }
      return x;
    },
  },
  methods: {
    ...mapMutations("saleContents", { DELETECONTENT: "DELETECONTENT" }),
  },
};
</script>

<style lang="scss" scoped>
$side-bar-shoppingcart-width: 375px;
// sc = shoppingCart
.scWrapper {
  background-color: #000;
  color: #fff;
  position: fixed;
  z-index: 10;
  left: 0;
  height: 100vh;
  width: $side-bar-shoppingcart-width;
  overflow: auto;

  .sc {
    background-color: #2f3640;
    height: 50px;
    line-height: 50px;
    font-size: 22px;
  }

  .scIntroduction {
    background-color: #353b48;
    display: flex;
  }

  ul {
    list-style: none;

    li {
      display: flex;
      height: 120px;
      line-height: 120px;
      border-bottom: 1px solid #718093;
      justify-content: center;
      align-items: center;

      img {
        display: block;
        margin: auto;
        max-height: 120px;
        max-width: 99px;
      }
    }
  }

  .scImg {
    width: 100px;
    height: 100%;
    border-right: 1px #718093 solid;
    display: flex;
    align-items: center;
  }

  .scTitle {
    width: 75px;
    border-right: 1px #718093 solid;

    .inlineBlock {
      width: 74px;
    }
  }

  .scPrice {
    width: 65px;
    border-right: 1px #718093 solid;

    .inlineBlock {
      width: 64px;
    }
  }

  .scNum {
    width: 45px;
    border-right: 1px #718093 solid;

    .inlineBlock {
      width: 45px;
    }
  }

  .scDelete {
    width: 45px;

    .inlineBlock {
      width: 44px;
      cursor: pointer;
      padding: 5px 0;

      &:hover {
        color: red;
      }
    }
  }

  .inlineBlock {
    background: #718093;
    display: inline-block;
    line-height: 1;
    vertical-align: middle;
    margin: auto;
    cursor: default;
  }

  .scTotlePrice {
    height: 50px;
    text-align: center;

    div {
      height: 50px;
      line-height: 50px;
      border: none;
      margin: auto;
    }
  }
}

.move-enter-active,
.move-leave-active {
  transition: all 0.5s;
  left: 0;
}

.move-enter-from,
.move-leave-to {
  left: -$side-bar-shoppingcart-width;
}
</style>
