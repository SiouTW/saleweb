<template>
  <div v-show="ML" class="ml">
    <div class="signWrapper">
      <div class="signIn">
        <label>
          <input type="text" placeholder="手機號碼、用戶名稱或電子郵件地址" />
        </label>
        <label>
          <input type="password" placeholder="密碼" />
        </label>
        <div class="submit">登入</div>
      </div>

      <div class="divider">
        <div class="line"></div>
        <div class="text">或</div>
        <div class="line"></div>
      </div>
      <div class="forgetPassword">忘記密碼?</div>
    </div>

    <div class="signUp">註冊</div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "MemberLogin",
  computed: {
    ...mapState("homepage", ["ML"]),
  },
};
</script>

<style lang="scss" scoped>
.ml {
  z-index: 20;
  width: 500px;
  height: 500px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #192a56;
  border-radius: 15px;

  .signWrapper {
    background-color: #fff;
    width: 270px;
    margin: 0 auto;
    // border: 1px solid #c23616;
    padding: 20px;
    margin-top: 50px;

    .signIn {
      //

      input,
      .submit {
        height: 20px;
        width: 250px;
        padding: 8px;
        border-radius: 5px;
        margin: 0 auto 6px;
        margin-bottom: 16px;
        display: block;
      }
      .submit {
        // background-color: rgba(95, 95, 255, 0.3);
        background-color: #00a8ff;
        cursor: pointer;
        text-align: center;
        padding: 8px 10px;
        border: 2px;
      }
    }
    .divider {
      display: flex;
      width: 270px;
      margin: 0 auto;
      justify-content: center;
      align-items: center;
      .line {
        background-color: rgba(219, 219, 219, 1);
        height: 1px;
        flex-grow: 1;
      }
      .text {
        margin: 0 10px;
      }
    }
    .forgetPassword {
      margin-top: 16px;
      text-align: center;
      cursor: pointer;
    }
  }

  .signUp {
    background-color: #fff;
    width: 270px;
    margin: 0 auto;
    // border: 1px solid #c23616;
    padding: 20px;
    margin-top: 50px;
    text-align: center;
    cursor: pointer;
  }
}
</style>
