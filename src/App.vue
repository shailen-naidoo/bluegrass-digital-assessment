<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      v-bind="{ elevation }"
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
        color="#67ADB914"
        rounded="lg"
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
      <v-container>
        <v-row>
          <v-col class="px-6 py-4">
            <h2>Welcome Andrew!</h2>
            <p>Nulla ut aliquam metus. Integer at diam sem. Nunc finibus nibh vel risus eleifend laoreet. </p>
          </v-col>
        </v-row>
      </v-container>
      <v-container>
        <v-row>
          <v-col
            v-for="(item, index) in [1,2,3,4,5,6]"
            :key="index"
            cols="12"
            md="4"
          >
            <v-card
              class="mx-auto pa-2"
              max-width="344"
              style="border-radius: 16px; box-shadow: 0px 12px 24px -4px rgba(145, 158, 171, 0.12);"
            >
              <v-container>
                <v-row>
                  <v-col>
                    <h3>
                      Total Practises
                    </h3>
                    <v-icon
                      color="success"
                      icon="mdi-arrow-top-right"
                      left
                    />
                    <span class="text-h6 font-weight-bold ml-2">+15%</span>
                    <h1 class="text-h3 font-weight-bold">
                      11
                    </h1>
                  </v-col>
                  <v-col
                    align-self="center"
                    align="end"
                  >
                    <v-avatar
                      size="64"
                      color="#E4F7F9"
                    >
                      <v-icon
                        size="28"
                        color="lightblue"
                      >
                        mdi-stethoscope
                      </v-icon>
                    </v-avatar>
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts" setup>
const elevation = ref(0)
const drawer = ref(true)
</script>

<style scoped>
* {
  color: #414141;
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