<script lang="ts">
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWechat, mdiEmail, mdiWhatsapp } from "@mdi/js";
import hongShuIcon from "../assets/xiaohongshu.jpg";
import axios from "axios";
import { useDisplay } from "vuetify";

export default {
  data: () => ({
    valid: false,
    msgObject: {
      name: "",
      email: "",
      content: "",
    },
    mdiWhatsappIcon: mdiWhatsapp,
    wechatIcon: mdiWechat,
    emailIcon: mdiEmail,
    hongShuIcon: hongShuIcon,
    nameRules: [
      // @ts-ignore
      (v) => !!v || "Name is required",
      // @ts-ignore
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    emailRules: [
      // @ts-ignore
      (v) => !!v || "E-mail is required",
      // @ts-ignore
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    checkbox: false,
  }),
  components: {
    SvgIcon,
  },
  computed: {
    textFieldSize() {
      const { name } = useDisplay();
      switch (name.value) {
        case "xs":
          return true;
        case "sm":
          return true;
        case "md":
          return false;
        case "lg":
          return false;
        case "xl":
          return false;
      }
      return false;
    },
  },
  methods: {
    validate() {
      axios
        .post("http://localhost:3000/message", { data: this.msgObject })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
};
</script>
<template>
  <v-footer dark padless>
    <v-row justify="center">
      <v-card
        flat
        tile
        class="indigo lighten-1 white--text text-center"
        width="70%"
      >
        <v-card-text>
          <v-row justify="center">
            <v-col>
              <v-btn class="mx-4 white--text" icon elevation="0">
                <svg-icon type="mdi" :path="emailIcon"></svg-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mx-4 white--text" icon elevation="0">
                <svg-icon type="mdi" :path="wechatIcon"></svg-icon>
              </v-btn>
            </v-col>
            <v-col>
              <v-btn class="mx-4 white--text" icon elevation="0">
                <svg-icon type="mdi" :path="mdiWhatsappIcon"></svg-icon>
              </v-btn>
            </v-col>

            <v-col>
              <v-btn class="mx-4 white--text" icon elevation="0">
                <div>
                  <v-img :src="hongShuIcon" height="25px" width="25px" />
                </div>
              </v-btn>
            </v-col>
          </v-row>
        </v-card-text>

        <v-card-text class="white--text pt-0" id="viewPoint">
          Contact Me
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="msgObject.name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
              :class="[textFieldSize ? 'shrink mx-4' : '']"
            ></v-text-field>

            <v-text-field
              v-model="msgObject.email"
              :rules="emailRules"
              label="E-mail"
              required
              :class="[textFieldSize ? 'shrink mx-4' : '']"
            ></v-text-field>

            <v-textarea
              v-model="msgObject.content"
              :rules="[(v) => !!v || 'Item is required']"
              label="Your Message"
              required
              :class="[textFieldSize ? 'shrink mx-4' : '']"
            ></v-textarea>

            <v-btn
              :disabled="!valid"
              color="success"
              class="mr-4"
              @click="validate"
            >
              Submit
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-row>
  </v-footer>
</template>

<style scoped>
.v-btn::before {
  background-color: transparent;
}
</style>
