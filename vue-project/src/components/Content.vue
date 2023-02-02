<script setup lang="ts">
import img from "../assets/background.jpg";
import Contact from "../components/Contact.vue";
</script>

<template>
  <v-row>
    <v-img :src="img" class="mb-6"/>
  </v-row>

  <v-row>
    <Contact />
  </v-row>
</template>

<style scoped></style>
