<template>
  <v-card class="mx-auto" width="344px" height="300px">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title> {{ content?.title }} </v-card-title>

    <v-card-subtitle> {{ content?.subtitle }}</v-card-subtitle>
    <v-card-subtitle> Price: {{ content?.price }} </v-card-subtitle>

    <!-- <v-card-actions>
      <v-spacer></v-spacer>

      <svg-icon type="mdi" :path="upIcon" v-if="show" @click="show = !show"></svg-icon>
      <svg-icon type="mdi" :path="downIcon" v-else @click="show = !show"></svg-icon>
    </v-card-actions> -->
  </v-card>
</template>

<script lang="ts">
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
export default {
  props: {
    content: {
      type: Object 
    }
  },
  data: () => ({
    show: false,
    upIcon: mdiChevronUp,
    downIcon: mdiChevronDown,
  }),
  components: {
    SvgIcon,
  },
};
</script>
