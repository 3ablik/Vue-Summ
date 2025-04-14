<template>
  <article
    class="overflow-hidden relative rounded-2xl h-[486px] w-[396px] max-sm:w-full max-sm:h-[400px]"
  >
    <div
      class="bg-center bg-cover size-full bg-blend-overlay"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    ></div>
    <div
      class="absolute top-0 left-0 size-full bg-gradient-to-t from-black/70 to-white/20"
    >
      <div class="absolute bottom-10 left-[34px] text-white">
        <h3 class="mb-5 text-3xl font-bold">{{ title }}</h3>
        <p class="text-base leading-6 max-w-[330px]">
          {{ description }}
        </p>
        <div class="absolute bottom-[-5px] right-[-316px]">
          <div
            class="flex justify-center items-center rounded-full h-[59px] w-[59px]"
          >
            <i class="ti ti-arrow-up-right text-2xl text-red-500 rotate-45"></i>
          </div>
        </div>
      </div>
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
    backgroundImage: {
      type: String,
      required: true,
    },
  },
};
</script>
