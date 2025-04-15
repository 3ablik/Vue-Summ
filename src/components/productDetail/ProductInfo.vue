<template>
  <article
    class="flex flex-col items-start self-stretch my-auto w-full text-base max-md:mt-10 max-md:max-w-full"
  >
    <h1 class="text-3xl font-semibold leading-10 text-neutral-900 w-[554px]">
      {{ product?.name }}
    </h1>
    <p class="mt-8 text-lg leading-none text-neutral-500">
      Код товара: {{ product?.itemCode }}
    </p>
    <div class="flex flex-col mt-10">
      <p class="text-3xl leading-none text-black">755 000 ₸</p>
      <p class="mt-5 text-xl leading-none line-through text-neutral-400">
        {{ product?.price }} ₸
      </p>
    </div>
    <div
      class="flex gap-5 justify-between mt-5 max-w-full font-bold tracking-wide text-center w-[414px]"
    >
      <button
        class="gap-2.5 self-stretch px-11 py-2.5 text-white bg-amber-300 rounded-md max-md:px-5"
      >
        В корзину
      </button>
      <router-link to="/checkout">
        <button
          class="gap-2.5 self-stretch px-11 py-2.5 text-amber-300 rounded-md border border-amber-300 border-solid max-md:px-5"
        >
          Купить в 1 клик
        </button></router-link
      >
    </div>
    <h2 class="mt-14 font-bold uppercase text-neutral-700 max-md:mt-10">
      описание товара:
    </h2>
    <hr class="flex shrink-0 mt-5 max-w-full h-px bg-gray-200 w-[416px]" />
    <p class="self-stretch mt-5 leading-6 text-stone-500 max-md:max-w-full">
      {{ product?.description }}
    </p>
  </article>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
});
</script>
