import * as types from "../../mutation-types";
import lazyLoading from "./lazyLoading";

// show: meta.label -> name
// name: component name
// meta.label: display label

const state = {
  items: [
    {
      name: "进件转化",
      path: "loan",
      meta: {
        icon: "fa-bar-chart",
        link: "Loan/index.vue"
      },
      component: lazyLoading("Loan", true)
    }
  ]
};

const mutations = {
  [types.EXPAND_MENU](state, menuItem) {
    if (menuItem.index > -1) {
      if (state.items[menuItem.index] && state.items[menuItem.index].meta) {
        state.items[menuItem.index].meta.expanded = menuItem.expanded;
      }
    } else if (menuItem.item && "expanded" in menuItem.item.meta) {
      menuItem.item.meta.expanded = menuItem.expanded;
    }
  }
};

export default {
  state,
  mutations
};
