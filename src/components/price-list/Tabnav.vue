<template>
  <v-row>
    <v-col cols="4" md="3" align-self="center">
      <v-text>
        <slot name="tab-title">Default Content</slot>
      </v-text>
    </v-col>

    <v-col
      md="2"
      align-self="center"
      v-for="nav in tabNavigation"
      :key="nav.id"
      class="ml-md-3"
    >
      <v-card
        rounded="xl"
        class="text-center"
        :class="backgroundForTabnav(nav.id)"
      >
        <v-card-content>
          <v-icon
            size="60"
            icon="mdi-heart-outline"
            color="orange-lighten-1"
          ></v-icon>
          <v-text>
            <p class="text-brown-color">Order By</p>
            <h5 class="text-md-subtitle-1 font-weight-bold text-brown-color">
              {{ nav.name }}
            </h5>
          </v-text>
        </v-card-content>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ["tabNavigation"],
  methods: {
    backgroundForTabnav(id) {
      return {
        "bg-orange-lighten-4": id == 1,
        "bg-yellow-lighten-3": id == 2,
        "bg-lime-lighten-3": id == 3,
        "bg-green-accent-1": id == 4,
      };
    },
  },
};
</script>