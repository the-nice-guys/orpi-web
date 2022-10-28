<template>
  <v-card
      elevation="2"
      min-width="300"
      height="100%"
      style="border-radius: 24px"
  >
    <v-card-title>Environments</v-card-title>

    <v-list
        :selected="[selectedEnvironment.name]"
    >
      <v-list-item
          v-for="item in environments"
          :key="item.name"
          :value="item.name"
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
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Environments',
  props: {
    environments: {},
    selectedEnvironment: {}
  },
  methods: {
    selectEnvironment(item) {
      this.$emit('select-environment', item)
    }
  }
}
</script>
