<template>
  <div class="album-data">
    <strong>{{ getAlbumName }}</strong>
    <div>
      <ol>
        <li>Number of Songs: {{ getNumberofSongs }}</li>
        <li>Release Date: {{ getReleaseDate }}</li>
        <li>Link Spotify Album: <a v-bind:href="getURL">Click Here </a></li>
      </ol>
    </div>
  </div>
</template>
<script src="./Track.js"></script>
<style src="./Track.scss"></style>
