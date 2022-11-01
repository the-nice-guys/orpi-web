<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      height="100%">
    <v-card-title>Services of <span style="color: #5777FA">{{host.name}}</span></v-card-title>

    <div class="text-center ma-4" v-if="store.getters.environments.length == 0">
      <v-progress-circular color="#5777FA" indeterminate :size="94"></v-progress-circular>
    </div>

    <div v-else>
      <div class="ma-2 chips">
        <v-chip
            class="ma-1"
            v-for="(item, i) in host.services"
            :key="i"
            color="#5777FA"
            variant="outlined"
            prepend-icon="mdi-server"
        >
          <span>{{getServiceName(item)}}</span>
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
import {useStore} from "vuex";
export default {
  name: "HostServices",
  props: {
    host: Object,
    services: Array
  },
  data: () => ({
    store: useStore()
  }),
  methods: {
    getServiceName(id) {
      return this.services.find(s => s.id === id).name
    }
  }
}
</script>

<style scoped>
  .chips {
    display: flex;
    flex-wrap: wrap;
    justify-content: start;
    flex-direction: row;
  }
</style>
