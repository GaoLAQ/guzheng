<script setup lang="ts">
import img from "../assets/background.jpg";
import Contact from "../components/Contact.vue";
import HeaderComponent from "../components/Header.vue";
</script>

<template>
  <v-row class="mb-1">
    <img :src="img" class="background" />
    <HeaderComponent class="header-component" :isTextWhite="true" />
  </v-row>

  <v-row class="mt-1">
    <Contact />
  </v-row>
</template>

<style scoped>
.background {
  width: 100%;
  position: relative;
  top: 0;
  left: 0;
}
.header-component {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
