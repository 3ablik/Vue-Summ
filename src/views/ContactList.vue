<template>
  <div :class="theme">
    <h1>Contact List</h1>
    <ul>
      <li v-for="contact in contacts" :key="contact.id">
        {{ contact.name }} - {{ contact.email }}
      </li>
    </ul>
  </div>
</template>
