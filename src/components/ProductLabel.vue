<template>
  <div class="absolute top-[16px] left-[15px] w-[60px] h-[60px]">
    <svg
      :width="61"
      :height="61"
      viewBox="0 0 61 61"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :cx="30.9045"
        :cy="30.6001"
        r="30"
        :fill="type === 'new' ? 'url(#paint0_linear)' : '#FFC844'"
      />
      <text
        fill="white"
        xml:space="preserve"
        style="white-space: pre"
        font-family="Inter"
        font-size="18"
        font-weight="500"
        letter-spacing="0em"
        :x="type === 'new' ? '11.9045' : '7.7654'"
        :y="type === 'new' ? '36.691' : '38.25'"
      >
        {{ labelText }}
      </text>
      <defs v-if="type === 'new'">
        <linearGradient
          id="paint0_linear"
          x1="1.34782"
          y1="65.5554"
          x2="66.919"
          y2="40.5935"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F35C37" />
          <stop offset="1" stop-color="#F88D3D" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ["new", "discount"].includes(value.toLowerCase()),
  },
  percent: {
    type: String,
    default: "",
  },
});

const labelText = computed(() => {
  return props.type === "new" ? "New" : `-${props.percent}%`;
});
</script>
