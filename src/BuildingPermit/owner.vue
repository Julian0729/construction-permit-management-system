<template>
  <v-app class="app-container">
    <v-app-bar flat color="#0000CC" dark height="88">
      <v-container
        fluid
        class="d-flex align-center justify-space-between py-0"
        style="max-width: 1600px"
      >
        <div class="d-flex align-center">
          <v-img
            src="https://www2.naga.gov.ph/wp-content/uploads/2022/05/Naga_City_Official_Seal-1.png"
            alt="LGU Seal"
            width="85"
            height="75"
            contain
            class="me-3"
          />
          <div>
            <div
              style="
                font-size: 12px;
                font-weight: 400;
                color: white;
                line-height: 1.2;
              "
            >
              REPUBLIC OF THE PHILIPPINES
            </div>
            <div
              style="
                font-size: 15px;
                font-weight: 700;
                color: white;
                line-height: 1.2;
              "
            >
              CITY GOVERNMENT OF NAGA
            </div>
          </div>
        </div>
        <div class="d-none d-md-flex nav-links">
          <v-btn text class="mx-2" style="color: white" to="/home">Home</v-btn>
          <v-btn text class="mx-2" style="color: white" to="/services"
            >Services</v-btn
          >
          <v-btn text class="mx-2" style="color: white" to="/about"
            >About</v-btn
          >
        </div>
      </v-container>
    </v-app-bar>

    <v-main class="main-content-container">
      <v-container fluid class="pa-0">
        <v-card
          flat
          class="d-flex align-center justify-space-between pl-6 mb-4"
          style="
            background-color: white;
            border: 1px solid lightgrey;
            height: 50px;
          "
        >
          <h3 class="mb-0 font-weight-bold">Building Permit Application</h3>
        </v-card>

        <v-container fluid class="px-4 mx-auto" style="max-width: 1300px">
          <v-stepper v-model="currentStep" alt-labels class="mb-4" flat>
            <v-stepper-header>
              <v-stepper-item
                title="Application"
                value="1"
                color="blue"
                :complete="true"
              ></v-stepper-item>
              <v-divider
                style="border-width: 2px; border-color: blue"
              ></v-divider>

              <v-stepper-item
                title="Owner/Applicant"
                value="2"
                color="blue"
              ></v-stepper-item>
              <v-divider
                style="border-width: 2px; border-color: blue"
              ></v-divider>

              <v-stepper-item
                title="Location & Scope of Work"
                value="3"
              ></v-stepper-item>
              <v-divider style="border-width: 2px"></v-divider>
              <v-stepper-item
                title="Use or Character of Occupancy"
                value="4"
              ></v-stepper-item>
              <v-divider style="border-width: 2px"></v-divider>
              <v-stepper-item
                title="Review Application"
                value="5"
              ></v-stepper-item>
            </v-stepper-header>
          </v-stepper>

          <v-card class="my-2 pa-4">
            <v-card-title class="text-h6">OWNER/APPLICANT</v-card-title>
            <v-card-text class="pa-2">
              <v-row dense>
                <v-col cols="12" md="6">
                  <p class="input-label">Last Name</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">First Name</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">Middle Initial</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">TIN</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="my-2 pa-4">
            <v-card-text class="pa-2">
              <v-row dense class="d-flex align-center">
                <v-col cols="12" md="6">
                  <v-radio-group v-model="ownedByEnterprise" mandatory>
                    <v-radio
                      label="For Construction Owned by an Enterprise"
                      value="enterprise"
                    ></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">Form of Ownership</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                    :disabled="ownedByEnterprise !== 'enterprise'"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="my-2 pa-4">
            <v-card-title class="text-h6">ADDRESS</v-card-title>
            <v-card-text class="pa-2">
              <v-row dense>
                <v-col cols="12" md="6">
                  <p class="input-label">No. Street</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">Barangay</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">City/Municipality</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                  <p class="input-label">Contact No.</p>
                  <v-text-field
                    variant="outlined"
                    class="textfield-50"
                    density="compact"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <div class="d-flex justify-end">
            <v-btn color="blue" dark class="mt-4" to="/location">Next</v-btn>
          </div>
        </v-container>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "NagaApplicationForm",
  data() {
    return {
      ownedByEnterprise: null,
      currentStep: "2",
    };
  },
});
</script>

<style scoped>
.nav-links .v-btn {
  text-transform: none !important;
  font-weight: 500;
  font-size: 17px;
}
html,
body,
#app,
.app-container {
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

.main-content-container {
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
}

.main-content-container::-webkit-scrollbar {
  display: none;
}

.textfield-50 .v-input__control {
  min-height: 50px;
}
.input-label {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 4px;
}

.card-selected {
  border: 2px solid #1976d2;
  background-color: #e3f2fd;
}

.card-list-container {
  display: flex;
  flex-direction: column;
}

.my-2 {
  margin-top: 8px;
  margin-bottom: 8px;
}
</style>