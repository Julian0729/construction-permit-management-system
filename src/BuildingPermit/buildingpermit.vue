<template>
  <v-app>
    <v-app-bar app color="blue darken-4" dark>
      <v-toolbar-items> </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-btn text>Home</v-btn>
      <v-btn text>Services</v-btn>
      <v-btn text>About</v-btn>
    </v-app-bar>

    <v-main>
      <v-container fluid class="fill-height" style="background-color: #f5f5f5">
        <v-row align="center" justify="center">
          <v-col cols="12" md="6">
            <v-card class="mx-auto pa-5" max-width="700">
              <v-card-text class="text-center">
                <h2 class="text-h5 primary--text mb-6">
                  Why Choose Online Application
                </h2>
                <v-row>
                  <v-col cols="12" sm="4">
                    <div class="text-center">
                      <v-icon size="60" color="blue">mdi-clock-outline</v-icon>
                      <h3 class="text-subtitle-1 mt-2">Time-Saving</h3>
                      <p class="text-body-2 mt-2">
                        Save valuable time by processing your permits online. No
                        more waiting in long queues - complete everything from
                        the comfort of your home or office.
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <div class="text-center">
                      <v-icon size="60" color="green">mdi-earth</v-icon>
                      <h3 class="text-subtitle-1 mt-2">24/7 Access</h3>
                      <p class="text-body-2 mt-2">
                        Access our services around the clock, every day of the
                        year. Submit applications and track progress at any time
                        that suits your schedule.
                      </p>
                    </div>
                  </v-col>
                  <v-col cols="12" sm="4">
                    <div class="text-center">
                      <v-icon size="60" color="purple">mdi-bell-outline</v-icon>
                      <h3 class="text-subtitle-1 mt-2">Real-time Updates</h3>
                      <p class="text-body-2 mt-2">
                        Stay informed with instant notifications about your
                        application status. Receive timely updates and never
                        miss important information.
                      </p>
                    </div>
                  </v-col>
                </v-row>
              </v-card-text>
            </v-card>
          </v-col>

          <v-col cols="12" md="4">
            <v-card class="mx-auto pa-5" max-width="400">
              <v-card-text>
                <h2 class="text-h5 text-center mb-2">Welcome Back!</h2>
                <p class="text-center text-subtitle-2 mb-4">
                  Login to your account
                </p>

                <v-text-field
                  label="Email Address"
                  prepend-inner-icon="mdi-email-outline"
                  outlined
                  dense
                  class="mb-3"
                ></v-text-field>

                <v-text-field
                  label="Password"
                  prepend-inner-icon="mdi-lock-outline"
                  append-icon="mdi-eye-off-outline"
                  outlined
                  dense
                  type="password"
                  class="mb-2"
                ></v-text-field>

                <v-row align="center" no-gutters class="mb-4">
                  <v-col cols="6">
                    <v-checkbox
                      label="Remember me"
                      dense
                      hide-details
                      class="mt-0 pt-0"
                    ></v-checkbox>
                  </v-col>
                  <v-col cols="6" class="text-right">
                    <a href="#" class="text-decoration-none primary--text"
                      >Forgot password?</a
                    >
                  </v-col>
                </v-row>

                <v-btn block color="blue darken-4" dark large class="mb-4"
                  >Login</v-btn
                >

                <p class="text-center text-subtitle-2">
                  Don't have an account?
                  <a href="#" class="text-decoration-none primary--text"
                    >Sign up</a
                  >
                </p>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style scoped>
/* You can add custom styles here if needed, for example, to adjust spacing or specific colors beyond Vuetify defaults */
.primary--text {
  color: #1976d2 !important; /* Adjust if your primary color is different */
}
</style>