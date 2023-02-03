<script lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiWechat, mdiEmail, mdiWhatsapp } from "@mdi/js";
import hongShuIcon from "../assets/xiaohongshu.jpg";

export default {
  data: () => ({
    mdiWhatsappIcon: mdiWhatsapp,
    wechatIcon: mdiWechat,
    emailIcon: mdiEmail,
    hongShuIcon: hongShuIcon,
    valid: true,
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    select: null,
    items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
  }),
  components: {
    SvgIcon,
  },
  methods: {
    validate() {},
    reset() {},
    resetValidation() {},
  },
};
</script>
<template>
  <v-footer dark padless>
    <v-row justify="center">
      <v-card flat tile class="indigo lighten-1 white--text text-center" width="70%">
        <v-card-text>
          <v-row justify="center">
            <v-btn class="mx-4 white--text" icon elevation="0">
              <svg-icon type="mdi" :path="emailIcon"></svg-icon>
            </v-btn>
            <v-btn class="mx-4 white--text" icon elevation="0">
              <svg-icon type="mdi" :path="wechatIcon"></svg-icon>
            </v-btn>
            <v-btn class="mx-4 white--text" icon elevation="0">
              <svg-icon type="mdi" :path="mdiWhatsappIcon"></svg-icon>
            </v-btn>
            <v-btn class="mx-4 white--text" icon elevation="0">
              <div><v-img :src="hongShuIcon" height="25px" width="25px" /></div>
            </v-btn>
          </v-row>
        </v-card-text>

        <v-card-text class="white--text pt-0" id="viewPoint"> Contact Me </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              label="Name"
              required
            ></v-text-field>

            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>

            <v-textarea
              v-model="select"
              :items="items"
              :rules="[(v) => !!v || 'Item is required']"
              label="Leave Your Message"
              required
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
