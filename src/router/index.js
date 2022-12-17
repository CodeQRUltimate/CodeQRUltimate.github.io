import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(/* webpackChunkName: "home" */ "../views/QrHome.vue"),
  },
  {
    path: "/lineups",
    name: "lineups",
    component: () =>
      import(/* webpackChunkName: "lineups" */ "../views/QrLineups.vue"),
  },
  {
    path: "/lineups/:lineupKey",
    name: "lineup",
    component: () =>
      import(/* webpackChunkName: "lineup" */ "../views/QrLineup.vue"),
  },
  {
    path: "/players",
    name: "players",
    component: () =>
      import(/* webpackChunkName: "players" */ "../views/QrPlayers.vue"),
  },
  {
    path: "/players/:playerNumber",
    name: "player",
    component: () =>
      import(/* webpackChunkName: "player" */ "../views/QrPlayer.vue"),
  },
  {
    path: "/players/:playerNumber/meme",
    name: "playerMeme",
    component: () =>
      import(/* webpackChunkName: "player" */ "../views/QrPlayer.vue"),
  },
  {
    path: "/players/88/meemee",
    name: "lud-meme",
    component: () =>
      import(/* webpackChunkName: "lud-meme" */ "../views/QrLudMeme.vue"),
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () =>
      import(/* webpackChunkName: "gallery" */ "../views/QrGallery.vue"),
  },
  {
    path: "/contact-us",
    name: "contact-us",
    component: () =>
      import(/* webpackChunkName: "contact-us" */ "../views/QrContactUs.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
