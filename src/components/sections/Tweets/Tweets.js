import axios from "axios";
import Tweet from "@/components/sections/Tweet";
import Observer from "@/utils/Observer";

export default {
  components: {
    Tweet: Tweet,
    Observer
  },
  props: ["username"],
  data() {
    return {
      status: false,
      tweetData: [],
      page_count: 1,
      next: null
    };
  },
  methods: {
    intersected() {
      this.page_count++;
      console.log(this.page_count);
      let config = {
        method: "get",

        params: {
          query: "from:" + this.username,
          maxResults: "10",
          next: this.next
        },

        headers: {
          authorization:
            "Bearer <token>"
        },
        responseType: "json"
      };

      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/tweets/search/30day/tweetfeed.json",
          config
        )
        .then(response => {
          this.tweetData = [...this.tweetData, ...response.data.results];
        })
        .catch(function (error) {
          console.log(error);
        });
    },
    getTweetdatas() {
      if (this.$parent.twitterstatus === true) {
        let config = {
          method: "get",

          params: {
            query: "from:" + this.username,
            maxResults: "10"
          },

          headers: {
            authorization:
              "Bearer AAAAAAAAAAAAAAAAAAAAALkD9gAAAAAAf%2FN6PHlqfwJCEowb%2B46PuCVf2mM%3DcQLuKuPfYW6KZSEnBVUm1ZmXUxOFJ9QJyj1o1TDIqLQYwU7hrz"
          },
          responseType: "json"
        };

        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/tweets/search/30day/tweetfeed.json",
            config
          )
          .then(response => {
            this.tweetData = response.data.results;
            this.next = response.data.next;
            console.log(this.next);
            if (response.data.results.length === 0) {
              this.status = false;
              this.$parent.checkstatus = false;
            } else {
              this.status = true;
              this.$parent.checkstatus = true;
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        console.log("Not my turn");
      }
    }
  },
  mounted() {
    this.getTweetdatas();
  }
};
