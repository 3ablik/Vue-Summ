import axios from "axios";
export default {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  mutations: {
    setProducts(state, payload) {
      state.items = payload;
    },
    setLoaded(state, val) {
      state.loaded = val;
    },
  },
  getters: {
    allProducts: (state) => state.items,
    hasLoaded: (state) => state.loaded,
  },
  actions: {
    async fetchProducts({ commit, state }) {
      if (state.loaded) return;
      try {
        const response = await axios.get(
          "https://67f55318913986b16fa42b4b.mockapi.io/Product"
        );
        commit("setProducts", response.data);
        commit("setLoaded", true);
      } catch (error) {
        console.error("Ошибка при получении товаров:", error);
      }
    },
  },
};
