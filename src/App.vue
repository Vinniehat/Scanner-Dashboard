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

    <header>
      <!--    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />-->

      <div class="">

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
        <Button type="button" label="Test" severity="info" />

      </div>
    </header>


    <Card>
      <template #title>Simple Card</template>
      <template #content>
        <p class="m-0">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque
          quas!
        </p>
      </template>
    </Card>



    <RouterView />
  </div>

</template>

<style scoped>

</style>
