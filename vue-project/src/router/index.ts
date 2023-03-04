import { createRouter, createWebHistory } from "vue-router";
// @ts-ignore
import HomeView from "../views/Home.vue";
// @ts-ignore
import Lessons from "../views/Lessons.vue";
// @ts-ignore
import Teachers from "../views/Teachers.vue";
// @ts-ignore
import About from "../views/About.vue";
// @ts-ignore
import Shop from "../views/Shop.vue";
// @ts-ignore
import Opportunity from "../views/Opportunity.vue";
// @ts-ignore
import Message from "../views/Message.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      alias: "/home",
      component: HomeView,
    },
  ],
});

router.addRoute({ path: "/about", component: About });
router.addRoute({
  path: "/lessons",
  name: "lessons",
  component: Lessons,
});

router.addRoute({
  path: "/teachers",
  name: "teachers",
  component: Teachers,
});
router.addRoute({
  path: "/shop",
  name: "shop",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Shop,
});

router.addRoute({
  path: "/opportunity",
  name: "opportunity",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Opportunity,
});

router.addRoute({
  path: "/msg",
  name: "message",
  // route level code-splitting
  // this generates a separate chunk (About.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: Message,
});

export default router;
