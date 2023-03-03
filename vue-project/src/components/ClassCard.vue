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
export default {
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
      const { name } = useDisplay();
      switch (name.value) {
        case "xs":
          return "12px";
        case "sm":
          return "18px";
        case "md":
          return "20px";
        case "lg":
          return "22px";
        case "xl":
          return "28px";
        default:
          return "28px";
      }
    },
  },
};
</script>
