<template>
  <!-- <Navbar></Navbar> -->
  <RouterView />
</template>

<script setup lang="ts">
// import { ref, computed } from 'vue'
import { RouterView } from 'vue-router'
import Navbar from "@/components/NavbarComponent.vue"

// const route = useRoute()

// const currentRouteName = ref(computed(() => route.name))
// console.log(currentRouteName.value)
</script>

<style lang="scss">
  @import "./style/all.scss";
</style>