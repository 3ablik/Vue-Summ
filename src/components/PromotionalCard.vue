<template>
  <article
    class="w-[824px] min-w-[396px] flex-shrink self-stretch my-auto text-2xl max-lg:max-w-[600px] leading-none rounded-none"
  >
    <div
      class="flex relative flex-col items-start px-16 py-28 w-full rounded-none max-h-[519px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
    >
      <img
        src="../assets/promCardFrame.svg"
        alt="Autumn sale background"
        class="object-cover absolute inset-0 size-full"
      />
      <span class="relative px-4 py-4 text-white bg-white/20 rounded-[60px]">
        9–16 сентября
      </span>
      <h2
        class="relative mt-11 text-5xl w-48 font-bold leading-[55px] text-zinc-800 max-md:mt-10 max-md:ml-1 max-md:text-4xl max-md:leading-[54px]"
      >
        Осенние скидки
      </h2>
      <p class="relative mt-8 text-zinc-800 max-md:ml-1">На распашные шкафы</p>
      <button
        class="flex relative flex-col justify-center px-12 py-5 mt-10 mb-0 text-center bg-white rounded-md max-md:px-5 max-md:mb-2.5 max-md:ml-2.5"
      >
        <span
          class="bg-[linear-gradient(51deg,#f35c37_0%,#f88d3d_100%)] bg-clip-text text-transparent text-clip font-bold"
        >
          Подробнее
        </span>
      </button>
    </div>
  </article>
</template>

<script>
export default {
  name: "PromotionalCard",
};
</script>
