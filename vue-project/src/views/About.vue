<script setup lang="ts">
import HeaderComponent from "../components/Header.vue";
import guZhengImg from "../assets/guzheng_introduction.jpg";
import { useDisplay } from "vuetify";
import { computed } from "vue";
const textSize = computed(() => {
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
});
</script>
<template>
  <v-row class="ma-2">
    <HeaderComponent :isTextWhite="false" :isHome="false" />
  </v-row>

  <v-row justify="center" class="mt-0">
    <v-card class="ma-2" elevation="0">
      <v-card-title class="ml-5"> Guzheng </v-card-title>
      <v-img cover class="align-center ma-5" :src="guZhengImg">
        <v-card-text
          class="text-black text-justify ma-5"
          :style="`font-size:${textSize}`"
          style="padding: 10px; line-height: 1.8"
        >
          The guzheng has various accounts for its origin. An early guzheng-like
          instrument is said to have been invented by Meng Tian,[6] a general of
          the Qin dynasty (221–206 BCE), largely influenced by the se.[8] Some
          believe the guzheng was originally developed as a bamboo-tube zither
          as recorded in the Shuowen Jiezi, which was later redesigned to be
          more like the se and made from larger curved wooden boards and movable
          bridges.[9] A third legend says the guzheng came about when two people
          fought over a 25-string se. They broke it in half, one person
          receiving a 12-string part and another the 13-string part.[10] Strings
          were once made of silk. During the Qing dynasty (1644–1912) the
          strings transitioned to only wires such as brass.[10] Modern strings
          are almost always steel coated in nylon. First introduced in the
          1970s, these multi-material strings increased the instrument's volume
          while maintaining an acceptable timbre.[citation needed] The guzheng
          is often decorated. Artists create unique cultural and artistic
          content on the instrument. Decorations include carved art, carved
          lacquer, straw, mother-of-pearl inlays, painting, poetry, calligraphy,
          shell carving (jade), and cloisonné.[citation needed] Guzheng music
          has similarity with folk songs, it is developed on the basis of
          people's life. Through the performance of performers, it reflects the
          production and life of people at that time.[11]
        </v-card-text>
      </v-img>
    </v-card>
  </v-row>
</template>

<style scoped>
.header-component {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
