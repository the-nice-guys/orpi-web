<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      height="100%">
    <v-card-title>Services of <span style="color: #5777FA">{{host.name}}</span></v-card-title>

    <div>
      <div class="ma-2 chips">
        <v-chip
            class="ma-1"
            v-for="i in 7"
            :key="i"
            color="#5777FA"
            variant="outlined"
            prepend-icon="mdi-server"
        >
          <span>Service {{i}}</span>
        </v-chip>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "HostServices",
  props: {
    host: Object
  },
  data: () => ({
  }),
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
