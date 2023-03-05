<script lang="ts">
import ShoppingItem from "../components/ShoppingItem.vue";
import HeaderComponent from "../components/Header.vue";
import { mapState } from "vuex";
export default {
  data: () => ({}),
  components: {
    HeaderComponent,
    ShoppingItem,
  },
  computed: {
    ...mapState({
      productList: (state) => state.productionList,
    }),
    advancedProductList() {
      return {
        catergory: "advanced",
        product: this.filteredProductList(this.productList, "advanced"),
      };
    },
    intermediateProductList() {
      return {
        catergory: "intermediate",
        product: this.filteredProductList(this.productList, "intermediate"),
      };
    },
    beginnerProductList() {
      return {
        catergory: "beginner",
        product: this.filteredProductList(this.productList, "beginner"),
      };
    },
  },
  methods: {
    // @ts-ignore
    filteredProductList(product, category) {
      // @ts-ignore
      return product.filter((item) => item.level === category);
    },
  },
};
</script>

<template>
  <v-row>
    <HeaderComponent class="ma-2" :isTextWhite="false" :isHome="false" />
  </v-row>
  <br />
  <v-row justify="center">
    <v-divider class="ma-5" />
    <ShoppingItem class="ma-2" :productList="beginnerProductList" />
    <v-divider class="ma-5" />
    <ShoppingItem class="ma-2" :productList="intermediateProductList" />
    <v-divider class="ma-5" />
    <ShoppingItem class="ma-2" :productList="advancedProductList" />
    <v-divider class="ma-5" />
  </v-row>
</template>
<style scoped></style>
