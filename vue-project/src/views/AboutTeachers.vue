<script lang="ts">
import { useDisplay } from "vuetify";
import HeaderComponent from "../components/Header.vue";
export default {
  components: {
    HeaderComponent,
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
    <v-row>
      <HeaderComponent
        class="header-component"
        :isTextWhite="false"
        :isHome="false"
      />
    </v-row>

    <v-row class="mt-0" justify="center">
      <v-card width="90%" elevation="0">
        <v-card-text class="text-justify">
          Biography: Anqi Qu(born in 1996) is a Chinese instrument (Guzheng)
          performance and composer in London. As a performer, she is committed
          to the combination of classical and mordern music. Qu has been
          commissioned by UK Chinese Ensemble, London Youlan Qin Society,
          collaborate with famous pipa and Quqin performer, Dr Cheng Yu. And
          honnred to join BBC 'Doctor Who' to play Guzheng for the Soundtrack
          background. Qu finished her Bachelor of Music degree in Shengyang
          conservatitry of music as a Guzheng performer under Prof. Chen Yao.
          Currently, she is also going to active her degree asa a composer in
          UK.
        </v-card-text>
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
