<template>
  <div class="price">
    <div class="tab-selection mt-md-10">
      <Tabnav :tabNavigation="tabNav.itemsNav">
        <template #tab-title>
          <span
            class="font-weight-bold text-md-h4"
            v-html="tabNav.title"
          ></span>
          <p class="text-md-subtitle-1" v-html="tabNav.subtitleText"></p
        ></template>
      </Tabnav>
    </div>

    <Footer />
  </div>
</template>

<script>
import Tabnav from "@/components/price-list/Tabnav.vue";
import Footer from "@/components/FooterComponent.vue";
export default {
  components: {
    Tabnav,
    Footer,
  },
  data: () => ({
    tabNav: {
      title: "Our Price List",
      subtitleText: "Search your design decoration here",
      itemsNav: [
        { id: 1, name: "All Package" },
        { id: 2, name: "Intimate Wedding" },
        { id: 3, name: "Akad" },
        { id: 4, name: "Garden Party" },
        { id: 5, name: "Resepsi All-in" },
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