<template>
  <div :class="theme">
    <h1>Sale List</h1>
    <ul>
      <li v-for="sale in sales" :key="sale.id">
        {{ sale.productName }} - {{ sale.salePrice }}
      </li>
    </ul>
  </div>
</template>
