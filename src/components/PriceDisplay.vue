<template>
  <div class="flex gap-3.5 items-center mt-3.5 self-left">
    <span v-if="price" class="text-sm leading-5 line-through text-neutral-400">
      {{ price }}
    </span>
    <span class="text-2xl font-medium leading-5 text-zinc-800">
      {{ discountPrice }}
    </span>
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
