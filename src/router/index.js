import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Help from "../views/News.vue";
import About from "../views/About.vue";
import Blog from "../views/Blog.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/blog",
    name: "blog",
    component: Blog
  },
  {
    path: "/news",
    name: "news",
    component: Help
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
