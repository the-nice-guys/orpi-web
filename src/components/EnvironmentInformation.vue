<template>
  <v-card
      elevation="2"
      style="border-radius: 24px;"
      height="300"
  >
    <v-card-title>Information</v-card-title>

    <div class="text-center ma-4" v-if="store.getters.environments.length == 0">
      <v-progress-circular color="#5777FA" indeterminate :size="94"></v-progress-circular>
    </div>

    <v-list density="compact" style="height: 85%; overflow: scroll" v-else>
      <v-list-item prepend-icon="mdi-clock" title="Uptime">
        <v-list-item-subtitle>11d 23h 06m</v-list-item-subtitle>
      </v-list-item>

      <v-list-group value="Cost">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              prepend-icon="mdi-currency-usd"
              title="Cost"
          >
            <v-list-item-subtitle>$15.60</v-list-item-subtitle>
          </v-list-item>
        </template>

        <v-list-item
            v-for="(item, i) in selectedEnvironment.hosts"
            :key="i"
            :title="item.name"
            prepend-icon="mdi-server"
        >
          <v-list-item-subtitle>{{ item.cost }}</v-list-item-subtitle>
        </v-list-item>
      </v-list-group>

      <v-list-item
          title="Last Snapshot"
          prepend-icon="mdi-backup-restore"
      >
        <v-list-item-subtitle>22.10.2022 12:00:00</v-list-item-subtitle>
      </v-list-item>

      <v-list-group value="Versions">
        <template v-slot:activator="{ props }">
          <v-list-item
              v-bind="props"
              title="Version"
              prepend-icon="mdi-xml"
          >
            <v-list-item-subtitle>1.2.0</v-list-item-subtitle>
          </v-list-item>
        </template>

        <v-list-item
            v-for="i in [5, 4, 3, 2, 1]"
            :key="i"
            :title="'Version ' + i"
        >
          <v-list-item-subtitle>1.1.{{ i }}</v-list-item-subtitle>
        </v-list-item>
      </v-list-group>

      <v-list-item
          title="Other"
          prepend-icon="mdi-information"
          @click="fullInfoClicked"
      >
        <v-list-item-subtitle>Full information about environment</v-list-item-subtitle>
      </v-list-item>
    </v-list>

  </v-card>
</template>
<script>
import {useStore} from "vuex";
export default {
  name: 'EnvironmentInformation',
  props: {
    fullInfoClicked: {},
    selectedEnvironment: {}
  },
  data: () => ({
    store: useStore()
  })
}
</script>
