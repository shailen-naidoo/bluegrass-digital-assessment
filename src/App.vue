<template>
  <v-app id="inspire">
    <AppNavigationDrawer />
    <AppNavigationBar />
    <v-main class="main">
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
import AppNavigationBar from './components/AppNavigationBar.vue';
import AppNavigationDrawer from './components/AppNavigationDrawer.vue';
</script>

<style scoped>
* {
  color: #414141;
}

.main {
  background-color: #FAFAFA;
}
</style>