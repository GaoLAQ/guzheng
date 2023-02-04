<script lang="ts">
import HeaderComponent from "../components/Header.vue";
import axios from "axios";
import { mdiDeleteCircle } from "@mdi/js";
import SvgIcon from "@jamescoyle/vue-icon";
export default {
  data: () => ({
    messageData: "",
    mdiDeleteCircle: mdiDeleteCircle,
  }),
  components: {
    HeaderComponent,
    SvgIcon,
  },
  async mounted() {
    await axios
      .get("http://localhost:3000/message")
      .then((item) => {
        this.messageData = item.data;
      })
      .catch((err) => {
        console.log("err: ", err);
      });
  },
  methods: {
    async deleteMessage(idx) {
      await axios.delete(`http://localhost:3000/message/${idx}`).catch((err) => {
        console.log("err: ", err);
      });
        location.reload()
    },
  },
};
</script>

<template>
  <v-app>
    <HeaderComponent />
    <v-col class="ma-5">
      <div v-for="list in messageData" :key="list" class="ma-3">
        <v-card>
          <v-row>
            <v-spacer></v-spacer>
            <v-btn icon elevation="0" class="ma-2">
              <svg-icon
                type="mdi"
                :path="mdiDeleteCircle"
                @click="deleteMessage(list['_id'])"
              ></svg-icon
            ></v-btn>
          </v-row>
          <v-row>            
            <v-card-text> 
              <p> {{ list.data.content }} </p>
            </v-card-text>
            <br/>
            <v-card-text>
              Information from: {{ list.data.email }}</v-card-text
            >
          </v-row>
        </v-card>
      </div>
    </v-col>
  </v-app>
</template>
