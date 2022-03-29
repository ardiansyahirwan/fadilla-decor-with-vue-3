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
        v-for="nav in tabNavigation"
        :key="nav.id"
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
  </v-container>
</template>

<script>
export default {
  props: ["tabNavigation"],
  methods: {
    backgroundForTabnav(id) {
      return {
        "bg-deep-orange-lighten-4": id == 1,
        "bg-orange-lighten-4": id == 2,
        "bg-yellow-lighten-3": id == 3,
        "bg-lime-lighten-3": id == 4,
        "bg-green-accent-1": id == 5,
      };
    },
  },
};
</script>