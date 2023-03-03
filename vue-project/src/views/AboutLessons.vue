<script lang="ts">
import HeaderComponent from "../components/Header.vue";
import ClassCard from "../components/ClassCard.vue";
import { useDisplay } from "vuetify";
export default {
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

<template>
  <v-app>
    <v-row class="mb-1">
      <HeaderComponent
        class="header-component"
        :isTextWhite="false"
        :isHome="false"
      />
    </v-row>
    <br />
    <br />

    <v-row class="mt-1">
      <v-col cols="12">
        <v-row justify="space-around">
          <h1 class="ma-5" :style="`font-size:${textSize}`">
            45 mins Gu Zheng trial
          </h1>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <ClassCard :content="oneToOneContent" />
          <br />
          <br />
          <ClassCard :content="groupContent" />
        </v-row>
      </v-col>
    </v-row>

    <br />
    <br />

    <v-row class="ma-5" justify="center" width="90%">
      <v-list>
        <v-list-item class="ml-5 text-justify" :style="`font-size:${textSize}`">
          We provide two ways of reading notations, numbered or staff notation
          which will be better build a musical foundation for you
        </v-list-item>
        <v-list-item class="ml-5 text-justify" :style="`font-size:${textSize}`">
          For beginners or advanced performer, will have the opportunity to work
          with more outstanding performers in large scale performers in UK
        </v-list-item>
        <v-list-item class="ml-5 text-justify" :style="`font-size:${textSize}`">
          Also suitable for performance - level teaching for those who want to
          apply for the Chinese Guzheng major student who perform well will have
          the opportunity to take classes directly with professors from Chinese
          consotivate
        </v-list-item>
      </v-list>
    </v-row>
  </v-app>
</template>

<style scoped>
.header-component {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
