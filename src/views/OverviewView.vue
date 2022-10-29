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
    admins: [
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline'],
    ],
    cruds: [
      ['Create', 'mdi-plus-outline'],
      ['Read', 'mdi-file-outline'],
      ['Update', 'mdi-update'],
      ['Delete', 'mdi-delete'],
    ],
    environments: [
      {
        name: 'Production',
        description: 'Production environment',
        icon: 'mdi-cloud-check-outline',
        hosts: [
          {
            name: 'Host 1',
            description: 'Host 1 description',
            icon: 'mdi-server',
            status: 'online',
            cost: '$10.00',
          },
          {
            name: 'Host 2',
            description: 'Host 2 description',
            icon: 'mdi-server',
            status: 'online',
            cost: '$5.60',
          },
          {
            name: 'Host 3',
            description: 'Host 3 description',
            icon: 'mdi-server',
            status: 'offline',
            cost: '$0.00',
          },
        ],
        services: [
          {
            id: 1,
            name: 'Service 1',
            description: 'Service 1 description',
            load: {
              labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
              dataset: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70],
            },
            options: {
              ports: [
                {
                  name: 'Port 1',
                  description: 'Port 1 description',
                  value: 8080
                },
                {
                  name: 'Port 2',
                  description: 'Port 2 description',
                  value: 8081
                }
              ],
              env_vars: [
                {
                  name: 'Env Var 1',
                  description: 'Env Var 1 description',
                  value: 'Env Var 1 value'
                },
                {
                  name: 'Env Var 2',
                  description: 'Env Var 2 description',
                  value: 'Env Var 2 value'
                }
              ]
            }
          },
          {
            id: 2,
            name: 'Service 2',
            description: 'Service 2 description',
            load: {
              labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
              dataset: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70],
            },
            options: {
              ports: [
                {
                  name: 'Port 1',
                  description: 'Port 1 description',
                  value: 8080
                },
                {
                  name: 'Port 2',
                  description: 'Port 2 description',
                  value: 8081
                }
              ],
              env_vars: [
                {
                  name: 'Env Var 1',
                  description: 'Env Var 1 description',
                  value: 'Env Var 1 value'
                },
                {
                  name: 'Env Var 2',
                  description: 'Env Var 2 description',
                  value: 'Env Var 2 value'
                }
              ]
            }
          }
        ],
        dependencies: {
          1: [
            2
          ],
        }
      },
      {
        name: 'Development',
        description: 'Development environment',
        icon: 'mdi-cloud-sync-outline',
        hosts: [
          {
            name: 'Host 1',
            description: 'Host 1 description',
            icon: 'mdi-server',
            status: 'online'
          },
          {
            name: 'Host 2',
            description: 'Host 2 description',
            icon: 'mdi-server',
            status: 'online'
          },
        ],
        services: [
          {
            id: 1,
            name: 'Service 1',
            description: 'Service 1 description',
            load: {
              labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
              dataset: [6, 59, 80, 3, 56, 55, 0, 0, 0, 70],
            },
            options: {
              ports: [
                {
                  name: 'Port 1',
                  description: 'Port 1 description',
                  value: 8080
                },
                {
                  name: 'Port 2',
                  description: 'Port 2 description',
                  value: 8081
                }
              ],
              env_vars: [
                {
                  name: 'Env Var 1',
                  description: 'Env Var 1 description',
                  value: 'Env Var 1 value'
                },
                {
                  name: 'Env Var 2',
                  description: 'Env Var 2 description',
                  value: 'Env Var 2 value'
                }
              ]
            }
          },
          {
            id: 2,
            name: 'Service 2',
            description: 'Service 2 description',
            load: {
              labels: Array.from({length: 10}, () => new Date(Date.now() - Math.random() * 10000000000).toLocaleDateString()),
              dataset: [65, 59, 80, 81, 56, 55, 40, 50, 60, 70],
            },
            options: {
              ports: [
                {
                  name: 'Port 1',
                  description: 'Port 1 description',
                  value: 8080
                },
                {
                  name: 'Port 2',
                  description: 'Port 2 description',
                  value: 8081
                }
              ],
              env_vars: [
                {
                  name: 'Env Var 1',
                  description: 'Env Var 1 description',
                  value: 'Env Var 1 value'
                },
                {
                  name: 'Env Var 2',
                  description: 'Env Var 2 description',
                  value: 'Env Var 2 value'
                }
              ]
            }
          }
        ],
      }
    ],
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
  mounted() {
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
