<script lang="ts">
  export default {
    data: () => ({
      items: [
        {
          text: 'Home',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'About',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Shop',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
        {
          text: 'Lessons',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
        {
          text: 'Performance Opptunitiy',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    }),
  }
</script>

<template>
  <v-row>
    <p> China | instrument | Guzheng </p>
        <v-breadcrumbs
      :items="items"
      divider="|"
    ></v-breadcrumbs>
  </v-row>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
