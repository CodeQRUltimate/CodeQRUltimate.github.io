import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue")
  },
  {
    path: "/lineups/:lineupKey",
    name: "lineup",
    component: () =>
      import(/* webpackChunkName: "lineup" */ "../views/Lineup.vue")
  },
  {
    path: "/players",
    name: "players",
    component: () =>
      import(/* webpackChunkName: "players" */ "../views/Players.vue")
  },
  {
    path: "/players/:playerNumber",
    name: "player",
    component: () =>
      import(/* webpackChunkName: "player" */ "../views/Player.vue")
  },
  {
    path: "/players/:playerNumber/meme",
    name: "playerMeme",
    component: () =>
      import(/* webpackChunkName: "player" */ "../views/Player.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
