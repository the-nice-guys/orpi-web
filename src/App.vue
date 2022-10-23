<template>
  <v-app>
    <div class="app">

      <SideBar class="elevation-4" style="z-index: 3; box-shadow: black"/>
      <router-view style="z-index: 1"/>
    </div>
    <v-sheet
        class="bg-sheet"
        color="#5777FAFF"
        height="18%"
        width="100%"
    >
    </v-sheet>
  </v-app>

</template>

<script>
// test
import SideBar from "@/components/SideBar";
export default {
  name: 'App',
  components: {SideBar},
  data: () => ({
    //
  }),
}
</script>
<style lang="scss">
.bg-sheet {
  position: absolute;
  z-index: 0;
}

:root {
  --primary: #5777FA;
  --primary-alt: #22c55e;
  --grey: #64748b;
  --dark: #1D2336;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --lightbg: #f2f3f8;
  --sidebar-width: 300px;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

button {
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}
.app {
  display: flex;
  main {
    flex: 1 1 0;
    padding: 2rem;
    @media (max-width: 1024px) {
      padding-left: 6rem;
    }
  }
}
.app {
  background: var(--lightbg);
}
</style>
