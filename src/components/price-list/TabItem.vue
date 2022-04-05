<template>
  <v-card
    rounded="xl"
    class="text-center"
    :class="backgroundForTabnav(category.id)"
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
          {{ category.categoryName }}
        </h5>
      </v-text>
    </v-card-content>
  </v-card>
</template>

<script>
export default {
  props: {
    category: Array,
  },
  setup() {
    const backgroundForTabnav = (id) => ({
      "bg-deep-orange-lighten-4": id == 1,
      "bg-orange-lighten-4": id == 2,
      "bg-yellow-lighten-3": id == 3,
      "bg-lime-lighten-3": id == 4,
      "bg-green-accent-1": id == 5,
    });
    return { backgroundForTabnav };
  },
};
</script>