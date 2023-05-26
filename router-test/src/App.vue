<template>
  <nav-content />
  <router-view />
</template>

<script>
import NavContent from "./components/NavContent.vue";

export default {
  name: "App",
  components: {
    NavContent,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
