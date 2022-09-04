import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  //Default Layout
  {
    path: "/",
    component: () => import("@/layouts/DefaultLayout.vue"),
    children: [
      {
        path: "/",
        name: "Home",
        component: () => import("@/views/HomePage.vue"),
      },
      {
        path: "/details/:id",
        name: "Detail",
        component: () => import("@/views/HeroDetailPage.vue"),
      },

      // Redirect to 404 page, if no match found
      {
        path: "*",
        name: "404",
        component: () => import("@/views/NotFoundPage.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.API_BASE_URL,
  routes,
});

export default router;
