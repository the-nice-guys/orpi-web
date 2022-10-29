<template>
  <main class="Dashboard" id="main">
    <v-sheet
        class="bg-sheet"
        color="#5777FAFF"
        height="18%"
        width="100%"
    >
    </v-sheet>
    <v-container fluid style="z-index: 3; position: inherit;">
      <v-row justify="end">
        <account-cloud class="ma-2 mr-16 elevation-2" style="position: inherit"/>
      </v-row>
      <v-row class="mt-8" justify="start">
        <v-col>
          <v-card
              elevation="2"
              min-width="300"
              height="100%"
              style="border-radius: 24px"
          >
            <v-card-title>Environment & Services</v-card-title>

            <div class="pa-4">
              <v-select
                  :items="['Production', 'Development', 'Staging']"
                  label="Environment"
                  density="comfortable"
              ></v-select>

              <v-select
                  :items="['Service 1', 'Service 2', 'Service 3']"
                  label="Service"
                  density="comfortable"
              ></v-select>
            </div>
          </v-card>
        </v-col>
        <v-col cols="8">
          <v-card
              elevation="2"
              min-width="300"
              height="100%"
              style="border-radius: 24px">
            <v-card-title>Statistics</v-card-title>
            <div class="d-flex">
              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Uptime</v-list-item-title>
                    <v-list-item-subtitle>10d 20h 04m</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Item 2</v-list-item-title>
                    <v-list-item-subtitle>Item 2 subtitle</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Item 3</v-list-item-title>
                    <v-list-item-subtitle>Item 3 subtitle</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Average Cpu Usage</v-list-item-title>
                    <v-list-item-subtitle>50%</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Average Network Usage</v-list-item-title>
                    <v-list-item-subtitle>300 mb/s</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Average Memory Usage</v-list-item-title>
                    <v-list-item-subtitle>2,45/4 G</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>

              <v-list>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Peak Cpu Usage</v-list-item-title>
                    <v-list-item-subtitle>90%</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Peak Network Usage</v-list-item-title>
                    <v-list-item-subtitle>534 mb/s</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
                <v-list-item>
                  <v-list-item-content>
                    <v-list-item-title>Peak Memory Usage</v-list-item-title>
                    <v-list-item-subtitle>3,89/4 G</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="7">
          <v-card
              id="graphs"
              elevation="2"
              min-width="300"
              height="100%"
              style="border-radius: 24px">
            <v-card-title>Graphs</v-card-title>

            <v-list>
              <v-list-item>
                <v-list-item-title>Cpu</v-list-item-title>
                <line-chart class="pa-2" id="1" :labels="['1', '2']" :dataset="[40, 60]" width="300" height="100"/>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Network</v-list-item-title>
                <line-chart class="pa-2" id="2" :labels="['1', '2', '3']" :dataset="[30, 230, 0]" width="300" height="100"/>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>Memory</v-list-item-title>
                <line-chart class="pa-2" id="3" :labels="['1', '2', '3']" :dataset="[100, 120, 105]" width="300" height="100"/>
              </v-list-item>
            </v-list>

          </v-card>
        </v-col>

        <v-col>
          <v-row no-gutters>
            <Actions style="height: 260px" id="actions"/>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-card
                elevation="2"
                min-width="300"
                width="100%"
                style="border-radius: 24px"
                id="logs"
            >
              <v-card-title>Recent Logs</v-card-title>
              <v-card-text style="white-space: pre-line">
                {{text}}
              </v-card-text>
            </v-card>
          </v-row>

          <v-row no-gutters class="mt-3">
            <v-card
                elevation="2"
                min-width="300"
                width="100%"
                height="100%"
                style="border-radius: 24px;"
                id="info"
            >
              <v-card-title>Information</v-card-title>
              <v-list density="compact" style="height: 85%; overflow: scroll">
                <v-list-item prepend-icon="mdi-clock" title="Uptime">
                  <v-list-item-subtitle>11d 23h 06m</v-list-item-subtitle>
                </v-list-item>

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
                      v-for="i in [5, 4, 3, 2, 1, 0, -1]"
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
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </main>
</template>

<script>
import {defineComponent} from 'vue';
import accountCloud from "@/components/AccountCloud";
import LineChart from "@/components/LineChart";
import Actions from "@/components/Actions";
export default defineComponent({
  name: 'DashboardView',
  components: {
    Actions,
    LineChart,
    accountCloud
  },
  data: () => ({
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n Donec dapibus, tellus eu viverra porttitor, magna nibh accumsan arcu, quis aliquet ipsum quam a massa.\n Donec at tellus purus.\n Nulla eget gravida nibh.\n Aliquam sodales eget lectus vel fermentum.\n Donec sodales semper lectus, vitae viverra turpis hendrerit eget.\n Phasellus scelerisque iaculis ullamcorper.\n Cras vitae libero sed diam elementum feugiat eget quis tellus.\n Integer sed eros accumsan, laoreet nisl consequat, convallis tellus.\n"
  }),
  mounted() {
    this.setHeight()
  },
  methods: {
    setHeight() {
      let graphs = document.getElementById("graphs");
      let info = document.getElementById("info");
      // let logs = document.getElementById("logs");
      // let actions = document.getElementById("actions");

      let h = Number(window.getComputedStyle(graphs).height.replace("px", "")) / 3
      info.style.height = h + "px";
      // logs.style.height = h + "px";
      // actions.style.height = h + "px";
    }
  }
});
</script>


<style scoped>
.bg-sheet {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
}
main {
  height: 100vh;
  overflow: scroll;
}
</style>
