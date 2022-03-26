<template>
  <v-col cols="12" class="pt-10 text-center">
    <h4 class="text-md-h4 font-weight-bold">
      <slot name="heading">default Content</slot>
    </h4>
    <p class="text-md-subtitle-1 pt-2">
      <slot name="subtitle">default Content</slot>
    </p>
  </v-col>
</template>