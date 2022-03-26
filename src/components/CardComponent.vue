<template>
  <v-card
    elevation="4"
    rounded="xl"
    class="mx-auto pa-3 pa-sm-5 mx-0"
    :class="isBackgroundClass"
    max-width="313"
  >
    <v-row>
      <v-col cols="7" sm="12" md="12">
        <v-img
          height="200px"
          rounded="xl"
          src="@/assets/package-image/popular-1.png"
        ></v-img>
      </v-col>
      <v-col cols="5" sm="12" md="12" class="pt-sm-0">
        <v-card-title
          class="font-weight-medium text-subtitle-2 text-md-subtitle-1 px-1"
        >
          {{ card.name }}
        </v-card-title>
        <v-card-subtitle class="text-md-subtitle-1 px-1">
          <p>Rp.{{ card.price }}</p>
        </v-card-subtitle>
        <v-btn
          v-if="card.popular"
          flat
          block="md"
          rounded="lg"
          class="text-capitalize font-weight-light mt-3 bg-orange-accent-1"
        >
          details
        </v-btn>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    //
  }),
  props: ["card"],
  computed: {
    isBackgroundClass() {
      return {
        "bg-amber-lighten-3": this.card.popular && this.card.id % 2 == 0,
        "bg-orange-lighten-4": this.card.popular && this.card.id % 2 == 1,
        "": this.card.popular == false,
      };
    },
  },
};
</script>

<style>
</style>