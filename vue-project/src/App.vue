<script lang="ts">
import { RouterView } from "vue-router";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",
  data: () => ({}),
});
</script>

<template>
  <div id="app">
    <RouterView />
  </div>
</template>

<style>
.header-component {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: red;
}
</style>
