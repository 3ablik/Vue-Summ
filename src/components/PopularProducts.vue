<template>
  <section class="mt-16 flex flex-col w-full bg-white max-md:px-8 max-sm:px-4">
    <h2 class="text-3xl font-bold leading-8 text-neutral-900 text-left">
      Популярные товары
    </h2>
    <div class="flex justify-center gap-8 flex-wrap max-md:gap-6 max-sm:gap-4">
      <ProductCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/662ee948cd516a42d6e77b2bfd7e9131c3b573b0"
        category="Офисные кресла"
        name="Комфорт 4 дуб сонома белый без ящика"
        discountPrice="15 000 ₸"
        price="25 000 ₸"
      />
      <ProductCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/124a4da6c09b8230513a076cddbd55a3b9a28211"
        category="Мебель для персонала"
        name="Комфорт 3 дуб бунратти с зеркалом"
        discountPrice="15 000 ₸"
        :new="true"
      />
      <ProductCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/1c647ffdf7b1e228cce29447426ae3fd6775aabe"
        category="Мебель для персонала"
        name="Версаль бетон пайн"
        discountPrice="15 000 ₸"
      />
      <ProductCard
        image="https://cdn.builder.io/api/v1/image/assets/TEMP/d37c2fca830a39b416894a76e2fd1a792e4e8ae6"
        category="Офисные кресла"
        name="Комфорт 3 дуб сонома серый"
        discountPrice="15 000 ₸"
        price="25 000 ₸"
        :discount="true"
        discountPercent="50"
      />
    </div>
  </section>
</template>

<script setup>
import ProductCard from "./ProductCard.vue";
</script>
