<script lang="ts">
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
    location: "bottom",
    hover: false,
  }),
  methods: {
    goToPage(link: any) {
      this.$router.push(link);
    },
    scrollDown() {
      
      const el = document.getElementById('viewPoint')
      console.log(el)
      if (el) {
        el.scrollIntoView();
      }
    },
  },
};
</script>

<template>
  <v-toolbar :color="[isTextWhite ? 'transparent': '']" >
    <v-row>
      <p class="mt-6 ml-10" :class="[isTextWhite ? 'text-white' : '']" @click="goToPage('/home')">
        China | instrument | Guzheng
      </p>

      <p
        v-if="isTextWhite"
        class="mt-6 ml-10"
        :class="[isTextWhite ? 'text-white' : '']"
        @click="scrollDown()"
      >
        Contact
      </p>
    </v-row>

    <v-spacer></v-spacer>
    <div class="mt-8 mr-7">
      <v-row>
        <v-btn
          class="text-capitalize"
          :class="[isTextWhite ? 'text-white' : '']"
          @click="goToPage('/home')"
        >
          Home
        </v-btn>
        <v-btn
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
          class="text-capitalize"
          :class="[isTextWhite ? 'text-white' : '']"
          @click="goToPage('/shop')"
        >
          Shop
        </v-btn>
        <v-btn
          class="text-capitalize"
          :class="[isTextWhite ? 'text-white' : '']"
          @click="goToPage('/opportunity')"
        >
          Performance Opptunitiy
        </v-btn>
      </v-row>
    </div>
  </v-toolbar>
</template>

<style scoped></style>
