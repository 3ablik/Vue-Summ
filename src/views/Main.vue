<script setup>
import PopularProducts from "../components/PopularProducts.vue";
</script>

<template>
  <section class="overflow-hidden relative w-full h-[505px] top-[45px]">
    <img src="../assets/Frame 4.svg" class="object-cover size-full" />

    <div
      class="flex absolute flex-col gap-6 left-[101px] max-w-[573px] top-[37px] max-md:left-[50px] max-md:max-w-[80%] max-md:top-[30px] max-sm:top-5 max-sm:left-5 max-sm:max-w-[90%]"
    >
      <div class="flex flex-col gap-9">
        <h1
          class="text-[60px] text-left font-bold text-white leading-[60px] max-md:text-5xl max-md:leading-10 max-sm:text-4xl max-sm:leading-10"
        >
          Полная обстановка за один день!
        </h1>
        <p
          class="text-[27px] text-left leading-9 text-white max-w-[306px] max-md:text-2xl max-md:leading-8 max-sm:max-w-full max-sm:text-xl max-sm:leading-7"
        >
          Гарантируем качество и долговечность.
        </p>
      </div>

      <button
        class="relative h-[47px] w-[189px] bg-gradient-to-tr from-[#f35c37] to-[#f88d3d] max-sm:w-40 max-sm:h-10"
      >
        <div class="rounded-md size-full bg-transparent"></div>
        <span
          class="absolute top-2/4 left-2/4 text-base font-bold text-white whitespace-nowrap -translate-x-2/4 -translate-y-2/4 max-sm:text-sm"
        >
          Подробнее
        </span>
      </button>
    </div>
  </section>
  <PopularProducts />
</template>

<style scoped>
.app-main {
  margin-top: 45px;
}
</style>
