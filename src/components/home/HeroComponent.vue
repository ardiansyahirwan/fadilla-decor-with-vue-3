<template>
  <div class="hero">
    <v-container class="pt-md-14">
      <v-row>
        <v-col cols="12" md="6" class="hidden-sm-and-down">
          <v-img
            src="@/assets/images/hero.svg"
            width="556"
            height="431.36"
          ></v-img>
        </v-col>
        <v-col sm="12" md="6">
          <h1 class="text-md-h3 font-weight-black text-center text-sm-left">
            <span v-html="hero.heading"></span>
          </h1>
          <p class="pt-md-2 text-md-subtitle-1 text-center text-sm-left">
            <span v-html="hero.subtitleText"></span>
          </p>

          <!-- Card Achievment -->
          <v-card
            elevation="5"
            rounded="xl"
            class="mt-md-8 mt-10 pa-8 d-flex justify-center text-center"
          >
            <v-row>
              <v-col md="4" sm="12" v-for="achiev in achievs" :key="achiev.id">
                <h3 class="text-md-h3 font-weight-bold">
                  <span>{{ achiev.quantity }}</span>
                </h3>
                <p
                  class="
                    text-md-subtitle-1 text-caption text-sm-subtitle-1
                    pt-3
                  "
                >
                  {{ achiev.name }}
                </p>
              </v-col>
            </v-row>
          </v-card>
          <!-- End Card Achievment -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    hero: {},
    achievs: [],
  },
};
</script>

<style>
.hero h1 {
  line-height: 1.2em;
  letter-spacing: -0.02em !important;
}
</style>