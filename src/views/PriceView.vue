<template>
  <div class="price">
    <div class="tab-selection mt-md-6">
      <TabList>
        <template #tab-title>
          <span
            class="font-weight-bold text-md-h4"
            v-html="tabNav.title"
          ></span>
          <p class="text-md-subtitle-1" v-html="tabNav.subtitleText"></p
        ></template>
      </TabList>
    </div>

    <div class="card-container mt-md-5 mt-4">
      <v-container>
        <v-row>
          <v-col class="text-center" v-if="error"
            ><span class="font-weight-medium">{{ error }}</span>
          </v-col>
          <v-col
            v-else
            cols="12"
            sm="4"
            md="4"
            class="my-md-5 my-3"
            v-for="itemPackage in filteredPackage"
            :key="itemPackage.id"
          >
            <Card
              @mouseenter="hoverCard($event)"
              @mouseleave="hoverDiscard($event)"
              :card="itemPackage"
              :white="true"
            />
          </v-col>
        </v-row>
      </v-container>
    </div>

    <Footer />
  </div>
</template>

<script>
import Card from "@/components/CardComponent.vue";
import TabList from "@/components/price-list/TabListNav.vue";
import Footer from "@/components/FooterComponent.vue";

import getEventPackages from "@/composables/getEventPackages";
import { computed, ref } from "vue";
export default {
  components: {
    TabList,
    Footer,
    Card,
  },
  setup() {
    const tabNav = ref({
      title: "Our Price List",
      subtitleText: "Search your design decoration here",
    });

    const filteredPackage = computed((keywords = "all") => {
      return eventPackages.value.filter((element) => {
        return element.keyword.includes(keywords);
      });
    });

    const hoverCard = (e) => {
      e.target.style.backgroundColor = "#E6EE9C";
    };
    const hoverDiscard = (e) => {
      e.target.style.backgroundColor = "#e4e0e0";
    };

    const { error, load, eventPackages } = getEventPackages();
    load();

    return {
      tabNav,
      filteredPackage,
      hoverCard,
      hoverDiscard,
      error,
    };
  },
};
</script>

<style>
.text-brown-color {
  color: #343027;
}
</style>