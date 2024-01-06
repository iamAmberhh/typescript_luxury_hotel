import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/rooms',
      name: 'roomList',
      component: () => import('../views/HotelRoomList.vue')
    },
    {
      path: '/room/:id',
      name: 'room',
      component: () => import('../views/RoomDetail.vue')
    }
  ]
})

export default router
