<template>
  <div class="text-white flex flex-col items-start gap-4">
    <h3 class="links-title">{{ info.title }}</h3>
    <ul
      class="sm:max-h-45 flex flex-col justify-start gap-x-11 gap-y-2 flex-wrap"
    >
      <li
        class="flex justify-start"
        v-for="(item, index) in info.links"
        :key="index"
      >
        <router-link
          v-if="
            item.name == 'О компании' ||
            item.name == 'Cвяжитесь с нами' ||
            item.name == 'Акции'
          "
          :to="`/${item.linkRoute}`"
          >{{ item.name }}</router-link
        >
        <router-link v-else :to="`/catalog/${item.name}`">{{
          item.name
        }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "FooterLinksComponent",
  props: {
    info: Object,
  },
};
</script>
<style scoped>
.links-title {
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 2%;
  text-transform: uppercase;
}
ul li {
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0%;
}
</style>
