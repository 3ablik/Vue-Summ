<template>
  <section
    class="flex flex-col grow justify-center px-2 py-5 w-full bg-white rounded-xl border border-solid border-zinc-100 max-md:mt-2.5 max-md:max-w-full"
  >
    <div class="w-full max-md:max-w-full">
      <div class="max-w-full w-[352px]">
        <h2 class="text-3xl font-semibold leading-tight text-neutral-900">
          Оплата
        </h2>
        <p class="mt-8 text-base text-zinc-900">Выберите способ оплаты</p>
      </div>

      <div
        class="flex gap-8 items-center mt-5 text-base font-medium text-black max-md:max-w-full"
      >
        <p class="gap-2.5 self-stretch my-auto whitespace-nowrap">Картой</p>
        <div
          class="flex gap-2.5 items-center self-stretch my-auto whitespace-nowrap"
        >
          <div
            class="flex shrink-0 self-stretch my-auto rounded-full border border-black border-solid bg-zinc-100 h-[26px] w-[26px]"
          ></div>
          <p class="self-stretch my-auto">Наличными</p>
        </div>
        <div class="flex gap-2.5 items-center self-stretch my-auto">
          <div
            class="flex shrink-0 self-stretch my-auto rounded-full border border-black border-solid bg-zinc-100 h-[26px] w-[25px]"
          ></div>
          <p class="self-stretch my-auto">Удаленная оплата</p>
        </div>
      </div>
    </div>
  </section>
</template>
