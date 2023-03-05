<script lang="ts">
import HeaderComponent from "../components/Header.vue";
import ClassCard from "../components/ClassCard.vue";
import { useDisplay } from "vuetify";
import { style } from "../mixins/style.js";
export default {
  mixins: [style],
  data: () => ({
    show: false,
    oneToOneContent: {
      title: "One to One (Private)",
      subtitle: "Onsite / Online",
      price: "££££",
    },
    groupContent: {
      title: "Group lessons",
      subtitle: "Onsite",
      price: "££££",
    },
  }),
  components: {
    HeaderComponent,
    ClassCard,
  },
  computed: {
    textSize() {
      const {
        name: { value },
      } = useDisplay();
      return this.textSizeFunc(value);
    },
  },
  methods: {
    increment() {
      this.$store.commit("increment");
      console.log(this.$store.state.count);
    },
  },
};
</script>

<template>
  <v-row class="mb-10">
    <HeaderComponent
      class="header-component"
      :isTextWhite="false"
      :isHome="false"
    />
  </v-row>
  <br />
  <br />

  <v-row class="ma-5">
    <v-col cols="12">
      <v-row justify="space-around" class="ma-5">
        <h1 class="ma-5" :style="`font-size:${textSize}`">
          45 mins Gu Zheng trial
        </h1>
      </v-row>
    </v-col>
    <v-col>
      <v-row>
        <ClassCard class="ma-1" :content="oneToOneContent" />
        <ClassCard class="ma-1" :content="groupContent" />
      </v-row>
    </v-col>
  </v-row>

  <v-row class="ma-5" justify="center" width="100%">
    <v-list>
      <v-list-item class="text-justify" :style="`font-size:${textSize}`">
        We provide two ways of reading notations, numbered or staff notation
        which will be better build a musical foundation for you
      </v-list-item>
      <v-list-item class="text-justify" :style="`font-size:${textSize}`">
        For beginners or advanced performer, will have the opportunity to work
        with more outstanding performers in large scale performers in UK
      </v-list-item>
      <v-list-item class="text-justify" :style="`font-size:${textSize}`">
        Also suitable for performance - level teaching for those who want to
        apply for the Chinese Guzheng major student who perform well will have
        the opportunity to take classes directly with professors from Chinese
        consotivate
      </v-list-item>
    </v-list>
  </v-row>
</template>

<style scoped></style>
