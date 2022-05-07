<template>
  <v-row justify="space-between" class="partnership mt-md-8 mb-md-8 py-6">
    <v-col
      cols="12"
      md="3"
      align-self="center"
      class="text-center text-md-left"
    >
      <v-text class="font-weight-bold text-md-h4">
        <span
          >Our <br />
          Partnership
        </span>
      </v-text>
    </v-col>
    <v-col cols="6" sm="3" md="3" align-self="center"
      v-for="partner in partnership" :key="partner.id">
      <v-img
        width="210"
        height="108.58"
        :src="getImageUrl(partner.image)"
      ></v-img>
    </v-col>
  </v-row>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup() {
    const partnership = ref([
      {id:1, image:'partner-1.svg'},
      {id:2, image:'partner-2.svg'},
      {id:3, image:'partner-3.svg'},
    ])

    const getImageUrl = (pic)=> {
      return require('@/assets/images/partnership/'+pic)
    }
    return {partnership, getImageUrl}
  },
}
</script>