export default {
  namespaced: true,
  actions: {},
  mutations: {
    // 增加購物車裡的商品
    ADDCONTENT(state, obj) {
      console.log(state, obj);
      if (obj.sale.remaining === 0) {
        // console.log("已無庫存!");
        alert("已無庫存");
      } else {
        // 購物車有東西
        if (state.guestContents.length !== 0) {
          for (let j = 0; j < state.guestContents.length; j++) {
            // 相同商品++
            if (state.guestContents[j].id === obj.sale.id) {
              state.guestContents[j].num += obj.quantity;
              break;
            } else if (state.guestContents.length === j + 1) {
              state.guestContents.push(obj.sale);
            }
          }
          // 如果顧客購物車還沒有東西
        } else {
          state.guestContents.push(obj.sale);
          state.guestContents[state.guestContents.length - 1].num += obj.quantity;
        }
        // 找到相同產品
        for (let i = 0; i < state.saleContents.length; i++) {
          // 找到商品之對象
          if (state.saleContents[i].id === obj.sale.id) {
            state.saleContents[i].remaining -= obj.quantity;
          }
        }
      }
    },
    FINDSAMECONTENT(state, sale) {
      for (let i = 0; i < state.saleContents.length; i++) {
        if (state.saleContents[i].id === sale.id) {
          return i;
        } else {
          return null;
        }
      }
    },
    // 刪除購物車內的商品
    DELETECONTENT(state, sale) {
      state.guestContents = state.guestContents.filter(
        (gc) => gc.id !== sale.id
      );
      for (let i = 0; i < state.saleContents.length; i++) {
        if (state.saleContents[i].id === sale.id) {
          state.saleContents[i].remaining += sale.num;
          // 不知道為什麼數據是連動的
          state.saleContents[i].num = 0;
          break;
        }
      }
    },
    // 篩選商品
    setFilterType(state, type) {
      state.type = type;
    },
  },
  state: {
    type: "all",
    guestContents: [],
    saleContents: [
      {
        id: 0,
        title: "現貨-糙米上衣-0",
        price: "690",
        src: [
          // require("@/assets/commodity/10.png"),
          require("@/assets/commodity/0.jpg"),
          require("@/assets/commodity/1.jpg"),
          require("@/assets/commodity/2.jpg"),
          require("@/assets/commodity/3.jpg"),
        ],
        remaining: 1,
        // remaining: 0,
        type: "coat",
        num: 0,
      },
      {
        id: 1,
        title: "現貨-糙米上衣-1",
        price: "690",
        src: [
          require("@/assets/commodity/1.jpg"),
          require("@/assets/commodity/2.jpg"),
          require("@/assets/commodity/3.jpg"),
        ],
        remaining: 3,
        type: "coat",
        num: 0,
      },
      {
        id: 2,
        title: "現貨-糙米上衣-2",
        price: "690",
        src: [
          require("@/assets/commodity/2.jpg"),
          require("@/assets/commodity/3.jpg"),
          require("@/assets/commodity/4.jpg"),
        ],
        remaining: 4,
        type: "coat",
        num: 0,
      },
      {
        id: 3,
        title: "現貨-糙米長褲-0",
        price: "690",
        src: [
          require("@/assets/commodity/3.jpg"),
          require("@/assets/commodity/4.jpg"),
          require("@/assets/commodity/5.jpg"),
        ],
        remaining: 5,
        type: "pants",
        num: 0,
      },
      {
        id: 4,
        title: "現貨-糙米長褲-1",
        price: "690",
        src: [
          require("@/assets/commodity/4.jpg"),
          require("@/assets/commodity/5.jpg"),
          require("@/assets/commodity/6.jpg"),
        ],
        remaining: 0,
        type: "pants",
        num: 0,
      },
      {
        id: 5,
        title: "現貨-糙米裙子-0",
        price: "690",
        src: [
          require("@/assets/commodity/5.jpg"),
          require("@/assets/commodity/6.jpg"),
          require("@/assets/commodity/7.jpg"),
        ],
        remaining: 1,
        type: "skirt",
        num: 0,
      },
      {
        id: 6,
        title: "現貨-糙米裙子-1",
        price: "690",
        src: [
          require("@/assets/commodity/6.jpg"),
          require("@/assets/commodity/7.jpg"),
          require("@/assets/commodity/8.jpg"),
        ],
        remaining: 2,
        type: "sock",
        num: 0,
      },
      {
        id: 7,
        title: "現貨-糙米襪子-0",
        price: "690",
        src: [
          require("@/assets/commodity/7.jpg"),
          require("@/assets/commodity/8.jpg"),
          require("@/assets/commodity/9.jpg"),
        ],
        remaining: 3,
        type: "sock",
        num: 0,
      },
      {
        id: 8,
        title: "現貨-糙米襪子-1",
        price: "690",
        src: [
          require("@/assets/commodity/8.jpg"),
          require("@/assets/commodity/9.jpg"),
          require("@/assets/commodity/0.jpg"),
        ],
        remaining: 2,
        type: "sock",
        num: 0,
      },
    ],
  },
  getters: {
    showSC(state) {
      return state.saleContents.filter((item) => {
        if (item.type === state.type || state.type === "all") {
          return true;
        } else {
          return false;
        }
      });
    },
  },
};
