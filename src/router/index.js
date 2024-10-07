import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import NotFound from "../views/NotFound.vue";
import Product from "../views/Product.vue";
import Detail from "../views/Detail.vue";
import Dashboard from "../views/Dashboard.vue";
import Account from "../views/Account.vue";
import ListUser from "../views/B9/ListUser.vue";
import UserDetail from "../views/B9/UserDetail.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      { path: "contact", component: ContactView },
      { path: "product", component: Product },
      { path: "detail", component: Detail },
      { path: "dashboard", component: Dashboard },
      { path: "account", component: Account },
      { path: "users", component: ListUser },
      { path: "userDetail/:id", component: UserDetail },
    ],
  },
  { path: "/register", component: RegisterView },
  { path: "/login", component: LoginView },
  { path: "/:pathMatch(.*)*", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
