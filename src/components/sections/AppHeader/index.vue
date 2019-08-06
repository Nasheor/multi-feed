<template>
  <div class="header">
    <label>Number of feeds </label>
    <input type="number" min="0" max="10" @input="updateColumns" />
  </div>
</template>
<script src="./AppHeader.js"></script>
<style scoped lang="scss" src="./AppHeader.scss"></style>
