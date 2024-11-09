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
  radioreference_prim: String,
  radioreference_sec: String,
  waze: String
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
      </template>

      <template #footer>
        <div class="radio-sources">
          <Button :disabled="!props.openmhz" type="button" @click="openOpenMhz" label="OpenMHZ" severity="danger" />
          <Button :disabled="!props.radioreference_prim" type="button" label="RadioReference" severity="help" />
<!--          <Button :disabled="!props.radioreference_sec" type="button" label="RadioReference (System)" severity="info" />-->
          <Button :disabled="!props.broadcastify" type="button" label="Broadcastify" severity="warn" />
          <Button :disabled="!props.waze" type="button" label="Waze" severity="info" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.county-card {
  height: 100%;
}

.full-height-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.content-wrapper {
  flex-grow: 1;
  min-height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.radio-sources {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Ensure 6 columns */
  gap: 0.5rem;
  justify-content: flex-start;
  align-items: center;

}

@media (max-width: 600px) {
  .radio-sources {
    grid-template-columns: repeat(2, 1fr); /* Adjust for smaller screens */
    justify-content: center;
  }
}
</style>