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
          src="@/assets/images/package-image/popular-1.png"
        ></v-img>
      </v-col>
      <v-col cols="5" sm="12" md="12" class="pt-sm-0" align-self="center">
        <v-card-title
          class="font-weight-medium text-subtitle-2 text-md-subtitle-1 px-1"
        >
          {{ card.packageName }}
        </v-card-title>
        <v-card-subtitle class="text-md-subtitle-1 px-1">
          <p>Rp.{{ card.price }} Jt</p>
        </v-card-subtitle>
        <v-btn
          v-if="white != true"
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
import { computed } from "@vue/runtime-core";
export default {
  props: {
    card: Array,
    white: Boolean,
  },
  setup(props) {
    const isBackgroundClass = computed(() => ({
      "bg-yellow-lighten-3": props.card.id % 2 == 0 && props.white != true,
      "bg-orange-lighten-4": props.card.id % 2 == 1 && props.white != true,
      "bg-gray": props.white,
    }));

    return { isBackgroundClass };
  },
};
</script>

<style>
.bg-gray {
  background-color: #e4e0e0;
}
</style>