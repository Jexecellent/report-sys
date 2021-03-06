import Vue from "vue";
import Router from "vue-router";
import menuModule from "vuex-store/modules/menu";
import Main from "../views/main.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // Demo is living in GitHub.io, so required!
  // linkActiveClass: 'is-active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      name: "login",
      path: "/login",
      component: require("../views/Login")
    },
    {
      name: "Main",
      path: "/main",
      component: Main,
      children: [...generateRoutesFromMenu(menuModule.state.items)]
    },
    {
      path: "*",
      redirect: "/main/loan"
    }
  ]
});

// Menu should have 2 levels.
function generateRoutesFromMenu(menu = [], routes = []) {
  for (let i = 0, l = menu.length; i < l; i++) {
    let item = menu[i];
    if (item.path) {
      routes.push(item);
    }
    if (!item.component) {
      generateRoutesFromMenu(item.children, routes);
    }
  }
  return routes;
}
