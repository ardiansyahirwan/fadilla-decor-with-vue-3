<template>
  <div class="price">
    <div class="tab-selection mt-md-10">
      <Tabnav :tabNavigation="itemsNav">
        <template #tab-title>
          <span
            class="font-weight-bold text-md-h4"
            v-html="tabNav.title"
          ></span>
          <p class="text-md-subtitle-1" v-html="tabNav.subtitleText"></p
        ></template>
      </Tabnav>
    </div>

    <div class="card-container">
      <v-container></v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Tabnav from "@/components/price-list/Tabnav.vue";
import Footer from "@/components/FooterComponent.vue";
import { onMounted, ref } from "vue";
export default {
  components: {
    Tabnav,
    Footer,
  },
  setup() {
    const tabNav = ref({
      title: "Our Price List",
      subtitleText: "Search your design decoration here",
    });

    const itemsNav = ref("");

    onMounted(() => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => (itemsNav.value = data));
    });
    return { tabNav, itemsNav };
  },
};
</script>

<style>
.text-brown-color {
  color: #343027;
}
</style>