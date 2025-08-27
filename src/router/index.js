
import { createRouter, createWebHistory } from 'vue-router/auto'


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes: [

    
    // LOGIN PART,

    // HOME PART,
     {
      path: '/',
      name: 'home',
      component: () => import('@/Home/home.vue'), 
     },
    // SERVICES PART,
     {
      path: '/services',
      name: 'services',
      component: () => import('@/Services/services.vue'),  
     },
    // ABOUT PART,
    {
      path: '/about',
      name: 'about',
      component: () => import('@/About/about.vue'), 
     },
    // LOCATIONAL CLEARANCE PART,
    {
      path: '/locational',
      name: 'Locational',
      component: () => import('@/LocationalClearance/locational.vue'), 
     },

    // LOCATIONAL CLEARANCE LOGIN PART

      {
      path: '/lclogin',
      name: 'lclogin',
      component: () => import('@/Login/LC_Login/lclogin.vue'),  // Or any other component for the root
     },


      {
      path: '/application',
      name: 'application',
      component: () => import('@/BuildingPermit/application.vue'),  // Or any other component for the root
      },

        {
      path: '/owner',
      name: 'owner',
      component: () => import('@/BuildingPermit/owner.vue'),  // Or any other component for the root
      },

      {
      path: '/location',
      name: 'location',
      component: () => import('@/BuildingPermit/location.vue'),  // Or any other component for the root
      },

      {
      path: '/character',
      name: 'character',
      component: () => import('@/BuildingPermit/character.vue'),  // Or any other component for the root
      },

      // BUILDING PERMIT PART ANCILLARY PART

       {
      path: '/ancillary',
      name: 'ancillary',
      component: () => import('@/BuildingPermit/ancillary.vue'),  // Or any other component for the root
      },

      {
      path: '/plans',
      name: 'plans',
      component: () => import('@/BuildingPermit/plans.vue'),  // Or any other component for the root
      },

            {
      path: '/review',
      name: 'review',
      component: () => import('@/BuildingPermit/review.vue'),  // Or any other component for the root
      },
    // ADMIN FOLDER 

   {
      path: '/ainformation',
      name: 'ainformation',
      component: () => import('@/Admin/ainformation.vue'),  // Or any other component for the root
      },

         {
      path: '/bpapplicants',
      name: 'bpapplicants',
      component: () => import('@/Admin/bpapplicants.vue'),  // Or any other component for the root
      },

         {
      path: '/evaluation',
      name: 'evaluation',
      component: () => import('@/Admin/evaluation.vue'),  // Or any other component for the root
      },

         {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/Admin/dashboard.vue'),  // Or any other component for the root
      },

          // ADMIN FOLDER 
   {
      path: '/buildingpermits',
      name: 'buildingpermits',
      component: () => import('@/Architects/buildingpermits.vue'),  // Or any other component for the root
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


