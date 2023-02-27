<template>
  <v-row>
    <v-col cols="8" md="7" class="d-flex">
      <span
        :class="[isTextWhite ? 'text-white' : '']"
        :size="textSize"
        class="h1 body-xs-body-2 logo-name ma-3"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="goToPage('/home')"
      >
        China | instrument | Guzheng
      </span>
      <span
        class="ml-2 body-4 d-none d-md-flex ma-3"
        :class="[isTextWhite ? 'text-white' : '']"
        :style="`font-size:${textSize}; cursor: pointer`"
        @click="scrollDown()"
      >
        Contact
      </span>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="auto" class="d-none d-md-flex">
      <span
        :size="size"
        class="ma-3"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/home')"
      >
        Home
      </span>

      <span
        :size="size"
        class="ma-3"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/about')"
      >
        About
      </span>

      <v-menu open-on-hover :close-on-content-click="false">
        <template v-slot:activator="{ props }">
          <span
            :size="size"
            class="ma-3"
            :class="[isTextWhite ? 'text-white' : '']"
            v-bind="props"
          >
            Lessons
          </span>
        </template>

        <v-list class="responsiveMenu">
          <v-list-item v-for="(item, index) in items" :key="index">
            <v-list-item-title @click="goToPage(item.link)">{{
              item.title
            }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <span
        :size="size"
        class="ma-3"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/shop')"
      >
        Shop
      </span>
      <span
        :size="size"
        class="ma-3"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="goToPage('/opportunity')"
      >
        Opptunitiy
      </span>
    </v-col>
    <v-col cols="auto" class="d-flex d-md-none shrink-icon">
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
            <v-list-item-title>
              <span class="list-item-title" @click="goToPage(item.link)">
                {{ item.title }}</span
              >
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
          return "12px";
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
.shrink-icon {
  position: absolute;
  right: -12px;
  top: 5px;
}
.list-item-title {
  font-size: 10px;
}
.v-list-item--density-default.v-list-item--one-line {
  min-height: 35px;
  padding-top: 4px;
  padding-bottom: 4px;
}
</style>
