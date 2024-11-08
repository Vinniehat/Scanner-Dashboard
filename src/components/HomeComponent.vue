<script setup>
import { ref, onMounted } from 'vue';
import CountyComponent from './CountyComponent.vue';

const states = ref([]);
const error = ref(null);

async function fetchStates() {
  try {
    const response = await fetch('./src/counties.json');
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    states.value = data;
  } catch (err) {
    error.value = err.message;
    console.error('Failed to fetch states:', err);
  }
}

onMounted(() => {
  fetchStates();
});
</script>

<template>
  <div>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-else>
      <div v-for="(state, stateIndex) in states" :key="stateIndex">
        <h2 class="text-gray-200 text-2xl mt-1">{{ state.state }}</h2>
        <hr>
        <br>
        <div class="grid grid-cols-3 gap-4 counties">
          <CountyComponent
              v-for="(county, countyIndex) in state.counties"
              :key="countyIndex"
              :location="county.location"
              :type="county.type"
              :name="county.name"
              :host="county.host"
              :openmhz="county.openmhz"
              :broadcastify="county.broadcastify"
              :description="county.description"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counties {
  display: grid;
  align-items: stretch;
}
.error {
  color: red;
}
</style>