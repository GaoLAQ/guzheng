<script lang="ts">
import HeaderComponent from "../components/Header.vue";
export default {
  components: {
    HeaderComponent,
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
        <v-card-text>
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
