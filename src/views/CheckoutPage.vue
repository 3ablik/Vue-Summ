<template>
  <div class="overflow-hidden bg-white">
    <div
      class="flex flex-col items-start px-14 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full"
    >
      <div class="self-stretch max-md:max-w-full">
        <div class="flex gap-5 max-md:flex-col">
          <div class="w-[67%] max-md:ml-0 max-md:w-full">
            <BuyerInfoSection />
          </div>
          <div class="ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <OrderSummaryCard />
          </div>
        </div>
      </div>

      <div class="mt-6 max-w-full w-[824px]">
        <div class="flex gap-5 max-md:flex-col">
          <div class="w-[42%] max-md:ml-0 max-md:w-full">
            <DeliverySection />
          </div>
          <div class="ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <PaymentSection />
          </div>
        </div>
      </div>

      <ContactForm />
    </div>
  </div>
</template>

<script setup>
import BuyerInfoSection from "../components/buying/BuyerInfoSection.vue";
import OrderSummaryCard from "../components/buying/OrderSummaruCard.vue";
import DeliverySection from "../components/buying/DeliverySection.vue";
import PaymentSection from "../components/buying/PaymentSection.vue";
import ContactForm from "../components/buying/ContactForm.vue";
</script>
