<script lang="ts">
import HeaderComponent from "../components/Header.vue";
import ClassCard from "../components/ClassCard.vue";
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

    <v-row class="mt-1">
      <v-col cols="12">
        <v-row justify="center">
          <h1 class="ma-5">45 mins Gu Zheng trial</h1>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <ClassCard :content="oneToOneContent" />
          <ClassCard :content="groupContent" />
        </v-row>
      </v-col>
    </v-row>
    <v-divider class="ma-5"> </v-divider>

    <v-row class="ma-5" justify="center" width="90%">
      <v-card>
        <v-list>
          <v-list-item class="ml-5">
            We provide two ways of reading notations, numbered or staff notation
            which will be better build a musical foundation for you
          </v-list-item>
          <v-list-item class="ml-5">
            For beginners or advanced performer, will have the opportunity to
            work with more outstanding performers in large scale performers in
            UK
          </v-list-item>
          <v-list-item class="ml-5">
            Also suitable for performance - level teaching for those who want to
            apply for the Chinese Guzheng major student who perform well will
            have the opportunity to take classes directly with professors from
            Chinese consotivate
          </v-list-item>
        </v-list>
      </v-card>
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
