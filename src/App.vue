<template>
  <v-app class="app-container">
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style scoped>
  .app-container{
    background-color: #1F1F1F;
  }
</style>
