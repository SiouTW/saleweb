<template>
  <div id="sideBar">
    <div class="logo">
      <img src="../assets/pig.jpg" alt="商標" />
    </div>
    <div class="nav">
      <ul>
        <!-- <li @click="all"> -->
        <li @click="setFilterType('all'), autoFilter('all')">
          所有產品
          <div class="countNum">{{ numOfTotal }}</div>
        </li>
        <li class="product">
          產品分類
          <div class="goods">
            <ul>
              <li @click="setFilterType('coat'), autoFilter('coat')">
                上衣
                <div class="countNum">{{ numOfCoat }}</div>
              </li>
              <li @click="setFilterType('pants'), autoFilter('pants')">
                褲子
                <div class="countNum">{{ numOfPants }}</div>
              </li>
              <li @click="setFilterType('skirt'), autoFilter('skirt')">
                裙子
                <div class="countNum">{{ numOfSkirt }}</div>
              </li>
              <li @click="setFilterType('sock'), autoFilter('sock')">
                襪子
                <div class="countNum">{{ numOfSock }}</div>
              </li>
            </ul>
          </div>
        </li>
        <li
          @click="
            setFilterType('changeCommodity'), autoFilter('changeCommodity')
          "
        >
          退換貨政策
        </li>
        <li class="block"><a href="https://www.instagram.com/">IG</a></li>
      </ul>
    </div>
  </div>
  <!-- changeCommodity -->
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "SideBar",
  data() {
    return {
      numOfTotal: 0,
      numOfCoat: 0,
      numOfPants: 0,
      numOfSkirt: 0,
      numOfSock: 0,
      type: "all",
    };
  },
  computed: {
    ...mapState("homepage", ["goodsType"]),
    ...mapState("saleContents", ["showSC", "saleContents"]),
  },
  methods: {
    ...mapMutations("homepage", {
      autoFilter: "autoFilter",
    }),
    ...mapMutations("saleContents", {
      setFilterType: "setFilterType",
    }),
    calculationNumber() {
      this.saleContents.filter((item) => {
        this.numOfTotal++;
        if (item.type === "coat") {
          this.numOfCoat++;
          return true;
        } else if (item.type === "pants") {
          this.numOfPants++;
          return true;
        } else if (item.type === "skirt") {
          this.numOfSkirt++;
          return true;
        } else {
          this.numOfSock++;
          return true;
        }
      });
    },
  },
  mounted() {
    this.calculationNumber();
  },
};
</script>

<style lang="scss" scoped>
// 左側隱藏的購物車欄位
$side-bar-shoppingcart-width: 375px;
// 左側欄位
$sideBarWidth: 310px;
$logoHeight: 310px;
// $color1: #60686c;
$color1: #353b48;
$color2: #fbc531;
// $color2: #4cd137;

#sideBar {
  background-color: $color1;
  color: #fff;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  width: $sideBarWidth;
  overflow: hidden;

  &:hover {
    z-index: 10;
  }
}

.logo {
  height: $logoHeight;
  background-color: #fff3bf;

  img {
    width: 100.5%;
  }
}

.nav {
  ul {
    list-style: none;

    .product {
      li {
        width: 180px;
      }

      &:hover .goods {
        display: block;
      }
    }

    li {
      display: block;
      position: relative;
      padding: 10px 20px;
      cursor: pointer;
      height: 26px;
      line-height: 26px;
      text-align: center;

      &:hover {
        // ???
        color: $color2;

        &:after {
          opacity: 1;
          transform: translate(-50%) scaleX(1);
        }

        a {
          // ???
          color: $color2;
        }
      }

      &:after {
        content: "";
        position: absolute;
        left: 50%;
        bottom: 0;
        width: $sideBarWidth;
        opacity: 0;
        border-bottom: 2px solid #000;
        transform: translate(-50%) scaleX(0);
        transition: 0.4s ease-in-out;
      }

      a {
        text-decoration: none;
        color: white;
        line-height: 26px;
      }

      .goods {
        background-color: $color1;
        position: fixed;
        top: 356px;
        left: $sideBarWidth;
        display: none;
        border-left: 2px solid #000;

        li {
          color: #fff;

          &:hover {
            color: $color2;
          }
          &:after {
            width: 220px;
          }
        }
      }

      .countNum {
        float: right;
      }
    }

    .block {
      padding: 0;
      height: 46px;

      a {
        display: block;
        line-height: 46px;
      }
    }
  }
}
</style>
