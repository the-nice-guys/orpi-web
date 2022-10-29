<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      max-height="300"
  >
    <v-card-title>History</v-card-title>
    <v-timeline align="start" style="overflow: scroll" class="px-4 pb-8">
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
export default {
  name: "EnvHistory"
}
</script>

<style scoped>

</style>
