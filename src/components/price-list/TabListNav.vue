<template>
  <v-container>
    <v-row>
      <v-col cols="6" sm="4" md="2" align-self="center" class="text-left">
        <v-text>
          <slot name="tab-title">Default Content</slot>
        </v-text>
      </v-col>
      <v-col
        cols="6"
        sm="4"
        md="2"
        align-self="center"
        v-for="category in itemsNav"
        :key="category.id"
      >
        <TabItem :category="category" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import TabItem from "@/components/price-list/TabItem.vue";
import { onMounted, ref } from "@vue/runtime-core";
export default {
  components: {
    TabItem,
  },
  setup() {
    const itemsNav = ref("");

    onMounted(() => {
      fetch("http://localhost:3000/categories")
        .then((res) => res.json())
        .then((data) => (itemsNav.value = data));
    });

    return {
      itemsNav,
    };
  },
};
</script>