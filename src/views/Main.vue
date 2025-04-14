<script setup>
import PopularProducts from "../components/main/section-cards/PopularProducts.vue";
import PromotionalSection from "../components/main/section-cards/PromotionalSection.vue";
import ProductCategoryCard from "../components/main/section-cards/ProductCategoryCard.vue";
import InfoCard from "../components/main/section-cards/InfoCard.vue";
import FooterComponent from "../components/footer/FooterComponent.vue";
</script>

<template>
  <main class="w-full h-full bg-[#ffffff] flex flex-col items-center">
    <section class="overflow-hidden relative w-full h-[505px] mt-11">
      <img src="../assets/Frame 4.svg" class="object-cover size-full" />

      <div
        class="flex absolute flex-col gap-6 left-[101px] max-w-[573px] top-[37px] max-md:left-[50px] max-md:max-w-[80%] max-md:top-[30px] max-sm:top-5 max-sm:left-5 max-sm:max-w-[90%]"
      >
        <div class="flex flex-col gap-9">
          <h1
            class="text-[60px] text-left font-bold text-white leading-[60px] max-md:text-5xl max-md:leading-10 max-sm:text-4xl max-sm:leading-10"
          >
            Полная обстановка за один день!
          </h1>
          <p
            class="text-[27px] text-left leading-9 text-white max-w-[306px] max-md:text-2xl max-md:leading-8 max-sm:max-w-full max-sm:text-xl max-sm:leading-7"
          >
            Гарантируем качество и долговечность.
          </p>
        </div>

        <button
          class="relative h-[47px] w-[189px] bg-gradient-to-tr from-[#f35c37] to-[#f88d3d] max-sm:w-40 max-sm:h-10"
        >
          <div class="rounded-md size-full bg-transparent"></div>
          <span
            class="absolute top-2/4 left-2/4 text-base font-bold text-white whitespace-nowrap -translate-x-2/4 -translate-y-2/4 max-sm:text-sm"
          >
            Подробнее
          </span>
        </button>
      </div>
    </section>
    <PopularProducts />
    <!-- STROKE -->
    <div class="stroke w-full max-w-[1252px] h-[1px] bg-[#FFC844] mt-20"></div>
    <!-- STROKE -->
    <PromotionalSection />
    <section class="mt-[55px] max-md:mt-[30px]">
      <h2
        class="text-3xl font-bold leading-8 text-neutral-900 text-left w-full max-w-[1252px]"
      >
        Наши категории товаров
      </h2>
      <div
        class="flex flex-wrap justify-center mt-[64px] gap-8 max-lg:flex-col max-lg:gap-5 max-lg:items-center"
      >
        <ProductCategoryCard
          title="Шкафы (МДФ)"
          description="Стильные и прочные шкафы из МДФ для хранения и организации пространства."
          backgroundImage="/src/assets/shkafsImg.svg"
        />
        <ProductCategoryCard
          title="Шкафы (распашные)"
          description="Классические распашные шкафы с удобными дверцами для вашего интерьера."
          backgroundImage="/src/assets/shkafsOtherImg.svg"
        />
        <ProductCategoryCard
          title="Шкафы (купе)"
          description="Классические распашные шкафы с удобными дверцами для вашего интерьера."
          backgroundImage="/src/assets/shkafsAnotherImg.svg"
        />
      </div>
    </section>
    <!-- STROKE -->
    <div class="stroke w-full max-w-[1252px] h-[1px] bg-[#FFC844] mt-12"></div>
    <!-- STROKE -->
    <section class="mt-[100px] max-md:mt-[30px] mb-30">
      <h2
        class="text-3xl font-bold leading-8 text-neutral-900 text-left w-full max-w-[1252px]"
      >
        Доставка и оплата
      </h2>
      <div
        class="flex gap-5 mt-14 flex-wrap justify-center max-lg:flex-col max-lg:gap-5 max-lg:items-center"
      >
        <InfoCard
          title="Условия доставки"
          description="Узнайте подробности о нашей бесплатной доставке и профессиональной сборке."
          image="/src/assets/deliveryImg.svg"
          altText="Delivery conditions"
        />
        <InfoCard
          title="Условия оплаты"
          description="Откройте все доступные способы оплаты и условия рассрочки."
          image="/src/assets/paymentImg.svg"
          altText="Payment conditions"
        />
        <InfoCard
          title="О компании"
          description="Узнайте больше о компании и наших преимуществах."
          image="/src/assets/aboutImg.svg"
          altText="About company"
        />
      </div>
    </section>
  </main>
  <FooterComponent />
</template>

<style scoped>
.app-main {
  margin-top: 45px;
}
</style>
