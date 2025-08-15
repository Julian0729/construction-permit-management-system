<template>
  <v-app>
    <!-- Header component based on the provided design -->
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

    <!-- Main content area -->
    <v-main>
      <!-- New horizontal banner card -->
      <v-container fluid class="py-0">
        <v-card class="banner-card" flat tile>
          <div
            class="pa-4 text-h5 font-weight-bold d-flex justify-center align-center"
          >
            Building Permit Application
          </div>
        </v-card>
      </v-container>

      <v-container fluid class="py-8 fill-height">
        <v-sheet rounded="lg" class="pa-4 fill-height">
          <v-row class="fill-height">
            <!-- Left Sidebar with Steps and Actions -->
            <v-col cols="12" md="3" class="sidebar d-flex flex-column">
              <v-card
                class="sidebar-card pa-4 flex-grow-1 d-flex flex-column"
                outlined
              >
                <div class="font-weight-bold mb-2">
                  Building Permit Application
                </div>
                <div class="text-caption mb-4">
                  Follow these steps to complete your application
                </div>

                <!-- Application steps -->
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="mr-2"
                    >mdi-numeric-1-circle</v-icon
                  >
                  <div>Fill up the Unified Application Form</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="mr-2"
                    >mdi-numeric-2-circle</v-icon
                  >
                  <div>Select Ancillary Forms</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="mr-2"
                    >mdi-numeric-3-circle</v-icon
                  >
                  <div>Download your filled up Forms</div>
                </div>
                <div class="d-flex align-center mb-2">
                  <v-icon color="primary" class="mr-2"
                    >mdi-numeric-4-circle</v-icon
                  >
                  <div>Upload building required documents</div>
                </div>
                <div class="d-flex align-center mb-4">
                  <v-icon color="primary" class="mr-2"
                    >mdi-numeric-5-circle</v-icon
                  >
                  <div>Wait for your application status</div>
                </div>

                <!-- Sidebar buttons -->
                <div class="mt-auto">
                  <v-btn color="primary" block dark
                    >Download Complete Checklist</v-btn
                  >
                  <v-btn text prepend-icon="mdi-logout" class="mt-2"
                    >Logout</v-btn
                  >
                </div>
              </v-card>
            </v-col>

            <!-- Right Main Content with Action Cards -->
            <v-col cols="12" md="9">
              <v-row justify="space-around" class="cards-row">
                <!-- Card 1: Fill up form -->
                <v-col cols="12" sm="6" md="4" class="pa-2">
                  <v-card
                    class="pa-4 text-center card-item d-flex flex-column align-center justify-center"
                    outlined
                  >
                    <v-icon color="#4F46E5" size="70"
                      >mdi-file-document-edit</v-icon
                    >
                    <div class="font-weight-semibold mt-2">
                      Fill up Unified Application Form
                    </div>
                    <v-btn
                      color="#4F46E5"
                      class="mt-4"
                      style="color: white"
                      @click="
                        (showDialog = true),
                          (dialogMessage = 'You clicked Fill up Form')
                      "
                    >
                      Fill up Form
                    </v-btn>
                  </v-card>
                </v-col>

                <!-- Card 2: Select Ancillary Forms -->
                <v-col cols="12" sm="6" md="4" class="pa-2">
                  <v-card
                    class="pa-4 text-center card-item d-flex flex-column align-center justify-center"
                    outlined
                  >
                    <v-icon color="#9333EA" size="70">mdi-file-check</v-icon>
                    <div class="font-weight-semibold mt-2">
                      Select Required Ancillary Form
                    </div>
                    <v-btn
                      color="#9333EA"
                      class="mt-4"
                      style="color: white"
                      @click="
                        (showDialog = true),
                          (dialogMessage = 'You clicked Select Ancillary Form')
                      "
                    >
                      Select Required Ancillary Form
                    </v-btn>
                  </v-card>
                </v-col>

                <!-- Card 3: Upload Requirements -->
                <v-col cols="12" sm="6" md="4" class="pa-2">
                  <v-card
                    class="pa-4 text-center card-item d-flex flex-column align-center justify-center"
                    outlined
                  >
                    <v-icon color="#2563EB" size="70">mdi-cloud-upload</v-icon>
                    <div class="font-weight-semibold mt-2">
                      Upload Requirements
                    </div>
                    <v-btn
                      color="#2563EB"
                      class="mt-4"
                      style="color: white"
                      @click="
                        (showDialog = true),
                          (dialogMessage = 'You clicked Upload Requirements')
                      "
                    >
                      Upload Documents
                    </v-btn>
                  </v-card>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-sheet>
      </v-container>
    </v-main>

    <!-- Custom dialog for messages (instead of alert) -->
    <v-dialog
      v-model="showDialog"
      max-width="350"
      transition="dialog-bottom-transition"
    >
      <v-card>
        <v-card-title class="headline">Action Clicked</v-card-title>
        <v-card-text>{{ dialogMessage }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="showDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template> 

<script>
export default {
  name: "BuildingPermitPage",
  data() {
    return {
      showDialog: false,
      dialogMessage: "",
    };
  },
};
</script>

<style scoped>
.sidebar-card {
  display: flex;
  flex-direction: column;
}
.banner-card {
  height: 105px;
  width: 100%;
  max-width: 1920px;
  background-color: #f0f0f0;
}
.cards-row {
  margin: -8px; /* Counteracts the padding on the columns */
}
.card-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>