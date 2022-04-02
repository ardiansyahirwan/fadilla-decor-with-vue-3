<template>
  <nav>
    <v-container class="my-0 py-0">
      <v-toolbar color="white" flat class="py-3 px-0">
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="showNavigation = !showNavigation"
        ></v-app-bar-nav-icon>
        <v-toolbar-title>
          <span
            ><v-img src="@/assets/images/logo.svg" width="205"></v-img
          ></span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <router-link v-for="nav in navbar" :key="nav.id" :to="nav.link">
          <v-btn class="text-capitalize me-8 hidden-sm-and-down">
            <span class="text-md-body-1 font-weight-medium">
              {{ nav.items }}
            </span>
          </v-btn>
        </router-link>

        <v-btn
          class="
            bg-orange-accent-2
            text-capitalize
            rounded-md
            hidden-sm-and-down
            py-6
            px-9
            me-3
          "
          elevation="4"
        >
          <span class="text-md-body-1 font-weight-medium">Log in</span>
        </v-btn>
        <v-btn class="text-capitalize hidden-sm-and-down py-6 px-9">
          <span class="text-md-body-1 font-weight-medium">Sign Up</span>
        </v-btn>
        <v-navigation-drawer
          class="bg-orange-accent-2"
          v-model="showNavigation"
          bottom
          temporary
          theme="dark"
        >
          <v-list v-for="item in navbar" :key="item.id" color="transparent">
            <v-list-item
              prepend-icon="favorite"
              :title="item.items"
            ></v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-toolbar>
    </v-container>
  </nav>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const navbar = ref([
      { id: 1, items: "Home", link: "/" },
      { id: 2, items: "Price List", link: "/price-list" },
      { id: 3, items: "Event List", link: "/event-list" },
    ]);

    const showNavigation = ref(true);

    return { navbar, showNavigation };
  },
};
</script>

<style scoped>
nav a {
  text-decoration: none;
  color: black;
}
a.router-link-active {
  color: orange;
  font-size: 1.5em !important;
}
</style>