export default {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  mutations: {
    setProducts(state, payload) {
      state.items = payload;
    },
  },
  getters: {
    allProducts: (state) => state.items,
  },
};
