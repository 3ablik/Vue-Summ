<template>
  <div class="max-w-[1254px] m-auto mb-10 mt-12">
    <h2
      class="text-3xl font-bold leading-8 text-neutral-900 text-left mb-5 max-md:mb-0 max-sm:mb-5"
    >
      Акции, скидки
    </h2>
    <div
      class="w-[57px] h-[3px] rounded-full bg-[#ffc844] mb-5 max-md:mb-0 max-sm:mb-5"
    ></div>
  </div>
  <section class="flex justify-between max-w-[1254px] m-auto">
    <aside class="justify-baseline w-[254px] h-[625px]">
      <h2 class="text-3xl font-bold leading-8 text-neutral-900 text-left">
        Категория
      </h2>
      <div>
        <div
          v-for="category in categories"
          :key="category"
          class="flex flex-col items-center"
        >
          <router-link
            :to="'/catalog/' + category"
            class="flex flex-col items-center justify-between w-[245px] max-h-[45px] min-h-[38px] mt-[12px]"
          >
            <div class="stroke w-full max-w-[254px] h-[1px] bg-[#B5B5B5]"></div>

            <div
              class="flex items-center justify-baseline w-full max-w-[254px]"
            >
              <div
                class="w-2 h-2 rounded-full bg-[#B5B5B5]"
                :class="{ 'bg-[#ffc844]': category === currentCategory }"
              ></div>
              <span
                class="text-[16px] text-[#151515] font-normal ml-5"
                :class="{
                  'text-[#ffc844] font-semibold': category === currentCategory,
                }"
                >{{ category }}</span
              >
            </div>
          </router-link>
        </div>
      </div>
    </aside>

    <div
      class="box-border flex flex-col items-start p-5 mx-auto my-0 w-full max-w-[1254px] max-md:max-w-[991px] max-sm:max-w-screen-sm"
    >
      <div
        class="flex items-baseline justify-between w-[300px] h-[36px] mb-5 max-md:justify-center max-sm:flex-col max-sm:items-center border-[3px] border-[#e5e5e5] rounded-[5px]"
      >
        <label class="text-black ml-auto">Сортировка:</label>
        <select
          v-model="sortBy"
          @change="console.log('sortBy.value', sortBy)"
          class="mb-5 p-2 border border-none text-[#026d4e] underline"
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
    </div>
  </section>
</template>

<script setup>
import { useRoute } from "vue-router";
import { computed, onMounted, ref, watch } from "vue";
import { useStore } from "vuex";
import ProductCard from "../main/product-cards/ProductCard.vue";

const route = useRoute();
const store = useStore();

onMounted(async () => {
  if (!store.getters["products/hasLoaded"]) {
    await store.dispatch("products/fetchProducts");
  }
});

const category = ref(route.params.category);
const currentCategory = computed(() => route.params.category);

watch(
  () => route.params.category,
  (newCategory) => {
    category.value = newCategory;
  }
);

const allProducts = computed(() => store.getters["products/allProducts"]);
const products = computed(() => {
  return category.value === "none"
    ? allProducts.value
    : allProducts.value.filter(
        (product) => product.category === category.value
      );
});
console.log("products", products.value);

console.log(category);

const sortBy = ref("popular");
console.log("sortBy.value", sortBy.value);

const sortOptions = [
  { value: "popular", label: "по популярности" },
  { value: "price", label: "по цене" },
  { value: "name", label: "по названию" },
  { value: "description", label: "по описанию" },
  { value: "discount", label: "по скидке" },
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
const categories = [
  "Шкафы (МДФ)",
  "Шкафы (распашные)",
  "Шкафы (купе)",
  "Спальные гарнитуры",
  "Кровати",
  "Диваны",
  "Пуфики",
  "Кухонные гарнитуры",
  "Столы",
  "Прихожие",
  "Комоды",
  "Стеллажи",
  "БУ",
];
</script>
