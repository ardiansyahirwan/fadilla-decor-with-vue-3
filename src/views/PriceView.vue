<template>
  <div class="price">
    <div class="tab-selection mt-md-10">
      <v-container>
        <Tabnav :tabNavigation="tabNav.itemsNav">
          <template #tab-title>
            <span
              class="font-weight-bold text-md-h4"
              v-html="tabNav.title"
            ></span>
            <p class="text-md-subtitle-1" v-html="tabNav.subtitleText"></p
          ></template>
        </Tabnav>
      </v-container>
    </div>
  </div>
</template>

<script>
import Tabnav from "@/components/price-list/Tabnav.vue";
export default {
  components: {
    Tabnav,
  },
  data: () => ({
    tabNav: {
      title: "Our <br> Price List",
      subtitleText: "Search your design <br> decoration here",
      itemsNav: [
        { id: 1, name: "Intimate Wedding" },
        { id: 2, name: "Akad" },
        { id: 3, name: "Garden Party" },
        { id: 4, name: "Resepsi All-in" },
      ],
    },
  }),
};
</script>

<style>
.text-brown-color {
  color: #343027;
}
</style>