<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import Header from "@/components/HeaderComponent.vue";
import HeaderComponent from "@/components/HeaderComponent.vue";
import {Button, Card} from "primevue";
</script>

<template>
  <div>
    <HeaderComponent />


    <RouterView />
  </div>

</template>

<style scoped>

</style>
