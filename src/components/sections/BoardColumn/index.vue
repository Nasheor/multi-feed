<template>
  <div class="ColumnView">
    <div class="column-header">
      <select name="platforms" class="increase-height" v-model="platform">
        <option value="Twitter">Twitter</option>
        <!-- <option value="Spotify">Spotify</option> -->
      </select>
      <input
        class="form-control"
        type="text"
        placeholder="User Handle"
        v-model="username"
      />
      <button type="button" class="btn btn-light test" @click="submitUserName">
        Submit
      </button>
      <font-awesome-icon
        class="align"
        icon="check"
        v-if="checkstatus === true"
      />
      <font-awesome-icon
        class="align"
        icon="times"
        v-if="checkstatus === false"
      />
      <hr />
    </div>
    <div class="scrollable" v-if="getTwitterStatus === true">
      <Tweets v-bind:username="getUserName" ref="tweet" />
    </div>
    <div class="scrollable" v-else-if="getSpotifyStatus === true">
      <Spotify v-bind:username="getUserName" ref="spotify" />
    </div>
    <div class="no-tweets" v-else>
      Please type in the user handle you want to see the feed from
    </div>
  </div>
</template>

<script src="./BoardColumn.js"></script>
<style scoped lang="scss" src="./BoardColumn.scss"></style>
