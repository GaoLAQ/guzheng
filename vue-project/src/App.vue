<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import HeaderComponent from "./components/Header.vue";
export default defineComponent({
  name:'App', 
  data: () => ({}),
  components: {
    HeaderComponent,
  },
});
</script>

<template>
  <v-app id="app">
    <RouterView />
  </v-app>
</template>

<style scoped>

</style>
