<template>
  <div id="fixed-topBar">
    <!-- <button @click="changeDisplay">會員登入</button> -->
    <button @click="DisplayMemberLogin">會員登入</button>
    <button @click="DisplaySC">購物車</button>
    <button @click="DisplayContactUs">聯絡我們</button>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  name: "TopBar",
  data() {
    return {};
  },
  methods: {
    ...mapMutations("homepage", {
      ChangeCover: "ChangeCover",
      DisplaySC: "DisplaySC",
      DisplayMemberLogin: "DisplayMemberLogin",
      DisplayContactUs: "DisplayContactUs",
    }),
    // changeDisplay() {
    //   this.$store.dispatch("changeCover");
    // },
  },
};
</script>

<style lang="scss">
$sideBarWidth: 310px;
#fixed-topBar {
  position: fixed;
  left: $sideBarWidth;
  top: 0;
  right: 0;
  height: 50px;
  background-color: #353b48;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    background-color: #181a1b;
    color: #e8e6e3;
    border: 1px solid gray;
    padding: 4px 8px;
    border-radius: 5px;
    font-size: 1.2rem;
    z-index: 10;
    margin-right: 5px;
    // margin-top: 5px;
  }
}
</style>
