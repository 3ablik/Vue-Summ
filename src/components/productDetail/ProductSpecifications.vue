<template>
  <section class="flex flex-col w-full">
    <h2 class="mt-20 text-2xl font-bold leading-3 text-zinc-800 max-md:mt-10">
      Подробнее о товаре
    </h2>
    <img
      :src="specificationImage"
      class="object-contain self-stretch mt-5 w-full aspect-[1000] max-md:max-w-full"
      alt="Product specifications"
    />
    <div
      class="flex shrink-0 self-stretch mt-12 w-full rounded-3xl border border-gray-200 border-solid h-[685px] max-md:mt-10 max-md:mr-1"
    ></div>
  </section>
</template>

<script>
export default {
  name: "ProductSpecifications",
  props: {
    specificationImage: {
      type: String,
      required: true,
    },
  },
};
</script>
