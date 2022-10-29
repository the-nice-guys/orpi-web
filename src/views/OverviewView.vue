<template>
  <main class="Overview">
    <v-sheet
        class="bg-sheet"
        color="#5777FAFF"
        height="18%"
        width="100%"
    >
    </v-sheet>
    <v-container fluid>
      <v-row justify="end">
          <account-cloud class="ma-2 mr-16 elevation-2"/>
      </v-row>
      <v-row class="mt-8" justify="start">
        <v-col xs12 md6 lg6 xl4 class="mb-4">
          <Environments
              :environments="environments"
              v-on:select-environment="selectEnvironment"
              :selected-environment="selectedEnvironment"/>
        </v-col>

        <v-col cols="8" xs12 md6 lg6 xl4 >
          <v-row class="mb-2" no-gutters>
            <v-col  class="mx-2">
              <Hosts
                  :env="selectedEnvironment"
                  v-on:select-host="selectHost"/>
            </v-col>
            <v-col class="mx-2">
              <HostServices :host="selectedHost"/>
            </v-col>
          </v-row>

          <v-row class="ma-2" no-gutters>
            <EnvHistory class="my-2"/>
          </v-row>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="8">
          <EnvironmentInformation
              :full-info-clicked="fullInfoClicked"
              :open="open"
              :selected-environment="selectedEnvironment"/>
        </v-col>

        <v-col>
          <Actions/>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import {useStore} from 'vuex';

// Components
import accountCloud from "@/components/AccountCloud";
import Hosts from "@/components/Hosts";
import HostServices from "@/components/HostServices";
import EnvHistory from "@/components/EnvHistory";
import Environments from "@/components/Environments";
import EnvironmentInformation from "@/components/EnvironmentInformation";
import Actions from "@/components/Actions";

export default defineComponent({
  name: 'OverviewView',

  components: {
    Actions,
    EnvironmentInformation,
    Environments,
    EnvHistory,
    HostServices,
    Hosts,
    accountCloud
  },
  data: () => ({
    store: useStore(),
    open: ['Users'],
    environments: [],
    selectedEnvIndex: 0,
    selectedEnvironment: {
      name: '',
      description: '',
      icon: '',
      services: [
        {
          load: {
            labels: [],
            dataset: []
          }
        },
        {
          load: {
            labels: [],
            dataset: []
          }
        }
      ]
    },
    selectedHost: {
      name: '',
      description: '',
      icon: '',
      status: ''
    },

  }),
  async mounted() {
    this.environments = await this.store.dispatch('getUserEnvironments');
    this.selectedEnvironment = this.environments[this.selectedEnvIndex];
    this.selectedHost = this.selectedEnvironment.hosts[0];
  },
  methods: {
    selectEnvironment(item) {
      console.log(item.services)
      this.selectedEnvironment = item;
      this.selectedHost = item.hosts[0];
    },
    selectHost(item) {
      console.log(item)
      this.selectedHost = item
    },
    fullInfoClicked() {
      console.log('full info clicked')
    },
  }
});
</script>

<style scoped>
.bg-sheet {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

</style>
