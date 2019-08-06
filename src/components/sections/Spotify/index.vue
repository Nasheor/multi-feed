<template>
  <div class="display-def" v-if="status === true">
    <spotifytrack
      v-bind:track="track"
      v-for="track in tracks"
      v-bind:key="track.id"
    />
    <Observer @intersect="intersected" />
  </div>
  <div class="display-def" v-else>
    <p>Please type in the user handle you want to see the feed from</p>
  </div>
</template>
<script src="./Spotify.js"></script>
<style src="./Spotify.scss"></style>
