<script lang="ts">
import { useDisplay } from "vuetify";

export default {
  props: {
    isTextWhite: {
      type: Boolean,
    },
  },
  data: () => ({
    items: [
      { title: "Lessons", link: "/lessons" },
      { title: "Teachers", link: "/teachers" },
    ],
    location: " bottom",
    hover: false,
  }),
  computed: {
    textSize() {
      const { name } = useDisplay();
      switch (name.value) {
        case "xs":
          return "10px";
        case "sm":
          return "14px";
        case "md":
          return "16px";
        case "lg":
          return "18px";
        case "xl":
          return "24px";
      }
      return undefined;
    },
    size() {
      const { name } = useDisplay();
      switch (name.value) {
        case "xs":
          return "x-small";
        case "sm":
          return "small";
        case "md":
          return "medium";
        case "lg":
          return "large";
        case "xl":
          return "x-large";
      }
      return undefined;
    },
  },
  methods: {
    goToPage(link: any) {
      this.$router.push(link);
    },
    scrollDown() {
      const el = document.getElementById("viewPoint");
      console.log(el);
      if (el) {
        el.scrollIntoView();
      }
    },
  },
};
</script>

<template>
  <v-row class="ma-2">
    <v-col cols="12" xs="12" sm="10" md="8">
      <span
        :class="[isTextWhite ? 'text-white' : '']"
        :size="textSize"
        class="h2 body-xs-body-2"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="goToPage('/home')"
      >
        China | instrument | Guzheng</span
      >
      <span
        class="ml-2 body-4"
        :class="[isTextWhite ? 'text-white' : '']"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="scrollDown()"
      >
        Contact
      </span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto">
      <v-btn
        :size="size"
        variant="text"
        class="text-capitalize"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/home')"
      >
        Home
      </v-btn>
      <v-btn
        :size="size"
        variant="text"
        class="text-capitalize"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/about')"
      >
        About
      </v-btn>
      <v-menu
        open-on-hover
        :close-on-content-click="false"
        :location="location"
      >
        <template v-slot:activator="{ props }">
          <v-btn
            :size="size"
            variant="text"
            class="text-capitalize"
            :class="[isTextWhite ? 'text-white' : '']"
            v-bind="props"
          >
            Lessons
          </v-btn>
        </template>

        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="goToPage(item.link)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn
        :size="size"
        variant="text"
        class="text-capitalize"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/shop')"
      >
        Shop
      </v-btn>
      <v-btn
        variant="text"
        :size="size"
        class="text-capitalize"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/opportunity')"
      >
        Opptunitiy
      </v-btn>
    </v-col>
  </v-row>
</template>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
</style>
