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
      flat
      prepend-icon="mdi-home"
      class="text-none justify-start mx-3"
      style="width: 90%"
      size="large"
      :ripple="false"
      rounded="lg"
      to="/dashboard"
      active-color="#67ADB914"
    >
      <template #prepend>
        <v-icon color="#67ADB9" />
      </template>
      <span style="color: #578388">Dashboard</span>
    </v-btn>
    <v-btn
      flat
      prepend-icon="mdi-account-box"
      class="text-none justify-start my-1 mx-3"
      style="width: 90%"
      size="large"
      :ripple="false"
      rounded="lg"
    >
      <template #prepend>
        <v-icon color="#67ADB9" />
      </template>
      <span style="color: #414141">My Profile</span>
    </v-btn>
    <v-btn
      flat
      prepend-icon="mdi-medical-bag"
      class="text-none justify-start my-1 mx-3"
      style="width: 90%"
      size="large"
      :ripple="false"
      rounded="lg"
    >
      <template #prepend>
        <v-icon color="#67ADB9" />
      </template>
      <span style="color: #414141">Manage Practises</span>
    </v-btn>
    <v-btn
      flat
      prepend-icon="mdi-file-document-outline"
      class="text-none justify-start my-1 mx-3"
      style="width: 90%"
      size="large"
      :ripple="false"
      rounded="lg"
    >
      <template #prepend>
        <v-icon color="#67ADB9" />
      </template>
      <span style="color: #414141">Logs</span>
    </v-btn>
  </v-navigation-drawer>
</template>

<script lang="ts" setup>
const drawer = ref(true)
</script>