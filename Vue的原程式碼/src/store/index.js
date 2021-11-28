import { createStore } from "vuex";
import homepage from "./homepage";
import saleContents from "./saleContents";

export default createStore({
  modules: {
    homepage,
    saleContents,
  },
});
