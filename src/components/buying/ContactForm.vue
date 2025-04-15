<template>
  <form class="mt-6 max-w-full w-[610px]">
    <div
      class="flex flex-wrap gap-5 items-center text-base font-medium leading-7 whitespace-nowrap max-md:max-w-full"
    >
      <div class="self-stretch my-auto min-w-60 w-[293px]">
        <label class="text-zinc-900">Имя</label>
        <input
          type="text"
          placeholder="Имя"
          class="gap-2.5 px-5 py-5 mt-1.5 w-full text-center rounded-xl border border-solid border-zinc-100 min-h-16 text-neutral-400 max-md:px-5"
        />
      </div>

      <div class="self-stretch my-auto min-w-60 w-[293px]">
        <label class="text-zinc-900">Фамилия</label>
        <input
          type="text"
          placeholder="Фамилия"
          class="gap-2.5 px-5 py-5 mt-1.5 w-full text-center rounded-xl border border-solid border-zinc-100 min-h-16 text-neutral-400 max-md:px-5"
        />
      </div>
    </div>

    <div class="mt-2.5 w-full text-base whitespace-nowrap">
      <div class="relative w-full max-md:max-w-full">
        <label
          class="z-0 font-medium leading-7 text-zinc-900 max-md:max-w-full"
        >
          Email
        </label>
        <input
          type="email"
          value="sadvakasov.rakhat@gmail.com"
          class="flex z-0 mt-1.5 w-full px-6 py-5 rounded-xl border border-solid border-zinc-100 min-h-[65px] max-md:max-w-full"
        />
      </div>
    </div>

    <div
      class="mt-2.5 w-full text-base whitespace-nowrap max-w-[608px] max-md:max-w-full"
    >
      <label class="font-medium leading-7 text-zinc-900 max-md:max-w-full">
        Телефон
      </label>
      <input
        type="tel"
        value="sadvakasov.rakhat@gmail.com"
        class="gap-2.5 px-6 py-5 mt-1.5 w-full leading-none text-center rounded-xl border border-solid border-zinc-100 min-h-16 text-neutral-400 max-md:px-5 max-md:max-w-full"
      />
    </div>

    <div class="mt-2.5 w-full">
      <label class="text-base font-medium text-zinc-900 max-md:max-w-full">
        Адрес доставки
      </label>
      <div
        class="flex flex-col justify-center items-start px-4 py-3 mt-5 w-full text-sm leading-none rounded-xl bg-zinc-100 min-h-12 text-neutral-400 max-md:max-w-full"
      >
        <div class="flex gap-2 items-center">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/17ab8e7a8cbbc8fe203b554034556944b55d645a?placeholderIfAbsent=true&apiKey=dc96ebec1f624997a4c41b0d007c327b"
            class="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
            alt="Location icon"
          />
          <p class="self-stretch my-auto">Астана, Астана, Казахстан</p>
        </div>
      </div>
    </div>

    <div
      class="mt-2.5 w-full text-base font-medium max-w-[607px] max-md:max-w-full"
    >
      <label class="leading-7 text-zinc-900 max-md:max-w-full">
        Описание
      </label>
      <textarea
        placeholder="Напишите о себе"
        class="gap-2.5 px-5 pt-5 pb-24 mt-1.5 w-full leading-loose text-center rounded-xl border border-solid border-zinc-100 min-h-[143px] text-neutral-400 max-md:px-5 max-md:pb-24 max-md:max-w-full"
      ></textarea>
    </div>
  </form>
</template>
