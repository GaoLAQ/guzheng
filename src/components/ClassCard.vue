<template>
  <v-card class="mx-auto" width="344px" height="300px">
    <v-img
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      height="200px"
      cover
    ></v-img>
    <v-card-title :style="`font-size:${textSize}`">
      {{ content?.title }}
    </v-card-title>
    <v-card-subtitle class="mb-1" :style="`font-size:${textSize}`">
      {{ content?.subtitle }}</v-card-subtitle
    >
    <v-card-subtitle :style="`font-size:${textSize}`">
      Price: {{ content?.price }}
    </v-card-subtitle>
  </v-card>
</template>

<script lang="ts">
import { mdiChevronUp, mdiChevronDown } from "@mdi/js";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { useDisplay } from "vuetify";
import { style } from "../mixins/style.js";

export default {
  mixins: [style],
  props: {
    content: {
      type: Object,
    },
  },
  data: () => ({
    show: false,
    upIcon: mdiChevronUp,
    downIcon: mdiChevronDown,
  }),
  components: {
    SvgIcon,
  },
  computed: {
    textSize() {
      const {
        name: { value },
      } = useDisplay();
      return this.textSizeFunc(value);
    },
  },
};
</script>
