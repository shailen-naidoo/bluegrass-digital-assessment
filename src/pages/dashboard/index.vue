<template>
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
</template>