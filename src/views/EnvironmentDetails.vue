<template>
    <v-card
        elevation="2"
        style="border-radius: 24px"
    >
      <v-card-title>{{env.name}}</v-card-title>
      <line-chart
          class="pa-4"
          title="Chart"
          :dataset="env.services[0].load.dataset"
          :labels="env.services[0].load.labels"
          :width="width"
          :height="height"
          :id="id"
      />
    </v-card>
</template>

<script>
import LineChart from "@/components/LineChart";

export default {
  name: "EnvironmentDetails",
  components: {
    LineChart,
  },
  props: {
    env: Object,
    id: String,
    width: Number,
    height: Number,
  },

}
</script>

<style scoped>

</style>
