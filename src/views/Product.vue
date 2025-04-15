<template>
  <main class="flex flex-col items-center rounded-none bg-white">
    <section class="w-full max-w-[1267px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <div class="w-[56%] max-md:ml-0 max-md:w-full">
          <ProductGallery
            :main-image="product?.big__picture"
            :thumbnails="product.images"
          />
        </div>
        <div class="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <ProductInfo :product="product" />
        </div>
      </div>
    </section>
    <ProductSpecifications />
    <section class="w-full max-w-[1366px] max-md:max-w-full mb-10">
      <PopularProducts :name="'Похожие товары'" />
    </section>
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import ProductGallery from "../components/productDetail/ProductGallery.vue";
import ProductInfo from "../components/productDetail/ProductInfo.vue";
import ProductSpecifications from "../components/productDetail/ProductSpecifications.vue";
import PopularProducts from "../components/main/section-cards/PopularProducts.vue";

const route = useRoute();
const productId = route.params.id;
console.log("productId", productId);

const store = useStore();

const allProducts = computed(() => store.getters["products/allProducts"]);
console.log("allProducts", allProducts);
const product = computed(() => {
  return allProducts.value.find((product) => product.id === productId);
}).value;
console.log("product", product);
</script>
