<template>
  <div class="display-def" v-if="status === true">
    <Tweet
      v-bind:tweet="tweet"
      v-for="tweet in tweetData"
      v-bind:key="`${tweet.id + Math.random() * Math.random() + 1}`"
    />
    <Observer @intersect="intersected" />
  </div>
  <div class="display-def" v-else>
    <p>Please type in the user handle you want to see the feed from</p>
  </div>
</template>
<script src="./Tweets.js"></script>
<style scoped lang="scss" src="./Tweets.scss"></style>
