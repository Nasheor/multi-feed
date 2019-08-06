export default {
  props: ["track"],
  computed: {
    getAlbumName() {
      console.log(this.track.name);
      return this.track.name;
    },
    getNumberofSongs() {
      return this.track.total_tracks;
    },
    getReleaseDate() {
      return this.track.release_date;
    },
    getURL() {
      return this.track.external_urls.spotify;
    }
  }
};
