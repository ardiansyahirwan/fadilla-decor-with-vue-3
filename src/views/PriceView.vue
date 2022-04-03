<template>
  <div class="price">
    <div class="tab-selection mt-md-6">
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

    <div class="card-container mt-md-5">
      <v-container>
        <v-row>
          <v-col
            cols="12"
            sm="4"
            md="4"
            class="my-md-5"
            v-for="itemPackage in eventPackages"
            :key="itemPackage.id"
            ><Card
              @mouseenter="hoverCard($event)"
              @mouseleave="hoverDiscard($event)"
              :card="itemPackage"
              :white="true"
          /></v-col>
        </v-row>
      </v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Card from "@/components/CardComponent.vue";
import Tabnav from "@/components/price-list/Tabnav.vue";
import Footer from "@/components/FooterComponent.vue";
import { computed, onMounted, ref } from "vue";
export default {
  components: {
    Tabnav,
    Footer,
    Card,
  },
  setup() {
    const tabNav = ref({
      title: "Our Price List",
      subtitleText: "Search your design decoration here",
    });

    const itemsNav = ref("");
    const eventPackages = ref([]);

    const hoverCard = (e) => {
      e.target.style.backgroundColor = "#E6EE9C";
      // console.log(e.target);
    };
    const hoverDiscard = (e) => {
      e.target.style.backgroundColor = "#e4e0e0";
      // console.log(e.target);
    };

    onMounted(() => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => (itemsNav.value = data));
    });

    onMounted(() => {
      fetch("http://localhost:3000/eventPackages")
        .then((res) => res.json())
        .then((data) => (eventPackages.value = data))
        .catch((err) => console.log(err.message));
    });
    return { tabNav, itemsNav, eventPackages, hoverCard, hoverDiscard };
  },
};
</script>

<style>
.text-brown-color {
  color: #343027;
}
</style>