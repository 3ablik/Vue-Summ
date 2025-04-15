<template>
  <aside
    class="px-7 pt-5 pb-11 mx-auto w-full bg-white rounded-xl max-md:px-5 max-md:mt-8"
  >
    <div class="flex gap-5 justify-between text-sm font-bold leading-loose">
      <h3 class="text-zinc-900">Ваш заказ</h3>
      <button class="text-zinc-500">Изменить</button>
    </div>

    <div class="flex flex-wrap items-start mt-11 w-full max-md:mt-10">
      <div class="flex grow shrink gap-10 rounded-none min-w-60 w-[323px]">
        <div class="flex flex-col">
          <h4 class="text-base font-semibold leading-5 text-zinc-900">
            Комфорт 4 дуб сонома белый без ящика
          </h4>
          <p class="self-start text-xs leading-none text-zinc-500">
            Код Товара: Fn-0026
          </p>
        </div>
        <p
          class="self-start text-sm font-bold leading-loose text-right text-zinc-900"
        >
          755000₸
        </p>
      </div>

      <div
        class="flex flex-wrap grow shrink gap-10 items-center font-medium min-w-60 w-[324px]"
      >
        <p class="self-stretch my-auto text-sm leading-loose text-neutral-900">
          НДС (12%, включен в цену):
        </p>
        <p
          class="self-stretch my-auto text-sm leading-loose text-right text-zinc-900"
        >
          1350₸
        </p>
        <div
          class="grow shrink self-stretch my-auto h-0 border border-black border-solid w-[62px]"
        ></div>
      </div>

      <div
        class="flex flex-wrap grow shrink items-start font-medium whitespace-nowrap min-w-60 w-[324px]"
      >
        <p class="text-sm leading-loose text-neutral-900">Доставка</p>
        <p class="text-sm leading-loose text-right opacity-50 text-zinc-900">
          3000₸
        </p>
        <div
          class="grow shrink h-0 border border-black border-solid w-[178px]"
        ></div>
      </div>

      <p
        class="grow shrink text-sm font-bold leading-loose text-black whitespace-nowrap rounded-none w-[33px]"
      >
        Итого:
      </p>
      <p class="text-sm font-bold leading-loose text-right text-zinc-900">
        755000₸
      </p>
    </div>
  </aside>
</template>
