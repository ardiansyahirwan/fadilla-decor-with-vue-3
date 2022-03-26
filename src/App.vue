<template>
  <v-app>
    <Navbar />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/NavbarComponent.vue";
export default {
  name: "App",
  components: { Navbar },
};
</script>

<style>
#app {
  color: #343027;
}
</style>
