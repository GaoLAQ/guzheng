<template>
  <v-row class="ma-4">
    <v-col cols="8" md="6" class="d-flex">
      <span
        :class="[isTextWhite ? 'text-white' : '']"
        :size="textSize"
        class="h2 body-xs-body-2"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="goToPage('/home')"
      >
        China | instrument | Guzheng
      </span>
      <span
        class="ml-2 body-4 d-none d-md-flex"
        :class="[isTextWhite ? 'text-white' : '']"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="scrollDown()"
      >
        Contact
      </span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto" class="d-none d-md-flex">
      <v-btn
        :size="size"
        variant="text"
        class="text-capitalize mr-1"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/home')"
      >
        Home
      </v-btn>
      <v-btn
        :size="size"
        variant="text"
        class="text-capitalize pr-1"
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
            class="text-capitalize pr-1"
            :class="[isTextWhite ? 'text-white' : '']"
            v-bind="props"
          >
            Lessons
          </v-btn>
        </template>

        <v-list class="responsiveMenu">
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
        class="text-capitalize pr-1"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/shop')"
      >
        Shop
      </v-btn>
      <v-btn
        variant="text"
        :size="size"
        class="text-capitalize pr-1"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/opportunity')"
      >
        Opptunitiy
      </v-btn>
    </v-col>
    <v-col cols="auto" class="d-flex d-md-none">
      <v-menu>
        <template v-slot:activator="{ props }">
          <svg-icon
            type="mdi"
            class="mt-1"
            :path="mdiListBox"
            v-bind="props"
            color="white"
          ></svg-icon>
        </template>

        <v-list>
          <v-list-item
            v-for="(item, index) in menuItems"
            :key="index"
            :value="index"
          >
            <v-list-item-title @click="goToPage(item.link)">
              <span :size="textSize"> {{ item.title }}</span>
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { useDisplay } from "vuetify";
import { mdiListBox } from "@mdi/js";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";

export default {
  props: {
    isTextWhite: {
      type: Boolean,
    },
  },
  data: () => ({
    mdiListBox: mdiListBox as string,
    items: [
      { title: "Lessons", link: "/lessons" },
      { title: "Teachers", link: "/teachers" },
    ],
    location: " bottom",
    hover: false,
    menuItems: [
      { title: "Home", link: "/home" },
      { title: "About", link: "/about" },
      { title: "Lessons", link: "/lessons" },
      { title: "Shop", link: "/shop" },
      { title: "Opptunity", link: "opptunity" },
    ],
  }),
  components: {
    SvgIcon,
  },
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

<style scoped>
.v-btn::before {
  background-color: transparent;
}
.v-list-item--density-default:not(.v-list-item--nav).v-list-item--one-line {
  padding-inline-start: 7px;
  padding-inline-end: 9px;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 33px;
  padding-top: 4px;
  padding-bottom: 4px;
}
.v-list-item-title {
  hyphens: auto;
  overflow-wrap: normal;
  overflow: hidden;
  padding: 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: normal;
  word-wrap: break-word;
  font-size: 10px;
  font-weight: 400;
  letter-spacing: 0.009375em;
  line-height: 8px;
  text-transform: none;
}
</style>
