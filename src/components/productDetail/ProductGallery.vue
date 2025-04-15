<template>
  <div class="flex flex-col items-start">
    <section class="w-full">
      <img
        :src="mainImage"
        class="object-contain grow w-full rounded-3xl bg-blend-darken aspect-[1.12] max-md:mt-10 max-md:max-w-full"
        alt="Product main image"
      />
    </section>
    <section class="mt-5 max-w-full w-[555px]">
      <div class="flex gap-5 max-md:flex-col">
        <div
          v-for="(image, index) in thumbnails"
          :key="index"
          class="w-3/12 max-md:ml-0 max-md:w-full"
        >
          <img
            :src="image"
            class="object-contain grow shrink-0 max-w-full rounded-2xl bg-blend-darken aspect-[0.95] w-[125px] max-md:mt-5"
            alt="Product thumbnail"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "ProductGallery",
  props: {
    mainImage: {
      type: String,
      required: true,
    },
    thumbnails: {
      type: Array,
      required: true,
    },
  },
};
</script>
