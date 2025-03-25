<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      v-bind="{ elevation }"
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar v-bind="{ elevation }" />

    <v-main class="main">
      <!--  -->
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const elevation = ref(0)
const drawer = ref(true)
</script>

<style scoped>
.main {
  background-color: #FAFAFA;
}
</style>