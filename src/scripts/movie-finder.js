import store from "../store/index";

export default {
  name: "MovieFinder",
  //  DATA
  data() {
    return {};
  },

  //  COMPUTED PROPERTIES
  computed: {
    // v-model search input
    searchInput: {
      get() {
        return store.state.filters.search;
      },
      set(value) {
        store.commit("SetSearch", value);
      },
    },
    //v-model available
    availableInput: {
      get() {
        return store.state.filters.available;
      },
      set(value) {
        store.commit("SetAvailable", value);
      },
    },
  },
};
