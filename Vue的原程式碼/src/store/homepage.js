export default {
  namespaced: true,
  actions: {
    changeCover() {
      this.commit("ChangeCover");
    },
  },
  mutations: {
    ChangeCover(state) {
      state.cover = !state.cover;
      state.SC = false;
      state.ML = false;
      state.CU = false;
      console.log("mutations", state, this);
    },
    // 換商品名字
    autoFilter(state, String) {
      state.goodsType = String;
    },
    DisplaySC(state) {
      state.SC = !state.SC;
      state.cover = !state.cover;
    },
    DisplayMemberLogin(state) {
      state.ML = !state.ML;
      state.cover = !state.cover;
    },
    DisplayContactUs(state) {
      state.CU = !state.CU;
      state.cover = !state.cover;
    },
  },
  state: {
    cover: false,
    SC: false,
    ML: false,
    CU: false,
    goodsType: "all",
    type: "all",
    x: 1,
    y: 2,
    z: 3,
  },
  getters: {
    bigX(state) {
      return state.x * 10;
    },
    goodsTypeG(state) {
      switch (state.goodsType) {
        case "all":
          return "所有產品";
        case "coat":
          return "上衣";
        case "pants":
          return "褲子";
        case "skirt":
          return "裙子";
        case "sock":
          return "襪子";
        case "changeCommodity":
          return "退換貨政策";
      }
    },
  },
};
