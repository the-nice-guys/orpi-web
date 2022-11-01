<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      max-height="300"
      width="100%"
  >
    <v-card-title>History</v-card-title>

    <div class="text-center ma-4" v-if="store.getters.environments.length == 0">
      <v-progress-circular color="#5777FA" indeterminate :size="94"></v-progress-circular>
    </div>
    <v-timeline align="start" style="overflow: scroll" class="px-4 pb-8" v-else>
      <v-timeline-item
        dot-color="#5777FA">
        <template v-slot:opposite>
          23.10.2022 v1.2.0
        </template>
        <div>
          <div class="text-h6">Service added</div>
          <p>
            Service 15 was added on the Host 1
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
        dot-color="#1D2336"
      >
        <template v-slot:opposite>
          22.10.2022
        </template>
        <div>
          <div class="text-h6">Snapshot taken</div>
          <p>
            Backup of the environment was taken
          </p>
        </div>
      </v-timeline-item>

      <v-timeline-item
          dot-color="#1D2336"
      >
        <template v-slot:opposite>
          Opposite content
        </template>
        <div>
          <div class="text-h6">Content title</div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-timeline-item>
    </v-timeline>
  </v-card>
</template>

<script>
import {useStore} from "vuex";
export default {
  name: "EnvHistory",
  data: () => ({
    store: useStore()
  }),
}
</script>

<style scoped>

</style>
