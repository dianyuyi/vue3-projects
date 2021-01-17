import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/Home";
import NoteList from "./pages/NoteList";
import Calendar from "./pages/Calendar";

const routes = [
  { path: "/", component: Home },
  { path: "/notelist", component: NoteList },
  { path: "/calendar", component: Calendar },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
