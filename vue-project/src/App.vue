<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
import HeaderComponent from "./components/Header.vue";
export default defineComponent({
  name: "App",
  data: () => ({}),
  components: {
    HeaderComponent,
  },
});
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style scoped></style>
