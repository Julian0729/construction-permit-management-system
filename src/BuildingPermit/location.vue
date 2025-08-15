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
          class="d-flex align-center pl-6 mb-4"
          style="
            background-color: white;
            border: 1px solid lightgrey;
            height: 50px;
          "
        >
          <h3 class="mb-0 font-weight-bold">Building Permit Application</h3>
        </v-card>

        <v-container fluid class="px-4 mx-auto" style="max-width: 1300px">
          <v-stepper v-model="currentStep" alt-labels flat class="mb-4">
            <v-stepper-header>
              <v-stepper-item
                title="Application"
                value="1"
                :complete="true"
                color="blue"
              ></v-stepper-item>
              <v-divider
                style="border-width: 2px; border-color: blue"
              ></v-divider>
              <v-stepper-item
                title="Owner/Applicant"
                value="2"
                :complete="true"
                color="blue"
              ></v-stepper-item>
              <v-divider
                style="border-width: 2px; border-color: blue"
              ></v-divider>
              <v-stepper-item
                title="Location & Scope of Work"
                value="3"
                color="blue"
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
            <v-card-title class="text-h6"
              >LOCATION OF CONSTRUCTION</v-card-title
            >
            <v-card-text>
              <v-row dense>
                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="blkNo"
                    label="BLK. No."
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="tctNo"
                    label="TCT No."
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="taxDecNo"
                    label="Current Tax Dec No."
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="street"
                    label="Street"
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="barangay"
                    label="Barangay"
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>

                <v-col cols="12" sm="4">
                  <v-text-field
                    v-model="cityMunicipality"
                    label="City/Municipal of"
                    variant="outlined"
                    density="compact"
                    style="
                      height: 50px;
                      min-height: 50px;
                      --v-input-control-height: 50px;
                    "
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <v-card class="my-2 pa-4">
            <v-card-title class="text-h6">SCOPE OF WORK</v-card-title>
            <v-card-text>
              <v-row dense class="gap-0">
                <v-col
                  v-for="(item, i) in scopeOfWork"
                  :key="i"
                  cols="12"
                  sm="4"
                  class="py-0 my-0"
                >
                  <v-checkbox
                    v-model="selectedScope"
                    :label="item"
                    :value="item"
                    hide-details
                    density="compact"
                    class="my-0"
                  ></v-checkbox>

                  <v-text-field
                    v-if="
                      item === 'Other (Specify)' &&
                      selectedScope.includes('Other (Specify)')
                    "
                    v-model="otherDetails"
                    label="Please specify"
                    variant="outlined"
                    density="compact"
                    class="ml-6 my-1"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>

          <div class="d-flex justify-end">
            <v-btn color="blue" dark class="mt-4" to="/character">Next</v-btn>
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
      currentStep: "3",
      scopeOfWork: [
        "New Construction",
        "Erection",
        "Addition",
        "Alteration",
        "Renovation",
        "Conversion",
        "Repair",
        "Moving",
        "Raising",
        "Accessory Building/Structure",
        "Legalization of Existing Building",
        "Other (Specify)",
      ],
      selectedScope: [],
      blkNo: "",
      tctNo: "",
      taxDecNo: "",
      street: "",
      barangay: "",
      cityMunicipality: "",
      otherDetails: "",
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

.card-131 {
  min-height: 131px;
}

.textfield-70 {
  height: 70px;
}

.input-label {
  font-size: 0.75rem;
  color: rgba(0, 0, 0, 0.6);
  margin-bottom: 4px;
}
</style>