<template>
  <section
    class="box-border flex flex-col items-start p-5 mx-auto my-0 w-full max-w-[1254px] max-md:max-w-[991px] max-sm:max-w-screen-sm"
  >
    <div
      class="flex flex-col items-baseline justify-between w-full mb-5 max-md:justify-center max-sm:flex-col max-sm:items-center"
    >
      <label class="text-black">Сортировать по</label>
      <select
        v-model="sortBy"
        @change="console.log('sortBy.value', sortBy)"
        class="mb-5 p-2 border border-gray-300 rounded text-black"
      >
        <option
          v-for="sortOption in sortOptions"
          :value="sortOption.value"
          :key="sortOption.value"
          class="text-black"
        >
          {{ sortOption.label }}
        </option>
      </select>
      <p class="text-black">{{ sortBy }}</p>
    </div>

    <div
      class="flex flex-wrap gap-4 max-md:justify-center max-sm:flex-col max-sm:items-center"
    >
      <div v-for="product in sortedProducts">
        <router-link :to="'/product/' + product.id">
          <ProductCard
            :key="product.id + '-' + sortBy"
            :id="product.id"
            :image="product.image"
            :category="product.category"
            :name="product.name"
            :discount="product.discount"
            :discountPrice="product.discountPrice"
            :price="product.price"
            :isNew="product.new"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
import ProductCard from "../main/product-cards/ProductCard.vue";

const store = useStore();

onMounted(async () => {
  if (!store.getters["products/hasLoaded"]) {
    await store.dispatch("products/fetchProducts");
  }
});

const products = computed(() => store.getters["products/allProducts"]);

const sortBy = ref("popular");
console.log("sortBy.value", sortBy.value);

const sortOptions = [
  { value: "popular", label: "По популярности" },
  { value: "price", label: "По цене" },
  { value: "name", label: "По названию" },
  { value: "description", label: "По описанию" },
  { value: "discount", label: "По скидке" },
];

const sortedProducts = computed(() => {
  return [...products.value].sort((a, b) => {
    switch (sortBy.value) {
      case "popular":
        return b.id - a.id;
      case "price":
        return a.price - b.price;
      case "name":
        return a.name.localeCompare(b.name);
      case "description":
        return a.description.localeCompare(b.description);
      case "discount":
        const discountA =
          a.discount ?? ((a.price - a.discountPrice) / a.price) * 100;
        const discountB =
          b.discount ?? ((b.price - b.discountPrice) / b.price) * 100;
        return discountB - discountA;
      default:
        return 0;
    }
  });
});
</script>
