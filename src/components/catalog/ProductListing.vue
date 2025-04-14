<template>
  <section
    class="box-border flex flex-col items-start p-5 mx-auto my-0 w-full max-w-[1254px] max-md:max-w-[991px] max-sm:max-w-screen-sm"
  >
    <aside
      class="mb-5 bg-white rounded-xl border border-solid border-neutral-200 h-[687px] w-[289px] max-md:hidden"
    >
      <!-- Filters section -->
    </aside>

    <div
      class="flex flex-wrap gap-4 max-md:justify-center max-sm:flex-col max-sm:items-center"
    >
      <ProductCard
        v-for="product in products"
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

    <Pagination :total-pages="25" :current-page="1" />

    <SortDropdown />
  </section>
</template>

<script setup>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
import ProductCard from "../main/product-cards/ProductCard.vue";
console.log("aa");

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
