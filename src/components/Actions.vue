<template>
  <v-card
      elevation="2"
      style="border-radius: 24px"
      height="100%"
      class="pb-2"
  >
    <v-card-title>Actions</v-card-title>

    <div class="btns mt-n8 centered">
      <v-btn
          v-for="item in 10"
          :key="item"
          color="#5777FAFF"
          class="ma-2"
      >
        <span class="text-white">Action {{item}}</span>
      </v-btn>
    </div>

  </v-card>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Actions'
}
</script>
<style scoped>
.btns {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  flex-direction: row;
}

div.centered {
  position: relative;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}
</style>
