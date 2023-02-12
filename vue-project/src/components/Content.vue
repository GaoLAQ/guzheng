<script setup lang="ts">
import img from "../assets/background.jpg";
import Contact from "../components/Contact.vue";
import HeaderComponent from "../components/Header.vue";
</script>

<template>
  <v-img :src="img" class="background">
    <HeaderComponent :isTextWhite="true" />
  </v-img>
  <br />
  <v-row>
    <Contact />
  </v-row>
</template>

<style scoped>
.background {
  max-width: 100%;
}
/* .background {
  width: 100%;
  height: auto;
  position: absolute;
  top: 0;
  left: 0;
} */
</style>
