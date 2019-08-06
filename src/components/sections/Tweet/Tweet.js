export default {
  props: ["tweet"],
  computed: {
    getDate() {
      return this.tweet.created_at;
    },
    getContent() {
      return this.tweet.text;
    }
  }
};
