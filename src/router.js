import { createRouter, createWebHistory } from "vue-router";
import store from "./store/index";
import Home from "./pages/Home";
import NoteList from "./pages/NoteList";
import Calendar from "./pages/Calendar";
import Markdown from "./pages/Markdown";
import Slider from "./pages/Slider";
import Calculator from "./pages/Calculator";
import ReuseableModal from "./pages/ReuseableModal";
import Chats from "./pages/Chats";

const routes = [
  { path: "/", component: Home },
  { path: "/notelist", component: NoteList },
  { path: "/calendar", component: Calendar },
  { path: "/markdown", component: Markdown },
  { path: "/slider", component: Slider },
  { path: "/calculator", component: Calculator },
  { path: "/reuseable-modal", component: ReuseableModal },
  { path: "/chats", component: Chats, meta: { middleware: "auth" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, _, next) => {
  // _ = no need to use "from"

  if (to.meta.middleware) {
    const middleware = require(`./middleware/${to.meta.middleware}`);
    if (middleware) {
      middleware.default(next, store);
      // as a module, middleware "export defalt" so call this
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
