import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import RecipeView from "../views/RecipeView.vue";
import FavoritesPage from "../views/FavoritesPage.vue";

Vue.use(VueRouter);


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/recipe/:title",
    name: "recipe",
    component: RecipeView
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesPage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
