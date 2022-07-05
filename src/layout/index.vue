<template>
  <div class="layout">
    <NavBar></NavBar>
    <Sidebar></Sidebar>
    <AppMain></AppMain>
  </div>
</template>
<script setup>
import NavBar from './components/NavBar.vue'
import Sidebar from './components/Sidebar.vue'
import AppMain from './components/AppMain.vue'
</script>
<style lang="scss" scoped></style>
