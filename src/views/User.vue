<template>
  <div>
    <h2>User Profile</h2>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const userId = route.params.id;

const userData = ref({ name: "", email: "" });

onMounted(() => {
  setTimeout(() => {
    userData.value = {
      name: `user ${userId}`,
      email: `user${userId}@example.com`,
    };
  }, 1000);
});
</script>
