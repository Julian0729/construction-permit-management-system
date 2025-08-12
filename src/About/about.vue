<template>
  <div class="page-wrapper">
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
      <v-container class="main-content">
        <!-- About Us section -->
        <section class="about-us-section">
          <div class="text-center mb-10">
            <h1 class="page-title">About Us</h1>
            <p class="subtitle">
              Learn more about the Construction Permit Management System of Naga
              City Government
            </p>
          </div>
          <v-card class="about-card" flat>
            <v-row no-gutters>
              <v-col cols="12" md="6" class="py-12 px-8">
                <!-- Mission and Vision -->
                <div class="mb-8">
                  <h2 class="section-heading">Our Mission</h2>
                  <p class="section-text">
                    To provide an efficient and transparent construction permit
                    management service that ensures compliance with building
                    standards while promoting sustainable urban development in
                    Naga City.
                  </p>
                </div>
                <div class="mb-8">
                  <h2 class="section-heading">Our Vision</h2>
                  <p class="section-text">
                    To be the leading example of digital transformation in
                    construction permit management, setting the standard for
                    efficiency, transparency, and service excellence in local
                    government operations.
                  </p>
                </div>
                <!-- Statistics -->
                <div class="d-flex justify-space-between mt-10 stats-container">
                  <div class="stat-item text-center">
                    <h3 class="stat-number">10+</h3>
                    <p class="stat-label">Years of Service</p>
                  </div>
                  <div class="stat-item text-center">
                    <h3 class="stat-number">5000+</h3>
                    <p class="stat-label">Permits Issued</p>
                  </div>
                  <div class="stat-item text-center">
                    <h3 class="stat-number">98%</h3>
                    <p class="stat-label">Satisfaction Rate</p>
                  </div>
                </div>
              </v-col>
              <v-col cols="12" md="6" class="d-none d-md-flex">
                <v-img
                  src="https://placehold.co/800x600/EAF2FF/2962FF?text=Placeholder+Image"
                  alt="City Government Building"
                  class="rounded-lg h-100"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </section>

        <!-- Get in Touch section -->
        <section class="get-in-touch-section">
          <div class="text-center mb-8">
            <h2 class="section-heading-dark">Get in Touch</h2>
            <p class="subtitle">
              We're here to assist you with any questions about construction
              permits
            </p>
          </div>
          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-text class="text-center">
                  <div class="icon-container-small">
                    <v-icon size="24" color="#2962FF">mdi-map-marker</v-icon>
                  </div>
                  <h3 class="contact-title">Visit Us</h3>
                  <p class="contact-info">City Hall, City Government of Naga</p>
                  <p class="contact-info">J. Miranda Avenue, Naga City</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-text class="text-center">
                  <div class="icon-container-small">
                    <v-icon size="24" color="#2962FF">mdi-phone</v-icon>
                  </div>
                  <h3 class="contact-title">Call Us</h3>
                  <p class="contact-info">(054) 473-2328</p>
                  <p class="contact-info">Monday - Friday; 8AM - 5PM</p>
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" md="4">
              <v-card class="contact-card">
                <v-card-text class="text-center">
                  <div class="icon-container-small">
                    <v-icon size="24" color="#2962FF">mdi-email</v-icon>
                  </div>
                  <h3 class="contact-title">Email Us</h3>
                  <p class="contact-info">permits@naga.gov.ph</p>
                  <p class="contact-info">support@naga.gov.ph</p>
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </section>
      </v-container>
    </v-main>

    <!-- Footer component -->
    <v-footer color="#0a1d42" dark padless>
      <v-container style="max-width: 1600px" class="py-8">
        <v-row>
          <v-col cols="12" md="4">
            <div class="d-flex align-center mb-4">
              <v-img
                src="https://www2.naga.gov.ph/wp-content/uploads/2022/05/Naga_City_Official_Seal-1.png"
                alt="LGU Seal"
                width="60"
                height="50"
                contain
                class="me-3"
              />
              <div class="text-h6 font-weight-bold">
                CITY GOVERNMENT OF NAGA
              </div>
            </div>
            <p class="footer-text">
              Serving the people of Naga City with excellence, transparency, and
              dedication.
            </p>
          </v-col>
          <v-col cols="12" md="2">
            <h4 class="footer-heading">Quick Links</h4>
            <ul class="footer-list">
              <li><a href="/home">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="#">News & Updates</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <h4 class="footer-heading">Services</h4>
            <ul class="footer-list">
              <li><a href="#">Business Permits</a></li>
              <li><a href="#">Civil Registration</a></li>
              <li><a href="#">Tax Services</a></li>
              <li><a href="#">Public Works</a></li>
            </ul>
          </v-col>
          <v-col cols="12" md="3">
            <h4 class="footer-heading">Connect With Us</h4>
            <div class="d-flex mt-2">
              <v-btn icon class="social-icon" href="#" target="_blank">
                <v-icon size="24">mdi-facebook</v-icon>
              </v-btn>
              <v-btn icon class="social-icon" href="#" target="_blank">
                <v-icon size="24">mdi-twitter</v-icon>
              </v-btn>
              <v-btn icon class="social-icon" href="#" target="_blank">
                <v-icon size="24">mdi-youtube</v-icon>
              </v-btn>
            </div>
            <p class="footer-text mt-4">
              Follow us for the latest updates and announcements.
            </p>
          </v-col>
        </v-row>
        <v-divider class="my-5"></v-divider>
        <div class="text-center">
          <p class="footer-text mb-0">
            © 2023 City Government of Naga. All rights reserved.
          </p>
        </div>
      </v-container>
    </v-footer>
  </div>
</template>

<script>
export default {
  name: "AboutPage",
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

.main-content {
  padding-top: 50px;
  padding-bottom: 50px;
}

.about-us-section {
  margin-bottom: 80px;
}

.page-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.7;
}

.about-card {
  border-radius: 19px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
  background-color: #ffffff;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 12px;
}

.section-heading-dark {
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 10px;
}

.section-text {
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.stats-container {
  max-width: 500px;
  margin-left: auto;
  margin-right: auto;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2962ff;
}

.stat-label {
  font-size: 0.9rem;
  color: #7f8c8d;
  text-transform: uppercase;
}

.get-in-touch-section {
  margin-bottom: 50px;
}

.contact-card {
  border-radius: 19px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05) !important;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff;
  height: 100%;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
}

.icon-container-small {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #eaf2ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 16px auto;
}

.contact-title {
  font-size: 1.1rem;
  font-weight: 600;
  color: #2c3e50;
  margin-bottom: 8px;
}

.contact-info {
  font-size: 0.95rem;
  color: #7f8c8d;
  line-height: 1.5;
}

.v-footer {
  width: 100%;
}

.footer-heading {
  font-size: 1.1rem;
  font-weight: 600;
  color: white;
  margin-bottom: 16px;
}

.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-list li a {
  color: #ccc;
  text-decoration: none;
  font-size: 0.9rem;
  line-height: 2;
  transition: color 0.3s ease;
}

.footer-list li a:hover {
  color: white;
}

.footer-text {
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.6;
}

.social-icon {
  margin-right: 12px;
  color: white;
  background-color: rgba(255, 255, 255, 0.1);
  transition: background-color 0.3s ease;
}

.social-icon:hover {
  background-color: rgba(255, 255, 255, 0.2);
}
</style>
