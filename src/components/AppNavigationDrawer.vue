<template>
  <v-navigation-drawer
    v-model="drawer"
    :elevation="0"
  >
    <section
      role="image-container"
      style="height: 65px"
    />
    <v-btn
      v-for="({ name, icon, navigate_to }, index) in navigationDrawerItems"
      :key="index"
      flat
      :prepend-icon="icon"
      class="text-none justify-start mx-3"
      style="width: 90%"
      size="large"
      :ripple="false"
      rounded="lg"
      :to="navigate_to"
      :active-color="buttonActiveColor"
    >
      <template #prepend>
        <v-icon :color="iconColor" />
      </template>
      <span>{{ name }}</span>
    </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
import type { NavigationDrawerModel } from '@/models/NavigationDrawerModel'
import { NavigationDrawerService } from '@/services/NavigationDrawerService'

const iconColor = ref('#67ADB9')
const buttonActiveColor = ref('#67ADB914')
const drawer = ref(true)

const navigationDrawerItems = ref<NavigationDrawerModel[]>([])

onMounted(async () => {
  navigationDrawerItems.value = await NavigationDrawerService.getNavigationDrawerItems()
})
</script>