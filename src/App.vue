<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      v-bind="{ elevation }"
    >
      <!--  -->
    </v-navigation-drawer>

    <v-app-bar
      v-bind="{ elevation }"
    >
      <v-container>
        <v-row
          justify="end"
          align="center"
        >
          <v-badge
            class="mr-4"
            content="2"
            color="#FF4842"
          >
            <v-icon
              icon="mdi-bell"
              color="#9D9D9D"
            />
          </v-badge>
          <v-avatar class="avatar_user_profile">
            AS
          </v-avatar>
          <h3 class="avatar_user_name mx-3">
            Adrian Stefan
          </h3>
          <v-icon
            icon="mdi-chevron-down"
            class="avatar_icon mr-10"
            size="small"
          />
        </v-row>
      </v-container>
    </v-app-bar>

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
* {
  color: #414141
}

.main {
  background-color: #FAFAFA;
}

.avatar_user_profile {
  background-color: #67ADB914;
  color: #578388;
}

.avatar_user_name {
  font-size: 14px;
  font-weight: 600;
}

.avatar_icon {
  color: #67ADB9;
}
</style>