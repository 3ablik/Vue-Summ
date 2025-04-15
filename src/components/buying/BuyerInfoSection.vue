<template>
  <section class="flex flex-col w-full max-md:mt-8 max-md:max-w-full">
    <div class="max-w-full w-[352px]">
      <h2 class="text-3xl font-semibold leading-tight text-neutral-900">
        Покупатель и регион
      </h2>
      <p class="mt-8 text-base text-zinc-900">Тип плательщика</p>
    </div>

    <div
      class="flex gap-8 items-center self-start mt-5 text-base font-medium text-black"
    >
      <p class="gap-2.5 self-stretch my-auto">Физическое лицо</p>
      <div class="flex gap-2.5 items-center self-stretch my-auto">
        <div
          class="flex shrink-0 self-stretch my-auto rounded-full border border-black border-solid bg-zinc-100 h-[26px] w-[25px]"
        ></div>
        <p class="self-stretch my-auto">Физическое лицо</p>
      </div>
    </div>

    <p class="mt-5 text-base text-zinc-900 max-md:max-w-full">Местоположение</p>

    <div
      class="flex flex-col justify-center items-start px-4 py-3 mt-5 w-full text-sm leading-none rounded-xl bg-zinc-100 min-h-12 text-neutral-400 max-md:max-w-full"
    >
      <div class="flex gap-2 items-center">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/209e9e28ac2a688a0b19c35f480a0fa4bf2da2d0?placeholderIfAbsent=true&apiKey=dc96ebec1f624997a4c41b0d007c327b"
          class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
          alt="Location icon"
        />
        <p class="self-stretch my-auto">Астана, Астана, Казахстан</p>
      </div>
    </div>

    <div class="mt-5 w-full whitespace-nowrap max-md:max-w-full">
      <div class="w-full max-md:max-w-full">
        <div class="w-full max-md:max-w-full">
          <label class="text-sm font-medium leading-none text-slate-700">
            Индекс
          </label>
          <div
            class="flex overflow-hidden items-start px-5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-xl border border-solid shadow-sm border-zinc-100 max-md:max-w-full"
          >
            <input
              type="text"
              value="101000"
              class="flex-1 shrink gap-2 self-stretch py-3 pr-4 w-full basis-0 min-w-60 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>

    <p class="mt-5 text-xs leading-loose text-zinc-900 max-md:max-w-full">
      Выберите свой город в списке. Если вы не нашли свой город выберите "другое
      местоположение". а город впишите в поле "Город"
    </p>
  </section>
</template>
