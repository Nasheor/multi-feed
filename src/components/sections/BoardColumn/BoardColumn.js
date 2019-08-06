import Tweets from "../Tweets";
import Spotify from "../Spotify";
import axios from "axios";

export default {
  components: {
    Tweets,
    Spotify
  },
  data() {
    return {
      username: "",
      checkstatus: false,
      platform: "",
      twitterstatus: false,
      spotifystatus: false,
      suggestedhandles: []
    };
  },
  methods: {
    submitUserName() {
      if (this.platform === "Spotify") {
        this.spotifystatus = true;
        this.twitterstatus = false;
        this.$store.commit("updateUserList", this.username);
      } else if (this.platform === "Twitter") {
        this.spotifystatus = false;
        this.twitterstatus = true;
        this.$store.commit("updateUserList", this.username);
      } else {
        console.log(this.platform);
        alert("Choose a Platform from the drop down");
      }
    }
  },
  computed: {
    getUserName() {
      return this.username;
    },
    getSpotifyStatus() {
      return this.spotifystatus;
    },
    getTwitterStatus() {
      return this.twitterstatus;
    }
  },
  watch: {
    platform: function() {
      console.log(this.platform);
      this.spotifystatus = false;
      this.twitterstatus = false;
      this.checkstatus = false;
    },
    username: function() {
      this.spotifystatus = false;
      this.twitterstatus = false;
      this.checkstatus = false;
      if (this.platform === "Spotify") {
      } else if (this.platform === "Twitter") {
        // const DST = `OAuth oauth_consumer_key="iMfwFSvb042NyqvwMqT1m1c12",
        //               consumer_secret: "1qzXdCY3ZGUCcobnuzfEHHETpoxfnTq6rP7BcMRqeYM0oxhr0a"
        //               oauth_token="1097499762809556992-m8QBeW59fg9DFvwIsW6bPwlbnPv8ek",
        //               secret_token: "X26g4U5ERh7bpt2saIMqd0RWEElRbTqc9Q7UUr118lVKA"
        //               oauth_version="1.0"
        //               `;
        // let config = {
        //   method: "get",
        //   params: {
        //     q: this.username,
        //     count: 5
        //   },
        //   headers: {
        //     authorization:
        //       "Bearer AAAAAAAAAAAAAAAAAAAAALkD9gAAAAAAf%2FN6PHlqfwJCEowb%2B46PuCVf2mM%3DcQLuKuPfYW6KZSEnBVUm1ZmXUxOFJ9QJyj1o1TDIqLQYwU7hrz"
        //   }
        // };
        // axios
        //   .get(
        //     "https://cors-anywhere.herokuapp.com/https://api.twitter.com/1.1/users/search.json",
        //     config
        //   )
        //   .then(response => {
        //     this.suggestedhandles = response;
        //     console.log(this.suggestedhandles);
        //   })
        //   .catch(function(error) {
        //     console.log(error);
        //   });
        //Do Nothing for now
      } else {
        alert("First: Choose a platform you want to query");
      }
    }
  }
};
