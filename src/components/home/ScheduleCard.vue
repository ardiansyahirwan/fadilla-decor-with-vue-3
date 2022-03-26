<template>
  <v-card
    elevation="4"
    rounded="xl"
    class="mx-auto pa-5"
    :class="isBackgroundClass"
  >
    <v-row>
      <v-col cols="12" sm="8" md="8">
        <v-img
          max-height="246"
          max-width="332"
          rounded="xl"
          src="@/assets/images/schedule/Upcoming-1.png"
        />
      </v-col>
      <v-col cols="12" sm="4" md="4">
        <v-card
          rounded="lg"
          flat
          color="transparent"
          class="border-3 brown-border-color"
          max-height="246"
        >
          <v-card-content
            class="font-weight-bold text-h5 text-md-h3 text-center pa-md-5"
          >
            <span class="text-uppercase spacing-1">{{ event.dateEvent }}</span>
          </v-card-content>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="6" sm="12" md="12">
        <v-card-title class="font-weight-medium text-subtitle-2 text-md-h5 px-1"
          >{{ event.name }} Wedding</v-card-title
        >
        <v-card-subtitle class="text-md-subtitle-1 px-1">{{
          event.address
        }}</v-card-subtitle>
      </v-col>
      <v-col cols="6" sm="12" md="12" align-self="center">
        <v-btn
          flat
          block="md"
          rounded="lg"
          class="text-capitalize font-weight-light bg-orange-accent-1"
        >
          details
        </v-btn></v-col
      >
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ["event"],
  computed: {
    isBackgroundClass() {
      return {
        "bg-yellow-lighten-3": this.event.id % 2 == 0,
        "bg-orange-lighten-4": this.event.id % 2 == 1,
      };
    },
  },
};
</script>

<style scoped>
.spacing-1 {
  letter-spacing: 0.08em;
}

.border-3 {
  border: 3px solid !important;
}

.brown-border-color {
  border-color: #8d6e63 !important;
}
</style>