<template>
  <div class="home">
    <Hero :hero="heroSection" :achievs="achievmentsDataComponents" />
    <div class="popular">
      <v-container>
        <v-row justify-md="space-between">
          <HeadingContent>
            <template #heading>{{ popularSections.heading }}</template>
            <template #subtitle> {{ popularSections.subtitleText }}</template>
          </HeadingContent>
          <v-col
            cols="12"
            sm="6"
            md="4"
            class="mb-md-15 py-md-7"
            v-for="card in popularPackages.slice(0, 3)"
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
        <v-row class="mb-3">
          <HeadingContent>
            <template #heading>{{ scheduleSections.heading }}</template>
            <template #subtitle> {{ scheduleSections.subtitleText }}</template>
          </HeadingContent>
        </v-row>
        <v-carousel
          hide-delimiter-background
          cycle="true"
          interval="5000"
          delimiter-icon="mdi-minus"
          touch
        >
          <v-carousel-item v-for="schedule in schedules" :key="schedule.id">
            <v-row justify="center">
              <v-col
                cols="12"
                md="6"
                align-self="center"
                class="mb-md-15 py-md-7"
              >
                <ScheduleCard :event="schedule" />
              </v-col>
            </v-row>
          </v-carousel-item>
        </v-carousel>
      </v-container>

      <Footer />
    </div>
  </div>
</template>

<script>
import { computed, defineComponent, onMounted, ref } from "vue";

// Components
import Hero from "@/components/home/HeroComponent.vue";
import Card from "@/components/CardComponent.vue";
import HeadingContent from "@/components/home/HeadingTextComponent.vue";
import Partnership from "@/components/home/PartnershipComponent.vue";
import ScheduleCard from "@/components/home/ScheduleCard.vue";
import Footer from "@/components/FooterComponent.vue";
export default defineComponent({
  name: "HomeView",
  components: { Hero, Card, HeadingContent, Partnership, ScheduleCard, Footer },
  setup() {
    const heroSection = ref({
      heading: "Make your <br> Unforgetable moment",
      subtitleText:
        "We’ll be make your event unforgetable <br> with simple and luxury decoration",
    });

    const achievmentsDataComponents = ref([
      { id: 1, name: "Design Decoration", quantity: 30 },
      { id: 2, name: "Events Finished", quantity: 500 },
      { id: 3, name: "Partnership", quantity: 3 },
    ]);

    const popularSections = ref({
      heading: "Popular Event Decoration",
      subtitleText:
        "We have more popular event decoration who can you order directly",
    });

    const scheduleSections = ref({
      heading: "Upcoming Event",
      subtitleText:
        "Look your  upcoming event here and see how they are be counted down",
    });

    const popularPackages = ref("");
    const schedules = ref("");

    onMounted(() => {
      fetch("http://localhost:3000/eventPackages")
        .then((res) => res.json())
        .then((data) => (popularPackages.value = data))
        .catch((err) => console.log(err.message));
    });
    onMounted(() => {
      fetch("http://localhost:3000/schedules")
        .then((res) => res.json())
        .then((data) => (schedules.value = data))
        .catch((err) => console.log(err.message));
    });

    return {
      heroSection,
      achievmentsDataComponents,
      popularSections,
      popularPackages,
      schedules,
      scheduleSections,
    };
  },
  data: () => ({
    schedule: {
      heading: "Upcoming Event",
      subtitleText:
        "Look your  upcoming event here and see how they are be counted down",
    },
  }),
});
</script>

<style>
.home p,
.price p {
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