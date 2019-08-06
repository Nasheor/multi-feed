import axios from "axios";
import Track from "@/components/sections/Track";
import Observer from "@/utils/Observer";

export default {
  components: {
    spotifytrack: Track,
    Observer
  },
  props: ["username"],
  data() {
    return {
      id: String,
      tracks: [],
      status: false
    };
  },
  methods: {
    getArtistID() {
      let array = this.username.split(" ");
      if (this.$parent.spotifystatus === true && this.username.length >= 1) {
        let idconfig = {
          method: "get",

          params: {
            q: array[0] + "+" + array[1],
            type: "artist"
          },

          headers: {
            authorization:
              "Bearer <token>"
          },
          responseType: "json"
        };

        axios
          .get("https://api.spotify.com/v1/search", idconfig)
          .then(response => {
            this.id = response.data.artists.items[0].id;
            console.log(this.id);
            this.getArtistTopTracks();
          })
          .catch(function (error) {
            console.log(error);
          });
      } else {
        this.status = false;
      }
    },
    getArtistTopTracks() {
      this.id = this.id.toString();
      if (this.id.length >= 1) {
        let trackconfig = {
          method: "get",

          params: {
            limit: 10
          },

          headers: {
            authorization:
              "Bearer BQBi_msKwIcCWdQLvd7dXuTsBHrkKX75-aZ8hhcbxELzpTJJMtivknMNdiQknzP5rQkQRRiOYBfuRODmcAUctK_jw46DTWPeUvXlZ7jdE03NmnYlaGIlcQVoE6kb6itkZo0wj52g6oVzZcuDp9cPMcIL0SxQnLl6PcqZaHIheINqJfThSeYPUKNn"
          },
          responseType: "json"
        };
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/artists/" +
            this.id +
            "/albums",
            trackconfig
          )
          .then(response => {
            this.tracks = response.data.items;
            console.log(this.tracks);
            if (this.tracks.length === 0) {
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
      }
    },
    getData() {
      this.getArtistID();
    },
    intersected() {
      let trackconfig = {
        method: "get",

        params: {
          limit: 10
        },

        headers: {
          authorization:
            "Bearer BQBi_msKwIcCWdQLvd7dXuTsBHrkKX75-aZ8hhcbxELzpTJJMtivknMNdiQknzP5rQkQRRiOYBfuRODmcAUctK_jw46DTWPeUvXlZ7jdE03NmnYlaGIlcQVoE6kb6itkZo0wj52g6oVzZcuDp9cPMcIL0SxQnLl6PcqZaHIheINqJfThSeYPUKNn"
        },
        responseType: "json"
      };
      axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://api.spotify.com/v1/artists/" +
          this.id +
          "/albums",
          trackconfig
        )
        .then(response => {
          this.tracks = [...this.tracks, ...response.data.items];
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
  mounted() {
    console.log(this.username);
    this.status = false;
    this.getData();
  }
};
