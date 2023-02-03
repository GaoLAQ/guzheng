<script setup lang="ts">
import img from "../assets/background.jpg";
import Contact from "../components/Contact.vue";
import HeaderComponent from "../components/Header.vue";

</script>

<template>
  <v-row>
    <v-img :src="img" class="mb-6">
      <HeaderComponent :isTextWhite='true'/>
    </v-img>
  </v-row>

  <v-row>
    <Contact />
  </v-row>
</template>

<style scoped></style>
