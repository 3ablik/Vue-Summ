<script setup>
import ProductLabel from "./ProductLabel.vue";

const props = defineProps({
  image: String,
  category: String,
  name: String,
  discount: String,
  discountPrice: String,
  price: {
    type: String,
    required: false,
  },
  isNew: {
    type: Boolean,
    required: false,
  },
});
</script>

<template>
  <article
    class="relative bg-white w-[289px] max-md:w-[calc(50%_-_10px)] max-sm:w-full max-sm:max-w-[289px]"
  >
    <div class="relative h-[221px] w-[289px]">
      <img :src="image" class="object-cover rounded-xl size-full" />
      <div v-if="isNew" class="absolute top-4 left-[15px]">
        <ProductLabel type="new" />>
      </div>
      <div v-if="discount" class="absolute top-4 left-[15px]">
        <ProductLabel type="discount" :price="price" :percent="discountPrice" />
      </div>
    </div>
    <div class="mt-6 text-left text-sm leading-4 text-neutral-400">
      {{ category }}
    </div>
    <h3 class="mt-2.5 text-lg text-left leading-5 min-h-10 text-zinc-800">
      {{ name }}
    </h3>
    <div v-if="discount" class="flex items-center mt-3.5">
      <span class="mr-3.5 text-sm leading-5 line-through text-neutral-400">{{
        price
      }}</span>
      <span class="text-2xl font-medium leading-5 text-zinc-800">{{
        discountPrice
      }}</span>
    </div>
    <div v-if="!discount" class="flex items-center mt-3.5">
      <span class="text-2xl font-medium leading-5 text-zinc-800">{{
        price
      }}</span>
    </div>
  </article>
</template>
