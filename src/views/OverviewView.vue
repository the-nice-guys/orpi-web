<template>
  <main class="Overview">

    <v-container fluid>
      <v-row justify="end">
          <account-cloud class="ma-2 mr-16 elevation-2"/>
      </v-row>
      <v-row class="mt-8" justify="start">
        <v-col xs12 md6 lg6 xl4 >
          <v-card
              elevation="2"
              min-width="300"
              height="100%"
              style="border-radius: 24px"
          >
            <v-card-title>Environments</v-card-title>

            <v-list
              v-model="selectedEnvIndex"
            >
              <v-list-item
                  v-for="item in environments"
                  :key="item.title"
                  :value="item"
                  @click="selectEnvironment(item)"
                  active-color="#5777FAFF"

              >
                <template v-slot:prepend>
                  <v-icon :icon="item.icon"></v-icon>
                </template>
                <v-list-item-title>{{ item.name }}</v-list-item-title>
                  <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
              </v-list-item>
            </v-list>

          </v-card>
        </v-col>

        <v-col cols="8" xs12 md6 lg6 xl4 >
          <v-row class="mb-2" no-gutters>
            <v-col  class="mx-2">
              <Hosts :env="selectedEnvironment" v-on:select-host="selectHost"/>
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
    </v-container>
  </main>
</template>

<script>
import { defineComponent } from 'vue';

// Components
import accountCloud from "@/components/AccountCloud";
import Hosts from "@/components/Hosts";
import HostServices from "@/components/HostServices";
import EnvHistory from "@/components/EnvHistory";

export default defineComponent({
  name: 'OverviewView',

  components: {
    EnvHistory,
    HostServices,
    Hosts,
    accountCloud
  },
  data: () => ({
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
            status: 'online'
          },
          {
            name: 'Host 2',
            description: 'Host 2 description',
            icon: 'mdi-server',
            status: 'online'
          },
          {
            name: 'Host 3',
            description: 'Host 3 description',
            icon: 'mdi-server',
            status: 'offline'
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
  }
});
</script>

<style scoped>
</style>
