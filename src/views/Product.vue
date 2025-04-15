<template>
  <main class="flex flex-col items-start rounded-none">
    <div class="w-full max-w-[1153px] max-md:max-w-full">
      <div class="flex gap-5 max-md:flex-col">
        <section class="w-[56%] max-md:ml-0 max-md:w-full">
          <ProductGallery
            :main-image="product?.big__picture"
            :thumbnails="product.images"
          />
        </section>
        <section class="ml-5 w-[44%] max-md:ml-0 max-md:w-full">
          <ProductInfo :product="product" />
        </section>
      </div>
    </div>
    <ProductSpecifications
      :specification-image="'https://cdn.builder.io/api/v1/image/assets/TEMP/1d2ea030194b6e7364aead4b38686a4155904a58?placeholderIfAbsent=true&apiKey=dc96ebec1f624997a4c41b0d007c327b'"
    />
  </main>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import ProductGallery from "../components/productDetail/ProductGallery.vue";
import ProductInfo from "../components/productDetail/ProductInfo.vue";
import ProductSpecifications from "../components/productDetail/ProductSpecifications.vue";

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
