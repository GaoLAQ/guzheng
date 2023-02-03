<script lang="ts">
export default {
  props: {
    productList: {
      type: Object,
    },
  },
  data: () => ({}),
};
</script>

<template>
  <v-row>
    <v-col cols="2">
      <v-card class="ma-2" width="200px" height="auto" elevation="0">
        <v-card-title> {{ productList.catergory.toUpperCase() }} </v-card-title>
      </v-card>
    </v-col>
    <v-col cols="10">
      <v-row>
        <v-card
          v-for="product in productList.product"
          class="ma-2"
          width="200px"
          height="auto"
          ><v-img :src="product.imgSRC" />
          <v-card-title> {{ product.name }} </v-card-title>
          <v-card-subtitle> {{ product.description }} </v-card-subtitle>
          <v-card-text> {{ product.name }}</v-card-text>
        </v-card>
      </v-row>
    </v-col>
  </v-row>
</template>
