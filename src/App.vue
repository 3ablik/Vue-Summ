<script setup>
import AppHeader from "./components/AppHeader.vue";
</script>

<template>
  <AppHeader />
  <router-view />
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/raleway-5");
body {
  display: block;
  background-color: #f5f5f5;
  font-family: "Raleway", sans-serif;
}
</style>
