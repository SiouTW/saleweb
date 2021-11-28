import { createRouter, createWebHashHistory } from "vue-router";
// import Main from "../pages/Main.vue";
import CommodityWrapper from "../components/CommodityWrapper.vue";
// import CommodityDetail from "../components/CommodityDetail.vue";

const routes = [
  {
    path: "/",
    name: "Main",
    component: CommodityWrapper,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
