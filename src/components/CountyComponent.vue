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
  broadcastify: String
});

function openOpenMhz() {
  window.open(props.openmhz, '_blank');
}

function openBroadcastify() {
  window.open(props.broadcastify, '_blank');
}
</script>

<template>
  <div>
    <Card>
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
        <p class="m-0">
          {{ props.description }}
        </p>
        <div class="radio-sources">
          <Button v-if="props.openmhz && props.openmhz !== ''" type="button" @click="openOpenMhz" label="OpenMHZ" severity="danger" />
          <Button v-if="props.broadcastify && props.broadcastify !== ''" type="button" label="Broadcastify" severity="warn" />
        </div>
      </template>
    </Card>
  </div>
</template>

<style scoped>
.radio-sources {
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
}
</style>