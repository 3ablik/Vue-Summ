<script setup>
import AppHeader from "./components/header/AppHeader.vue";
import AppFooter from "./components/footer/AppFooter.vue";
</script>

<template>
  <AppHeader />
  <router-view />
  <AppFooter />
</template>

<style>
@import url("https://fonts.cdnfonts.com/css/raleway-5");
body {
  display: block;
  background-color: #f5f5f5;
  font-family: "Raleway", sans-serif;
}
</style>
