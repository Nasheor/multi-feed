import AppHeader from "@/components/sections/AppHeader";
import BoardColumn from "@/components/sections/BoardColumn";

export default {
  data() {
    return {
      id: 0
    };
  },
  components: {
    AppHeader,
    BoardColumn
  },
  computed: {
    generateBoards() {
      var columns = [];
      for (let i = 1; i <= this.$store.state.numberOfColumns; i++) {
        columns.push(i);
      }
      return columns;
    }
  }
};
