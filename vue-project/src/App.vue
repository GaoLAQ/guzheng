<script lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/Header.vue";
export default {
  data: () => ({}),
  components: {
    HeaderComponent,
  },
};
</script>

<template>
  <v-app>
    <RouterView />
  </v-app>
</template>

<style scoped></style>
