<template>
  <section
    class="flex-col gap-8 justify-start max-w-[1252px] w-full mt-14 m-auto"
  >
    <h2
      class="self-baseline text-left text-[#151515] text-3xl font-bold leading-[55px] max-md:text-2xl max-md:leading-10"
    >
      Акции, скидки
    </h2>
    <div
      class="flex gap-8 self-stretch my-auto max-w-full max-lg:flex-wrap max-lg:justify-center max-md:max-w-full"
    >
      <PromotionalCard />
      <SpecialOfferCard />
    </div>
  </section>
</template>

<script>
import PromotionalCard from "./PromotionalCard.vue";
import SpecialOfferCard from "./SpecialOfferCard.vue";

export default {
  name: "PromotionalSection",
  components: {
    PromotionalCard,
    SpecialOfferCard,
  },
};
</script>
