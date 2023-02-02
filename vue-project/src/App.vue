<script lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./components/Header.vue";
export default {
  data: () => ({}),
  components: {
    Header,
  },
};
</script>

<template>
  <v-app>
    <Header />
    <RouterView />
  </v-app>
</template>

<style scoped></style>
