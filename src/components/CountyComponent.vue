<script setup>
import { Button } from "primevue";
import { Card } from "primevue";
import { defineProps } from 'vue';

const props = defineProps({
  name: String,
  type: String,
  system: String,
  host: String,
  location: String,
  description: String,
  openmhz: String,
  broadcastify: String,
  radioreference_county: String,
  radioreference_system: String,
});

function openOpenMhz() {
  window.open(props.openmhz, '_blank');
}

function openBroadcastify() {
  window.open(props.broadcastify, '_blank');
}
</script>

<template>
  <div class="county-card">
    <Card class="full-height-card">
      <template #title>{{ props.name }}</template>
      <template #subtitle>
        <div>
          {{props.location}}
          <br>
          {{props.type}}
          <br>
          Hosted by: {{props.host}}
        </div>
      </template>

      <template #content>
        <div class="content-wrapper">
          <p class="m-0">{{ props.description }}</p>
        </div>
        <div class="radio-sources grid grid-cols-6">
          <Button v-if="props.openmhz" type="button" @click="openOpenMhz" label="OpenMHZ" severity="danger" />
          <Button v-if="props.radioreference_county" type="button" label="RadioReference (County)" severity="info" />
          <Button v-if="props.radioreference_system" type="button" label="RadioReference (System)" severity="info" />
          <Button v-if="props.broadcastify" type="button" label="Broadcastify" severity="warn" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.county-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.full-height-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-wrapper {
  flex-grow: 1; /* Allows content to take up space and push buttons to bottom */
  margin-bottom: 1rem; /* Space between description and buttons */
}

.radio-sources {
  display: flex;
  justify-content: space-between;
  margin-top: auto; /* Forces buttons to bottom */
}
</style>
