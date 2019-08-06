import { mapState, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  methods: {
    updateColumns(e) {
      this.$store.commit("changeColumnState", e.target.value);
    }
  }
};
