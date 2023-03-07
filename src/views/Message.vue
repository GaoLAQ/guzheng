<script lang="ts">
interface CoreData {
  _id: String;
  data: Object;
}
import HeaderComponent from "../components/Header.vue";
import axios from "axios";
import { mdiDeleteCircle } from "@mdi/js";
// @ts-ignore
import SvgIcon from "@jamescoyle/vue-icon";
export default {
  data: () => ({
    messageData: [],
    mdiDeleteCircle: mdiDeleteCircle as string,
  }),
  components: {
    HeaderComponent,
    SvgIcon,
  },
  async mounted() {
    await axios
      .get("http://localhost:3000/message")
      .then((item) => {
        console.log("!!!!!!!!!!!!!!!!!!!!!!!!!", item.data);
        this.messageData = item.data;
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  },
  methods: {
    async deleteMessage(idx: number) {
      await axios
        .delete(`http://localhost:3000/message/${idx}`)
        .catch((err: string) => {
          console.log("err: ", err);
        });
      location.reload();
    },
  },
};
</script>

<template>
  <HeaderComponent />
  <v-col class="ma-5">
    <div v-for="list in messageData" :key="list" class="ma-3">
      <v-card>
        <v-btn icon elevation="0" class="ma-0">
          <svg-icon
            type="mdi"
            :path="mdiDeleteCircle"
            @click="deleteMessage(list['_id']<CoreData>)"
          ></svg-icon
        ></v-btn>
        <v-row justify="center">
          <v-col>
            <v-card-title class="ml-10">User: {{ list?.name }}</v-card-title>
          </v-col>
          <v-col>
            <v-card-title class="ml-10"> {{ list?.content }}</v-card-title>

            <v-card-actions class="ml-10">
              Information from: {{ list?.email }}</v-card-actions
            >
          </v-col>
        </v-row>
      </v-card>
    </div>
  </v-col>
</template>

<style scoped>
.header-component {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
}
</style>
