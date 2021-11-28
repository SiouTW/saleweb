<template>
  <div class="contactWrapper" v-show="CU">
    <p>連絡電話: 09XX XXX XXX</p>
    <p>line: 09XX XXX XXX</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ContactUs",
  computed: {
    ...mapState("homepage", ["CU"]),
  },
};
</script>

<style lang="scss" scoped>
.contactWrapper {
  z-index: 20;
  // width: 450px;
  // height: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #192a56;
  border-radius: 15px;
  padding:15px 25px;

  text-align: center;
  color: #fff;
}
</style>
