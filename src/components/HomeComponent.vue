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
              :radioreference_prim="county.radioreference_prim"
              :radioreference_sec="county.radioreference_sec"
              :waze="county.waze"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.counties {
  display: grid;
  gap: 1rem;
}

/* Medium screens Prev. 768px */
@media (max-width: 1024px) {
  .counties {
    grid-template-columns: repeat(1, minmax(200px, 1fr)); /* 2 columns for tablets */
  }
}

/* Small screens */
@media (max-width: 1024px) {
  .counties {
    grid-template-columns: repeat(1, minmax(200px, 1fr)); /* 1 column for mobile */
  }
}
</style>