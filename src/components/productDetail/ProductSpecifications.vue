<template>
  <section class="flex flex-col w-full">
    <h2 class="text-2xl h-8 font-bold text-zinc-800">Подробнее о товаре</h2>
    <div class="flex flex-col w-full gap-2">
      <div
        v-for="tab in tabs"
        :key="tab.label"
        class="border border-gray-300 rounded"
      >
        <button
          @click="toggleTab(tab.label)"
          class="w-full text-left px-4 py-3 flex justify-between items-center font-medium"
        >
          {{ tab.label }}
          <span>{{ activeTab === tab.label ? "-" : "+" }}</span>
        </button>
        <transition name="accordion">
          <div
            v-if="activeTab === tab.label"
            class="px-4 py-2 text-sm text-gray-700"
          >
            <div class="flex flex-col gap-2 text-black text-sm">
              <div
                v-for="(item, index) in specs"
                :key="index"
                class="flex justify-between border-b pb-1"
              >
                <span>{{ item.label }}</span>
                <span>{{ item.value }}</span>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";

const route = useRoute();

const productId = route.params.id;
const store = useStore();

const allProducts = computed(() => store.getters["products/allProducts"]);
console.log("allProducts", allProducts);
const product = computed(() => {
  return allProducts.value.find((product) => product.id === productId);
}).value;
const characteristics = product.characteristics;

const tabs = [
  { label: "Характеристики" },
  { label: "Оплата" },
  { label: "Доставка" },
  { label: "Гарантии" },
];
const specs = [
  { label: "ШхВхГ:", value: characteristics.sizes },
  { label: "Материал:", value: characteristics.material },
  { label: "Тип:", value: characteristics.type },
  { label: "Дверцы:", value: characteristics.doors },
  { label: "Число дверей:", value: characteristics.discountDoors },
  { label: "Количество полок:", value: characteristics.discountShelfs },
  { label: "Вес", value: characteristics.kg },
  { label: "Дополнительно", value: characteristics.Additionally },
  { label: "Страна изготовитель", value: characteristics.country },
];

const activeTab = ref(null);

function toggleTab(label) {
  activeTab.value = activeTab.value === label ? null : label;
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 200px;
  opacity: 1;
}
</style>
