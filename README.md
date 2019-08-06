# Multi Feed App

## Description

###### Sandbox Link
https://5wq8kk63l.csb.app/

A small fun project which can retrieve tweets posted by a user in Twitter f9r the last 30 day period and display it in a column feed.

This web application can also retrieve any Spotify artist's top 10 tracks. I have limited this application's features for the moment being to obtain only tweets from twitter. The reason for this is that the authorization code used to verify that a client does access the Spotify API privilege is refreshed every few hours and the authorization code may have expired at the time a user uses this application.

If you would like to add the `Spotify` functionality, you can do so by cloning this repository and running the application locally.
Information on how to set your authorization permissions and generate bearer token can be found [here](https://developer.spotify.com/documentation/general/guides/scopes/)

Once you've retrieved your Bearer token do the following

1. Navigate to `Spotify.js` in `./src/components/sections/Spotify
2. On line 32, replace `token` with your `Bearer Token`
3. Now navigate to `index.vue` in `.src/components/sections/BoardColumn`
4. Uncomment line 6 and run the app

## Technical information

1. **Language** : `NodeJS ES6`

2. **Framework**: `vue`, `vuex`

3. **Package manager**: `npm`

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
