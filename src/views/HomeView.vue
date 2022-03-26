<template>
  <div class="home">
    <Hero :hero="hero" :achievs="hero.achievments" />
    <div class="popular">
      <v-container>
        <v-row justify-md="space-between">
          <HeadingContent>
            <template #heading>{{ popular.heading }}</template>
            <template #subtitle> {{ popular.subtitleText }}</template>
          </HeadingContent>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="mb-md-15 py-md-7"
            v-for="card in popular.populars"
            :key="card.id"
          >
            <Card :card="card"></Card>
          </v-col>
        </v-row>
        <Partnership />
      </v-container>
    </div>

    <div class="schedule">
      <v-container>
        <HeadingContent>
          <template #heading>{{ schedule.heading }}</template>
          <template #subtitle> {{ schedule.subtitleText }}</template>
        </HeadingContent>
        <v-row>
          <v-col></v-col>
        </v-row>
      </v-container>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

// Components
import Hero from "@/components/home/HeroComponent.vue";
import Card from "@/components/CardComponent.vue";
import HeadingContent from "@/components/HeadingTextComponent.vue";
import Partnership from "@/components/PartnershipComponent.vue";
export default defineComponent({
  name: "HomeView",
  components: { Hero, Card, HeadingContent, Partnership },
  data: () => ({
    hero: {
      heading: "Make your <br> Unforgetable moment",
      subtitleText:
        "We’ll be make your event unforgetable <br> with simple and luxury decoration",
      // images: "@/assets/hero.svg",
      achievments: [
        { id: 1, name: "Design Decoration", quantity: 30 },
        { id: 2, name: "Events Finished", quantity: 500 },
        { id: 3, name: "Partnership", quantity: 3 },
      ],
    },
    popular: {
      heading: "Popular Event Decoration",
      subtitleText:
        "We have more popular event decoration who can you order directly",
      populars: [
        { id: 1, name: "Garden Party Package", price: "26 Jt", popular: true },
        {
          id: 2,
          name: "Intimate Wedding Package",
          price: "18 Jt",
          popular: true,
        },
        { id: 1, name: "Akad Jasmine Package", price: "10 Jt", popular: true },
      ],
    },
    schedule: {
      heading: "Upcoming Event",
      subtitleText:
        "Look your  upcoming event here and see how they are be counted down",
    },
  }),
});
</script>

<style>
.home p {
  color: #716e6b;
}

.popular {
  background: linear-gradient(
    180deg,
    rgba(165, 186, 105, 0.17) 0%,
    rgba(242, 218, 195, 0.0901) 100%
  );
  margin-top: 6em;
}

.schedule {
  height: 100vh;
}
</style>