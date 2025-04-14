<template>
  <article
    class="overflow-hidden rounded-3xl bg-neutral-100 h-[519px] w-[404px] max-sm:w-full"
  >
    <img
      :src="image"
      :alt="altText"
      class="object-cover m-2.5 rounded-2xl h-[249px] w-[383px] max-sm:w-[calc(100%_-_20px)]"
    />
    <div class="px-9 py-8">
      <h3 class="mb-6 text-3xl font-semibold text-neutral-900">{{ title }}</h3>
      <p class="mb-16 text-base font-medium leading-6 text-stone-500">
        {{ description }}
      </p>
      <button
        class="text-base font-bold rounded-md cursor-pointer border-[none] h-[47px] text-white w-[250px] max-sm:w-full bg-red-500 hover:bg-red-600 transition-colors"
      >
        ПОДРОБНЕЕ
      </button>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      required: true,
    },
  },
};
</script>
