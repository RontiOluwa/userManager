// Importing Package and Component
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import ChangePassword from "../views/ChangePassword.vue";
import LostPassword from "../views/LostPassword.vue";
import Profile from "../views/Profile.vue";
import SignIn from "../views/SignIn.vue";
import SignOut from "../views/SignOut.vue";
import SignUp from "../views/SignUp.vue";

// Created Array of routes
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/change-password",
    name: "ChangePassword",
    component: ChangePassword,
  },
  {
    path: "/lost-password",
    name: "LostPassword",
    component: LostPassword,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: (to, from, next) => {
      if (localStorage.getItem("user") !== undefined) {
        next();
      }
    },
  },
  {
    path: "/sign-in",
    name: "SignIn",
    component: SignIn,
  },
  {
    path: "/sign-out",
    name: "SignOut",
    component: SignOut,
  },
  {
    path: "/sign-up",
    name: "SignUp",
    component: SignUp,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
