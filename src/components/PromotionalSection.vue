<template>
  <section class="flex justify-between items-center">
    <div
      class="flex flex-wrap gap-8 justify-between items-center self-stretch my-auto w-[1252px] max-md:max-w-full"
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
