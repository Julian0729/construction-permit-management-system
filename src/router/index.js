
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [

    // LOGIN PART,
    
    // HOME PART,
     {
      path: '/home',
      name: 'home',
      component: () => import('@/Home/home.vue'),  // Or any other component for the root
     },
    // SERVICES PART,
     {
      path: '/services',
      name: 'services',
      component: () => import('@/Services/services.vue'),  // Or any other component for the root
     },
    // ABOUT PART,
    {
      path: '/about',
      name: 'about',
      component: () => import('@/About/about.vue'),  // Or any other component for the root
     },
    // LOCATIONAL CLEARANCE PART,
    {
      path: '/locational',
      name: 'Locational',
      component: () => import('@/LocationalClearance/locational.vue'),  // Or any other component for the root
     },

    // LOCATIONAL CLEARANCE LOGIN PART

      {
      path: '/lclogin',
      name: 'lclogin',
      component: () => import('@/Login/LC_Login/lclogin.vue'),  // Or any other component for the root
     },

    // BUILDING PERMIT PART,
    {
      path: '/buildingpermit',
      name: 'BuildingPermit',
      component: () => import('@/BuildingPermit/buildingpermit.vue'),  // Or any other component for the root
     },

      // BUILDING PERMIT LOGIN PART
 {
      path: '/bplogin',
      name: 'bplogin',
      component: () => import('@/Login/BP_Login/bplogin.vue'),  // Or any other component for the root
     },
      
    // OCCUPANCY PERMIT PART,
    {
      path: '/occupancypermit',
      name: 'OccupancyPermit',
      component: () => import('@/OccupancyPermit/occupancy.vue'),  // Or any other component for the root
     },

     // OCCUPANCY LOGIN PART
      {
      path: '/oplogin',
      name: 'oplogin',
      component: () => import('@/Login/OP_Login/oplogin.vue'),  // Or any other component for the root
     },
    // COMPLIANCE MONITORING PART,
     {
      path: '/compliance',
      name: 'ComplianceMonitoring',
      component: () => import('@/ComplianceMonitoring/compliance.vue'),  // Or any other component for the root
     },

     // PORTAL PART,
     {
      path: '/portal',
      name: 'portal',
      component: () => import('@/Portal/portal.vue'),  // Or any other component for the root
     },
    



  ],


})

export default router


