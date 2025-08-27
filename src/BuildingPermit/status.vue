<template>
  <v-app>
    <v-app-bar flat color="#0000CC" dark height="88" app>
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

    <v-main class="no-scroll">
      <v-card
        flat
        class="d-flex align-center justify-space-between px-6"
        style="
          background-color: white;
          border-bottom: 1px solid lightgrey;
          height: 50px;
        "
      >
        <h3 class="mb-0 font-weight-bold">Building Permit Application</h3>

        <div class="d-flex align-center">
          <div
            class="notif-wrapper"
            @click="handleNotificationClick"
            role="button"
            aria-label="Notifications"
          >
            <v-badge content="1" color="red" offset-x="8" offset-y="8" overlap>
              <v-icon size="28" color="#4285F4">mdi-bell</v-icon>
            </v-badge>
          </div>

          <div class="text-caption text-right ml-3">
            Building Permit Number<br />
            <span class="font-weight-bold">BP-2025-0808-001</span>
          </div>
        </div>
      </v-card>

      <v-container fluid class="pa-0 content-area">
        <v-row no-gutters class="fill-height">
          <v-col cols="12" md="3" class="pa-0">
            <v-card
              flat
              class="pa-4 quick-guide-card"
              style="
                border-right: 1px solid lightgrey;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
              "
            >
              <div>
                <h4 class="mb-2">Quick Guide</h4>
                <div class="text-subtitle-2 mb-4">
                  Follow these steps to complete your application
                </div>
                <div
                  v-for="(step, index) in steps"
                  :key="index"
                  class="quick-guide-item mb-3"
                >
                  <v-avatar color="#2563EB" size="30" class="white--text mr-3">
                    {{ index + 1 }}
                  </v-avatar>
                  <div class="font-weight-medium text-body-2">
                    {{ step }}
                  </div>
                </div>
                <v-btn block color="#2563EB" class="mt-2 white--text">
                  Download Complete Checklist
                </v-btn>
              </div>
              <div>
                <v-btn
                  block
                  color="white"
                  class="white--text"
                  @click="handleLogout"
                >
                  Logout
                </v-btn>
              </div>
            </v-card>
          </v-col>

          <v-col cols="12" md="9" class="pa-2">
            <v-row>
              <v-col
                cols="12"
                sm="4"
                v-for="(card, i) in cards"
                :key="i"
                class="pa-2"
              >
                <v-card
                  outlined
                  class="pa-4 text-center d-flex flex-column align-center justify-center"
                  style="height: 250px"
                >
                  <v-icon :color="card.color" size="70">{{ card.icon }}</v-icon>
                  <div class="font-weight-semibold mt-2">{{ card.title }}</div>
                  <v-btn
                    :color="card.color"
                    class="mt-4 white--text"
                    @click="handleAction(card.action)"
                  >
                    {{ card.button }}
                  </v-btn>
                </v-card>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="pa-2">
                <v-card outlined class="pa-4">
                  <h4 class="mb-2">Application Status Tracker</h4>
                  <v-timeline side="end" :line-color="'#E5E7EB'">
                    <v-timeline-item
                      dot-color="#2563EB"
                      size="small"
                      icon="mdi-check-circle"
                    >
                      <div>
                        <div class="font-weight-medium">
                          Submitted Application
                        </div>
                        <div class="text-caption">
                          Application ID: BP-2025-0808-001
                        </div>
                        <div class="text-caption">
                          Submitted: January 15, 2024
                        </div>
                        <div class="mt-1 text-caption">
                          Your application has been successfully submitted and
                          is now in the review process.
                        </div>
                      </div>
                      <template v-slot:opposite>
                        <v-chip
                          color="green"
                          outlined
                          class="timeline-status-chip"
                          >Completed</v-chip
                        >
                      </template>
                    </v-timeline-item>

                    <v-timeline-item
                      dot-color="#E5E7EB"
                      size="small"
                      icon="mdi-circle-outline"
                    >
                      <div>
                        <div class="font-weight-medium">
                          PDF Plan Verification
                        </div>
                        <div class="text-caption">
                          Application ID: BP-2025-0808-001
                        </div>
                        <div class="text-caption">Awaiting review</div>
                        <div class="mt-1 text-caption">
                          Plan verification will begin shortly. Your submitted
                          building plans will be reviewed for completeness and
                          accuracy.
                        </div>
                      </div>
                      <template v-slot:opposite>
                        <v-chip outlined class="timeline-status-chip"
                          >Not Started</v-chip
                        >
                      </template>
                    </v-timeline-item>

                    <v-timeline-item
                      dot-color="#E5E7EB"
                      size="small"
                      icon="mdi-circle-outline"
                    >
                      <div>
                        <div class="font-weight-medium">
                          Evaluation of Plans
                        </div>
                        <div class="text-caption">
                          Application ID: BP-2025-0808-001
                        </div>
                        <div class="text-caption">
                          Pending verification completion
                        </div>
                        <div class="mt-1 text-caption">
                          Comprehensive evaluation will begin after PDF plan
                          verification is complete.
                        </div>
                      </div>
                      <template v-slot:opposite>
                        <v-chip outlined class="timeline-status-chip"
                          >Not Started</v-chip
                        >
                      </template>
                    </v-timeline-item>

                    <v-timeline-item
                      dot-color="#E5E7EB"
                      size="small"
                      icon="mdi-circle-outline"
                    >
                      <div>
                        <div class="font-weight-medium">Final Approval</div>
                        <div class="text-caption">
                          Application ID: BP-2025-0808-001
                        </div>
                        <div class="text-caption">Awaiting previous stages</div>
                        <div class="mt-1 text-caption">
                          Final approval and permit issuance will proceed after
                          successful evaluation.
                        </div>
                      </div>
                      <template v-slot:opposite>
                        <v-chip outlined class="timeline-status-chip"
                          >Not Started</v-chip
                        >
                      </template>
                    </v-timeline-item>
                  </v-timeline>
                </v-card>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "BuildingPermitPage",
  data() {
    return {
      steps: [
        "Fill up the Unified Application Form",
        "Select Ancillary Forms",
        "Download your filled up Forms",
        "Upload building required documents",
        "Wait for your application status",
      ],
      cards: [
        {
          title: "Fill up Unified Application Form",
          color: "#4F46E5",
          icon: "mdi-file-document-edit",
          action: "Fill up Form",
          button: "Fill up Form",
        },
        {
          title: "Select Required Ancillary Form",
          color: "#9333EA",
          icon: "mdi-file-check",
          action: "Select Ancillary Form",
          button: "Select Ancillary Form",
        },
        {
          title: "Upload Requirements",
          color: "#2563EB",
          icon: "mdi-cloud-upload",
          action: "Upload Documents",
          button: "Upload Documents",
        },
      ],
    };
  },
  methods: {
    handleAction(actionName) {
      console.log(`Action clicked: ${actionName}`);
    },
    handleLogout() {
      console.log("User logged out");
    },
    handleNotificationClick() {
      console.log("Notification icon clicked!");
    },
  },
};
</script>

<style scoped>
.nav-links .v-btn {
  text-transform: none !important;
  font-weight: 500;
  font-size: 17px;
}
.no-scroll {
  overflow: hidden !important;
}
.v-main.no-scroll {
  height: calc(100vh - 88px);
  display: flex;
  flex-direction: column;
}
.content-area {
  flex: 1;
  overflow-y: auto;
  padding-bottom: 24px;
}
.quick-guide-item {
  display: flex;
  align-items: center;
  gap: 12px;
}

/* Notification wrapper: no background, no circle */
.notif-wrapper {
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  line-height: 0;
}

.v-timeline--side-end .v-timeline-item__opposite {
  /* This ensures the opposite content has a fixed width, preventing overflow */
  max-width: 150px; /* Adjust this value as needed to fit the "Not Started" chip */
  width: 150px; /* Ensures a consistent width */
  text-align: right; /* Aligns the chip to the right within its container */
}

/* Specific styling for the chip to align it neatly */
.timeline-status-chip {
  margin-left: auto; /* Pushes the chip to the right side of the opposite slot */
}
</style>