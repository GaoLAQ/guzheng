<script lang="ts">
import { useDisplay } from "vuetify";
import HeaderComponent from "../components/Header.vue";
export default {
  data: () => ({
    messages: [
      {
        avatar:
          "https://www.google.co.uk/url?sa=i&url=https%3A%2F%2Favatars.alphacoders.com%2Favatars%2Fview%2F102943&psig=AOvVaw2w1fiEvS76IpGwktNiJ3QM&ust=1677974216269000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCIjo-Zr7wP0CFQAAAAAdAAAAABAE",
        name: "Anqi Qu",
        title: "Welcome to study Chinese Guzheng",
        excerpt: "Thank you for joining our community...",
      },
    ],
    lorem:
      "Biography: Anqi Qu(born in 1996) is a Chinese instrument (Guzheng) performance and composer in London. As a performer, she is committed to the combination of classical and mordern music. Qu has been commissioned by UK Chinese Ensemble, London Youlan Qin Society, collaborate with famous pipa and Quqin performer, Dr Cheng Yu. And honnred to join BBC 'Doctor Who' to play Guzheng for the Soundtrack background. Qu finished her Bachelor of Music degree in Shengyang conservatitry of music as a Guzheng performer under Prof. Chen Yao. Currently, she is also going to active her degree asa a composer in UK.",
  }),
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
  <v-row class="ma-2">
    <HeaderComponent :isTextWhite="false" :isHome="false" />
  </v-row>

  <v-row class="ma-2" justify="center">
    <v-expansion-panels variant="popout" class="pa-8" height="200px">
      <v-expansion-panel v-for="(message, i) in messages" :key="i" hide-actions>
        <v-expansion-panel-title>
          <v-row align="center" class="spacer" no-gutters>
            <v-col cols="4" sm="2" md="1">
              <v-avatar size="72px">
                <v-img
                  alt="Avatar"
                  src="https://avatars0.githubusercontent.com/u/9064066?v=4&s=460"
                ></v-img>
              </v-avatar>
            </v-col>

            <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
              <strong v-html="message.name"></strong>
              <span v-if="message.total" class="text-grey">
                &nbsp;({{ message.total }})
              </span>
            </v-col>

            <v-col class="text-no-wrap text-left" cols="5" sm="3">
              <v-chip
                v-if="message.new"
                :color="`${message.color}-lighten-1`"
                class="ms-0 me-2"
                label
                small
              >
                {{ message.new }} new
              </v-chip>
              <strong v-html="message.title"></strong>
            </v-col>

            <v-col
              v-if="message.excerpt"
              class="text-medium-emphasis text-truncate hidden-sm-and-down"
            >
              &mdash;
              {{ message.excerpt }}
            </v-col>
          </v-row>
        </v-expansion-panel-title>

        <v-expansion-panel-text>
          <v-card-text v-text="lorem"></v-card-text>
        </v-expansion-panel-text>
      </v-expansion-panel>
    </v-expansion-panels>
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
