<script setup></script>

<template>
  <header class="bg-white w-full h-[103px] flex justify-center items-center">
    <div class="justify-around items-start flex flex-col h-[80%] w-[91.56%]">
      <div class="w-full h-[44%] flex justify-between items-center">
        <router-link to="/">
          <img
            class="logo"
            src="../assets/logo.svg"
            width="125"
            height="125"
            onclick=""
          />
        </router-link>
        <div class="flex items-center justify-between w-[16.5%] h-[60%]">
          <div
            class="scheme-normal flex items-center justify-between w-[37%] h-full max-lg:w-[80%] max-lg:h-[80%] max-lg:gap-2"
          >
            <img
              class="search-img max-sm:hidden"
              src="../assets/search.svg"
              width="20"
              height="20"
            />

            <input
              placeholder="ПОИСК"
              class="text-[#b5b5b5] text-[13px] font-normal w-full h-full max-lg:text-[10px] max-lg:font-normal max-lg:w-[80%] max-lg:h-[80%] search-input"
              type="text"
            />
          </div>

          <div class="cart flex items-center justify-around">
            <svg
              width="25"
              height="23"
              viewBox="0 0 25 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.574463 8.89278H2.50433M24.3755 8.89278H22.124M22.124 8.89278L19.6796 21.0505H5.14172L2.50433 8.89278M22.124 8.89278H20.0655M2.50433 8.89278H5.14172M5.14172 8.89278L9.64459 1.10925M5.14172 8.89278H20.0655M20.0655 8.89278L15.1767 1.10925"
                stroke="#151515"
                stroke-width="2"
              />
            </svg>
            <span
              class="text-[#b5b5b5] text-[13px] font-normal max-lg:text-[0px]"
              >КОРЗИНА</span
            >
          </div>
        </div>
      </div>

      <div class="stroke w-full h-[1px] bg-[#d4d4d4]"></div>

      <nav
        class="flex row justify-between items-center self-start w-[34%] h-[25%] max-lg:w-[45%] max-md:w-[60%] max-sm:w-[90%] gap-4"
      >
        <svg
          width="22"
          height="21"
          viewBox="0 0 22 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="20.9194"
            height="2"
            transform="matrix(-1 0 0 1 21.8276 0.496208)"
            fill="#151515"
          />
          <rect
            width="20.9192"
            height="2"
            transform="matrix(-1 0 0 1 21.8276 9.49621)"
            fill="#151515"
          />
          <rect
            width="20.9192"
            height="2"
            transform="matrix(-1 0 0 1 21.8276 18.4962)"
            fill="#151515"
          />
        </svg>
        <router-link
          class="nav-link text-[16px] max-md:text-[14px]"
          to="/catalog"
          >Каталог</router-link
        >
        <router-link class="nav-link text-[16px] max-md:text-[14px]" to="/sale"
          >Скидки</router-link
        >
        <router-link class="nav-link text-[16px] max-md:text-[14px]" to="/about"
          >О нас</router-link
        >
        <router-link
          class="nav-link text-[16px] max-md:text-[14px]"
          to="/contacts"
          >Контакты</router-link
        >
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
};
</script>

<style scoped>
@import url("https://fonts.cdnfonts.com/css/lato");
@import url("https://fonts.cdnfonts.com/css/raleway-5");

.search-input::placeholder {
  font-size: 13px;
  font-weight: 400;
}
.nav-link {
  color: #151515;
  font-family: "Raleway", sans-serif;
  font-weight: 500;
  line-height: 147%;
}
</style>
