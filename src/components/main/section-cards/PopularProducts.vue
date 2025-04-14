<template>
  <section
    class="pt-20 pl-14 pr-14 flex flex-col items-center w-full bg-white max-md:px-8 max-sm:px-4"
  >
    <h2
      class="text-3xl font-bold leading-8 text-neutral-900 text-left w-full max-w-[1252px]"
    >
      Популярные товары
    </h2>
    <div class="flex flex-wrap justify-center max-w-[1252px]">
      <div
        class="flex justify-center gap-8 flex-wrap max-md:gap-6 max-sm:gap-4"
      >
        <ProductCard
          v-for="product in products.slice(0, 2)"
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :category="product.category"
          :name="product.name"
          :discount="product.discount"
          :discountPrice="product.discountPrice"
          :price="product.price"
          :isNew="product.new"
        />
      </div>
      <div
        class="flex justify-center gap-8 flex-wrap max-md:gap-6 max-sm:gap-4"
      >
        <ProductCard
          v-for="product in products.slice(2, 4)"
          :key="product.id"
          :id="product.id"
          :image="product.image"
          :category="product.category"
          :name="product.name"
          :discount="product.discount"
          :discountPrice="product.discountPrice"
          :price="product.price"
          :isNew="product.new"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCard from "../../main/product-cards/ProductCard.vue";

const store = useStore();
console.log(store);

onMounted(async () => {
  if (!store.getters["products/hasLoaded"]) {
    await store.dispatch("products/fetchProducts");
  }
});

const products = computed(() => store.getters["products/allProducts"]);
console.log(products.value);
</script>
