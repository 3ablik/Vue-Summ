<script setup>
import FooterLinksComponent from "./FooterLinksComponent.vue";
import FacebookIcon from "../../assets/facebook_ico.svg";
import InstagramIcon from "../../assets/instagram_ico.svg";
import WhatsappIcon from "../../assets/whatsapp_ico.svg";
</script>
<template>
  <footer class="footer min-h-85 bg-footer-bg sm:px-14 py-8">
    <div
      class="container flex justify-start gap-31 flex-wrap pb-9 border-b border-solid border-transparent-border-1"
    >
      <div class="flex flex-col items-center lg:items-start gap-5">
        <h2 class="title">Присоединяйтесь</h2>
        <div class="flex flex-row gap-3">
          <a
            class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            href=""
          >
            <img :src="FacebookIcon" alt="" /> </a
          ><a
            class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            href=""
          >
            <img :src="InstagramIcon" alt="" /> </a
          ><a
            class="w-8 h-8 rounded-full bg-white flex items-center justify-center"
            href=""
          >
            <img :src="WhatsappIcon" alt="" />
          </a>
        </div>
      </div>
      <div class="right" id="footerAnchor">
        <FooterLinksComponent
          v-for="(item, index) in footerInfo"
          :key="index"
          :info="item"
        />
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "FooterComponent",
  components: { FooterLinksComponent },
  data() {
    return {
      footerInfo: [
        {
          title: "каталог",
          linkRoute: { name: "Catalog" },
          links: [
            { name: "Шкафы (МДФ)" },
            { name: "Шкафы (распашные)" },
            { name: "Шкафы (купе)" },
            { name: "Спальные гарнитуры" },
            { name: "Кровати" },
            { name: "Диваны" },
            { name: "Пуфики" },
            { name: "Кухонные гарнитуры" },
            { name: "Столы" },
            { name: "Прихожие" },
            { name: "Комоды" },
            { name: "Стеллажи" },
            { name: "Б/У" },
          ],
        },
        {
          title: "навигация",
          linkRoute: "/",

          links: [
            { name: "О компании", linkRoute: "about" },
            { name: "Акции", linkRoute: "sales" },
          ],
        },
        {
          title: "контакты",
          linkRoute: "/",
          links: { name: "Cвяжитесь с нами", linkRoute: "contacts" },
        },
      ],
    };
  },
};
</script>
<style scoped>
.footer {
  min-height: 346px;
  background-color: #141414;
  padding: 34px 57px;
}
.footer .container {
  display: flex;
  justify-content: flex-start;
  gap: 125px;
  flex-wrap: wrap;
  padding-bottom: 38px;
  border-bottom: 1px solid #ffffff1a;
}
.title {
  color: white;
  font-family: "Raleway";
  font-weight: 600;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0%;
}
.right {
  display: flex;
  gap: 60px;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
}
</style>
