<template>
    <Navbar></Navbar>
  <RouterView />
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from "@/components/NavbarComponent.vue"
</script>

<style lang="scss">
  @import "./style/all.scss";
</style>