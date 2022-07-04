<template>
  <v-footer padless class="mt-15">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-list>
            <v-img
              src="@/assets/images/logo.svg"
              max-width="205"
              max-height="52"
            ></v-img>
            <v-list-item-subtitle class="mt-md-3 mt-2 text-md-subtitle-1">
              make your unforgetable moment
            </v-list-item-subtitle>
          </v-list>
        </v-col>
        <v-col cols="12" md="2" v-for="foo in footer" :key="foo.id">
          <v-list-item three-line>
            <v-list-content>
              <v-list-item-title class="font-weight-bold pb-md-3">{{
                foo.title
              }}</v-list-item-title>
              <v-list-item-subtitle
                v-for="sub in foo.subtitle"
                :key="sub.id"
                class="pb-md-3"
              >
                {{ sub.name }}
              </v-list-item-subtitle>
            </v-list-content>
          </v-list-item>
        </v-col>

        <v-col
          class="text-center font-weight-light text-subtitle-2"
          cols="12"
          md="12"
        >
          <span class="text-grey darken-2">
            &copy;CopyRight
            <span class="font-weight-medium">Fadilla Decoration</span>
            All Right Reserved {{ new Date().getFullYear() }}
          </span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import { ref } from "@vue/reactivity";
export default {
  setup() {
    const footer = ref([
      {
        id: 1,
        title: "Help",
        subtitle: [
          { id: 1, name: "Support" },
          { id: 2, name: "Knowledge Base" },
          { id: 3, name: "How to make a order" },
        ],
      },
      {
        id: 2,
        title: "Features",
        subtitle: [
          { id: 1, name: "Payment Gateway" },
          { id: 2, name: "Image Gallery" },
          { id: 3, name: "Booking Available" },
        ],
      },
      {
        id: 1,
        title: "Company",
        subtitle: [
          { id: 1, name: "About Us" },
          { id: 2, name: "Contact Us" },
        ],
      },
      {
        id: 1,
        title: "Contact Us",
        subtitle: [
          { id: 1, name: "fadilla-decor@gmail.com" },
          { id: 2, name: "0857-1176-231" },
          { id: 3, name: "Pabuaran, Cibinong Bogor - Indonesia" },
        ],
      },
    ]);
    return { footer };
  },
};
</script>

<style>
</style>
