<template>
  <div id="app"><Feed /></div>
</template>

<script>
import Feed from "@/components/pages/Feed";

export default {
  name: "App",
  components: {
    Feed
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
