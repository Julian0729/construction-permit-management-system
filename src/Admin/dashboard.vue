<template>
  <v-app>
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
                letter-spacing: 0.5px !important;
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

    <v-navigation-drawer app permanent>
      <div class="d-flex align-center px-4" style="height: 57px">
        <v-icon size="36" class="me-2" color="#007bff"
          >mdi-office-building</v-icon
        >
        <div>
          <div class="text-h7 font-weight-bold" style="line-height: 1.2">
            Construction Permit
          </div>
          <div class="text-caption font-weight-regular" style="color: #6c757d">
            Management System
          </div>
        </div>
      </div>

      <div class="d-flex flex-column" style="height: calc(100vh - 88px - 57px)">
        <v-list
          nav
          dense
          class="py-0"
          style="font-size: 14px; flex-grow: 1; overflow-y: auto"
        >
          <v-list-item link to="/dashboard" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-home-outline</v-icon>
              <span>Dashboard</span>
            </div>
          </v-list-item>
          <v-list-item link to="/locational-clearance" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-map-marker-outline</v-icon>
              <span>Locational Clearance</span>
            </div>
          </v-list-item>
          <v-list-item link to="/building-permit" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-file-document-outline</v-icon>
              <span>Building Permit</span>
            </div>
          </v-list-item>
          <v-list-item link to="/occupancy-permit" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-file-certificate-outline</v-icon>
              <span>Occupancy Permit</span>
            </div>
          </v-list-item>
          <v-list-item link to="/compliance-monitoring" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-clipboard-list-outline</v-icon>
              <span>Compliance Monitoring</span>
            </div>
          </v-list-item>
        </v-list>

        <v-list nav dense class="py-0 mt-auto" style="font-size: 14px">
          <v-list-item link @click="logout" class="py-1">
            <div class="d-flex align-center">
              <v-icon class="me-3">mdi-logout</v-icon>
              <span>Logout</span>
            </div>
          </v-list-item>
        </v-list>
      </div>
    </v-navigation-drawer>

    <v-main class="bg-grey-lighten-4">
      <v-container class="pa-4" fluid style="max-width: 1200px">
        <div class="d-flex justify-space-between align-center mb-6">
          <div>
            <h1 class="text-h4 font-weight-bold">Welcome back, Alyssa!</h1>
            <div class="text-subtitle-1 text-grey-darken-1">
              {{ formattedDate }}
            </div>
          </div>
        </div>

        <v-row>
          <v-col
            v-for="metric in metrics"
            :key="metric.title"
            cols="12"
            sm="6"
            md="3"
          >
            <v-card class="pa-4 rounded-lg elevation-1" flat>
              <div class="d-flex align-center justify-space-between">
                <div class="text-subtitle-1 text-grey">{{ metric.title }}</div>
                <v-avatar
                  :color="metric.iconColor"
                  size="48"
                  class="rounded-lg"
                >
                  <v-icon dark size="30">{{ metric.icon }}</v-icon>
                </v-avatar>
              </div>
              <div class="text-h4 font-weight-bold my-2">
                {{ applicationCounts[metric.key] }}
              </div>
              <div class="d-flex align-center">
                <div
                  :class="[
                    'text-subtitle-2',
                    'font-weight-bold',
                    metric.changeColor,
                  ]"
                >
                  <v-icon :color="metric.changeIconColor" small>
                    {{ metric.changeIcon }}
                  </v-icon>
                  {{ metric.change }}
                </div>
                <span class="text-caption text-grey ms-1">from last month</span>
              </div>
            </v-card>
          </v-col>
        </v-row>

        <v-card class="mt-6 rounded-lg elevation-1" flat>
          <v-card-title class="d-flex align-center">
            <h2 class="text-h6 font-weight-bold">Pending Applications</h2>
            <v-spacer></v-spacer>
            <v-menu offset-y>
              <template v-slot:activator="{ on, attrs }"> </template>
              <v-list dense>
                <v-list-item @click="pendingFilter = 'all'">
                  <v-list-item-title>All</v-list-item-title>
                </v-list-item>
                <v-list-item @click="pendingFilter = 'Verification'">
                  <v-list-item-title>Verification</v-list-item-title>
                </v-list-item>
                <v-list-item @click="pendingFilter = 'Evaluation'">
                  <v-list-item-title>Evaluation</v-list-item-title>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="filteredPendingApplications"
            :items-per-page="5"
            class="elevation-0"
          >
            <template v-slot:item.status="{ item }">
              <v-chip :color="getStatusColor(item.status)" dark small>
                {{ item.status }}
              </v-chip>
            </template>
          </v-data-table>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";

const logout = () => {
  console.log("Logged out");
};

// Mock application data with different statuses
const applications = ref([
  {
    id: 1,
    type: "Building Permit",
    name: "John Smith",
    applicationNumber: "BP-2023-001",
    dateSubmitted: "2025-08-20",
    status: "Pending for Evaluation",
  },
  {
    id: 2,
    type: "Locational Clearance",
    name: "Jane Doe",
    applicationNumber: "LC-2023-002",
    dateSubmitted: "2025-08-15",
    status: "Approved",
  },
  {
    id: 3,
    type: "Occupancy Permit",
    name: "Peter Jones",
    applicationNumber: "OP-2023-003",
    dateSubmitted: "2025-08-10",
    status: "Approved",
  },
  {
    id: 4,
    type: "Building Permit",
    name: "Alice Williams",
    applicationNumber: "BP-2023-004",
    dateSubmitted: "2025-08-18",
    status: "Rejected",
  },
  {
    id: 5,
    type: "Building Permit",
    name: "Robert Brown",
    applicationNumber: "BP-2023-005",
    dateSubmitted: "2025-08-22",
    status: "Pending for Verification",
  },
  {
    id: 6,
    type: "Locational Clearance",
    name: "Emily Davis",
    applicationNumber: "LC-2023-006",
    dateSubmitted: "2025-08-21",
    status: "Pending for Verification",
  },
  {
    id: 7,
    type: "Occupancy Permit",
    name: "Chris Evans",
    applicationNumber: "OP-2023-007",
    dateSubmitted: "2025-08-12",
    status: "Approved",
  },
  {
    id: 8,
    type: "Building Permit",
    name: "Olivia Wilson",
    applicationNumber: "BP-2023-008",
    dateSubmitted: "2025-08-05",
    status: "Approved",
  },
  {
    id: 9,
    type: "Building Permit",
    name: "David Taylor",
    applicationNumber: "BP-2023-009",
    dateSubmitted: "2025-08-23",
    status: "Rejected",
  },
  {
    id: 10,
    type: "Locational Clearance",
    name: "Sophia Martinez",
    applicationNumber: "LC-2023-010",
    dateSubmitted: "2025-08-19",
    status: "Approved",
  },
]);

// New ref for the filter chip selection
const pendingFilter = ref("all");

// Computed property for pending applications
const pendingApplications = computed(() => {
  return applications.value.filter((app) => app.status.startsWith("Pending"));
});

// Computed property to filter the pending applications based on the selected option
const filteredPendingApplications = computed(() => {
  if (pendingFilter.value === "all") {
    return pendingApplications.value;
  }
  return pendingApplications.value.filter((app) =>
    app.status.includes(pendingFilter.value)
  );
});

// Computed property to calculate counts
const applicationCounts = computed(() => {
  const counts = {
    total: applications.value.length,
    pending: pendingApplications.value.length,
    approved: applications.value.filter((app) => app.status === "Approved")
      .length,
    rejected: applications.value.filter((app) => app.status === "Rejected")
      .length,
  };
  return counts;
});

// Updated headers to include new columns
const headers = ref([
  { title: "Application Number", align: "start", key: "applicationNumber" },
  { title: "Application Type", align: "start", key: "type" },
  { title: "Application Name", align: "start", key: "name" },
  { title: "Date Submitted", align: "start", key: "dateSubmitted" },
  { title: "Status", align: "end", key: "status" },
]);

const getStatusColor = (status) => {
  if (status.includes("Pending")) return "orange";
  if (status === "Approved") return "green";
  if (status === "Rejected") return "red";
  return "grey";
};

const metrics = ref([
  {
    title: "Total Applications",
    key: "total",
    change: "12.5%",
    changeIcon: "mdi-arrow-up",
    changeColor: "text-green-darken-1",
    changeIconColor: "green",
    icon: "mdi-file-document-outline",
    iconColor: "blue-lighten-4",
  },
  {
    title: "Pending Reviews",
    key: "pending",
    change: "5.2%",
    changeIcon: "mdi-arrow-up",
    changeColor: "text-orange-darken-1",
    changeIconColor: "orange",
    icon: "mdi-timer-sand-empty",
    iconColor: "orange-lighten-4",
  },
  {
    title: "Approved Permits",
    key: "approved",
    change: "8.7%",
    changeIcon: "mdi-arrow-up",
    changeColor: "text-green-darken-1",
    changeIconColor: "green",
    icon: "mdi-check-circle-outline",
    iconColor: "green-lighten-4",
  },
  {
    title: "Rejected Applications",
    key: "rejected",
    change: "3.1%",
    changeIcon: "mdi-arrow-down",
    changeColor: "text-red-darken-1",
    changeIconColor: "red",
    icon: "mdi-close-circle-outline",
    iconColor: "red-lighten-4",
  },
]);

const formattedDate = ref("");

const updateTime = () => {
  const now = new Date();
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  };
  formattedDate.value = now.toLocaleDateString("en-US", options);
};

onMounted(() => {
  updateTime();
  setInterval(updateTime, 1000);
});
</script>

<style scoped>
.nav-links .v-btn {
  text-transform: none !important;
  font-weight: 500;
  font-size: 17px;
}
</style>