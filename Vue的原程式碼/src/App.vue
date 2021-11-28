<template>
  <transition name="fade">
    <div class="cover" v-if="cover" @click="ChangeCover"></div>
  </transition>
  <SideBar />
  <TopBar />
  <ShoppingCart />
  <MemberLogin />
  <ContactUs />

  <div class="view">
    <h2 class="goodstype">{{ goodsTypeG }}</h2>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import SideBar from "./components/SideBar.vue";
import TopBar from "./components/TopBar.vue";
import ShoppingCart from "./components/ShoppingCart.vue";
import MemberLogin from "./components/MemberLogin.vue";
import ContactUs from "./components/ContactUs.vue";
export default {
  name: "App",
  components: {
    SideBar,
    TopBar,
    ShoppingCart,
    MemberLogin,
    ContactUs,
  },
  computed: {
    ...mapState("homepage", ["cover", "goodsType", "type", "SC"]),
    ...mapGetters("homepage", ["bigX", "goodsTypeG"]),
  },
  methods: {
    ...mapMutations("homepage", {
      ChangeCover: "ChangeCover",
    }),
  },
};
</script>

<style lang="scss">
$c1: #2f3640;
$c2: #353b48;
$c3: #192a56;
$c4: #273c75;
$c5: #718093;
$c6: #7f8fa6;
$c7: #dcdde1;
$c8: #f5f6fa;
$c9: #c23616;
$c10: #e84118;
$c11: #40739e;
$c12: #487eb0;
$c13: #44bd32;
$c14: #4cd137;
$c15: #e1b12c;
$c16: #fbc531;
$c17: #8c7ae6;
$c18: #9c88ff;
$c19: #0097e6;
$c20: #00a8ff;
$sideBarWidth: 310px;
$topBarHeight: 50px;

* {
  margin: 0;
  padding: 0;
  // color: rgb(174, 194, 211);
  // background-color: #131516;
  font-family: "Poppins", "Noto Sans TC", sans-serif;
}

body {
  background-color: #000;
}

[v-cloak] {
  display: none;
}

.view {
  background-color: #262a2b;
  color: #e8e6e3;
  position: fixed;
  top: $topBarHeight;
  left: $sideBarWidth;
  bottom: 0;
  right: 0;
  z-index: 1;
  overflow-y: auto;
}

.cover {
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: fixed;
  background-color: #000;
  opacity: 0.5;
  z-index: 10;
}
.goodstype {
  text-align: center;
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.2s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
