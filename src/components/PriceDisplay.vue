<template>
  <div class="flex gap-3.5 items-center mt-3.5 self-left">
    <div v-if="!discountPrice" class="flex items-left">
      <span class="text-2xl font-medium leading-5 text-zinc-800">
        {{ price }}₸
      </span>
    </div>
    <div v-else class="flex gap-5 items-left">
      <span v-if="price" class="text-sm leading-4 text-zinc-400 line-through">
        {{ price }}₸
      </span>
      <span class="text-2xl font-medium leading-5 text-zinc-800">
        {{ discountPrice }}₸
      </span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  discountPrice: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    default: "",
  },
});
</script>
