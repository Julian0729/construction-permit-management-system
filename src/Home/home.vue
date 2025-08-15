<template>
  <div class="page-wrapper">
    <!-- Header component - Keep this consistent across pages -->
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

    <v-main>
      <v-container fluid class="pa-0">
        <!-- Hero Section with Background Image -->
        <section
          class="hero-section d-flex align-center justify-center"
          :style="{
            'background-image': `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${backgroundImageUrl}')`,
          }"
        >
          <v-container class="hero-content text-left">
            <h1 class="hero-title">
              One Stop Shop for<br />Construction Permits
            </h1>
            <p class="hero-subtitle">
              Fast, Efficient, and Convenient Permit Processing in Naga City
            </p>
            <div class="d-flex mt-6">
              <v-btn color="#2962FF" dark large class="mr-4" to="/services">
                <v-icon left>mdi-file-edit-outline</v-icon>
                Apply Now
              </v-btn>
              <v-btn outlined large dark>
                <v-icon left>mdi-help-circle-outline</v-icon>
                Inquiry
              </v-btn>
            </div>
          </v-container>
        </section>
      </v-container>
    </v-main>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      // The background image URL provided by the user
      backgroundImageUrl:
        "https://upload.wikimedia.org/wikipedia/en/f/fb/Naga_City_Hall_front_%28J._Miranda_Avenue%2C_Naga%2C_Camarines_Sur%3B_04-15-2023%29.jpg",
    };
  },
};
</script>

<style scoped>
.page-wrapper {
  background-color: #f7f7f7;
  min-height: 100vh;
}

.nav-links .v-btn {
  text-transform: none !important;
  font-weight: 500;
  font-size: 17px;
}

.hero-section {
  width: 100%;
  height: calc(100vh - 88px); /* Full height minus app bar height */
  background-size: cover;
  background-position: center;
  background-attachment: fixed; /* Parallax effect */
  color: white;
  padding: 0 16px;
}

.hero-content {
  max-width: 1600px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  line-height: 1.2;
  margin-bottom: 12px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.v-btn {
  text-transform: none;
  font-weight: 600;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: none;
}

.v-btn.v-size--large {
  height: 48px;
}

/* Responsive adjustments */
@media (max-width: 960px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>
