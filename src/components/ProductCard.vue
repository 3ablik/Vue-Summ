<template>
  <article class="flex-1 bg-white min-w-[289px]">
    <div class="relative flex flex-col items-center p-6">
      <img
        :src="image"
        :alt="name"
        class="h-[221px] rounded-[10px] object-cover self-center"
      />
      <ProductLabel v-if="new" type="new" />
      <ProductLabel
        v-if="discount"
        type="discount"
        :percent="discountPercent"
      />
      <div class="mt-6 text-sm leading-4 text-neutral-400 text-left">
        {{ category }}
      </div>
      <h3 class="mt-2.5 text-lg leading-5 text-zinc-800 text-left">
        {{ name }}
      </h3>
      <PriceDisplay :discountPrice="discountPrice" :price="price" />
    </div>
  </article>
</template>

<script setup>
import ProductLabel from "./ProductLabel.vue";
import PriceDisplay from "./PriceDisplay.vue";

defineProps({
  image: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  discountPrice: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "",
  },
  new: {
    type: Boolean,
    default: false,
  },
  discount: {
    type: Boolean,
    default: false,
  },
  discountPercent: {
    type: String,
    default: "",
  },
});
</script>
