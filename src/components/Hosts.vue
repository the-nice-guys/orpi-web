<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      min-width="300"
      height="100%">
    <v-card-title>Hosts of <span style="color: #5777FA">{{env.name}}</span> </v-card-title>

    <div class="text-center ma-4" v-if="store.getters.environments.length == 0">
      <v-progress-circular color="#5777FA" indeterminate :size="94"></v-progress-circular>
    </div>

    <v-list
      :selected="['Host 1']"
      v-else
    >
        <v-list-item
            v-for="item in env.hosts"
            :key="item.name"
            :value="item.name"
            @click="selectHost(item)"
            active-color="#5777FAFF"
        >
          <template v-slot:prepend>
            <v-icon :icon="item.icon" v-bind:class="item.status"></v-icon>
          </template>
          <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
        </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
import {useStore} from "vuex";
export default {
  name: "HostsView",
  props: {
    env: Object
  },
  data: () => ({
    selectedHost: null,
    selectedHostIndex: 0,
    store: useStore()
  }),
  mounted() {
    //this.selectedHost = this.env.hosts[this.selectedHostIndex]
    //this.selectHost(this.selectedHost)
  },
  methods: {
    selectHost(item) {
      this.$emit('select-host', item)
    }
  }
}
</script>

<style scoped>
  .online {
    color: #4CAF50;
  }
  .offline {
    color: #F44336;
  }
</style>
