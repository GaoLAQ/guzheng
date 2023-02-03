<script setup lang="ts">
import HeaderComponent from "../components/Header.vue";
import guZhengImg from "../assets/guzheng_introduction.jpg";

</script>
<template>
  <v-app>
    <HeaderComponent />
    <v-row justify="center">
      <v-card class="ma-7" elevation="0" width='50%'>
      <v-card-title> Guzheng </v-card-title>
      <v-img :src="guZhengImg" width='700px'>
      <v-card-text class="mt-10 text-black">
        The guzheng has various accounts for its origin. An early guzheng-like
        instrument is said to have been invented by Meng Tian,[6] a general of
        the Qin dynasty (221–206 BCE), largely influenced by the se.[8] Some
        believe the guzheng was originally developed as a bamboo-tube zither as
        recorded in the Shuowen Jiezi, which was later redesigned to be more
        like the se and made from larger curved wooden boards and movable
        bridges.[9] A third legend says the guzheng came about when two people
        fought over a 25-string se. They broke it in half, one person receiving
        a 12-string part and another the 13-string part.[10] Strings were once
        made of silk. During the Qing dynasty (1644–1912) the strings
        transitioned to only wires such as brass.[10] Modern strings are almost
        always steel coated in nylon. First introduced in the 1970s, these
        multi-material strings increased the instrument's volume while
        maintaining an acceptable timbre.[citation needed] The guzheng is often
        decorated. Artists create unique cultural and artistic content on the
        instrument. Decorations include carved art, carved lacquer, straw,
        mother-of-pearl inlays, painting, poetry, calligraphy, shell carving
        (jade), and cloisonné.[citation needed] Guzheng music has similarity
        with folk songs, it is developed on the basis of people's life. Through
        the performance of performers, it reflects the production and life of
        people at that time.[11]
      </v-card-text>
      </v-img>

    </v-card>
    </v-row>

  </v-app>
</template>

<style></style>
