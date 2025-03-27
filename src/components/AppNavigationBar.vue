<template>
  <v-app-bar
    :elevation="0"
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
          {{ user.fullname }}
        </h3>
        <v-icon
          icon="mdi-chevron-down"
          class="avatar_icon mr-10"
          size="small"
        />
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { UserModel } from '@/models/UserModel';
import { UserService } from '@/services/UserService';

const user = ref(UserModel.create())

onMounted(async () => {
  user.value = await UserService.getUser()
}) 
</script>

<style scoped>
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