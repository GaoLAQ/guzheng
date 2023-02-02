<script lang="ts">
export default {
  data: () => ({
    itemLists: [
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me" },
      { title: "Click Me 2" },
    ],
    items: [
      {
        text: "Home",
        disabled: false,
        href: "breadcrumbs_dashboard",
      },
      {
        text: "About",
        disabled: false,
        href: "breadcrumbs_link_1",
      },
      {
        text: "Shop",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
      {
        text: "Lessons",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
      {
        text: "Performance Opptunitiy",
        disabled: true,
        href: "breadcrumbs_link_2",
      },
    ],
  }),
};
</script>

<template>
  <v-toolbar>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title>China | instrument | Guzheng</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-breadcrumbs :items="items" divider="|"></v-breadcrumbs>
    <v-menu bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on"> Dropdown </v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in itemLists" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<style scoped></style>
