<template>
  <div class="mainlayout">
    <AppHeader />
    <hr width="100%" />
    <div class="columnLayout">
      <BoardColumn v-for="column in generateBoards" v-bind:key="column" />
      <!-- <span> -->
    </div>
  </div>
</template>
<style src="./Feed.scss" type="text/css"></style>
<script src="./Feed.js" />
