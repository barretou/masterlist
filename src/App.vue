<template>
  <v-app>
    <app-navigation />

    <v-main>
        <router-view></router-view>
    </v-main>

    <app-footer />
  </v-app>
</template>

<script>
import AppNavigation from "@/components/AppNavigation.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  components: {
    AppNavigation,
    AppFooter,
  },
};
</script>

<style>
/* Add your custom styles here */
</style>
