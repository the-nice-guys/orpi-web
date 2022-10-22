<template>
  <main class="Overview">

    <v-container fluid>
      <v-row justify="end">
          <account-cloud class="ma-2 mr-16 elevation-2"/>
      </v-row>
      <v-row class="mt-8" justify="start">
        <v-col cols="2" xs12 md6 lg6 xl4 >
          <v-card
              elevation="2"
              min-width="300"
              height="100%"
              style="border-radius: 24px"
          >
            <v-card-title>Environments</v-card-title>

            <v-list>
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
                <v-list-item-content>
                  <v-list-item-subtitle>{{ item.description }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>

          </v-card>
        </v-col>

        <v-col >
          <v-row class="ma-2 mt-0" justify="center">
            <EnvironmentDetails :env="selectedEnvironment" id="1" width="500" height="300"/>
          </v-row>
          <v-row class="ma-2" justify="center">
            <EnvironmentDetails :env="environments[1]" id="2" width="500" height="500"/>
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
import EnvironmentDetails from "@/views/EnvironmentDetails";
// import LineChart from "@/components/LineChart";
export default defineComponent({
  name: 'OverviewView',

  components: {
    EnvironmentDetails,
    // LineChart,
    accountCloud
  },
  data: () => ({
    environments: [
      {
        name: 'Production',
        description: 'Production environment',
        icon: 'mdi-cloud-check-outline',
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
        name: 'Staging',
        description: 'Staging environment',
        icon: 'mdi-cloud-sync-outline',
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
      },
      {
        name: 'Development',
        description: 'Development environment',
        icon: 'mdi-cloud-outline'
      },
    ],
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

  }),
  mounted() {
  },
  methods: {
    selectEnvironment(item) {
      console.log(item.services)
      this.selectedEnvironment = item
    }
  }
});
</script>

<style scoped>
</style>
