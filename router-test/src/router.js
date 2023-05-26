import { createRouter, createWebHistory } from "vue-router";
import HomePage from "./Pages/HomePage.vue";
import TransactionsPage from "./Pages/TransactionsPage.vue";
import TransactionsDetails from "./Pages/TransactionsDetails.vue";

const routes = [
  {
    path: "/",
    name: "overview-route",
    component: HomePage,
  },
  {
    path: "/transactions",
    name: "transactions-route",

    component: TransactionsPage,
  },
  {
    path: "/transactions/:id",
    name: "transaction-detail-route",

    component: TransactionsDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
