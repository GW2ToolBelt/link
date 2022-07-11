<template>
  <v-app>
    <v-main>
      <v-card>
        <v-label>Foo</v-label>
      </v-card>
    </v-main>

    <v-app-bar app></v-app-bar>

    <v-footer app absolute color="red">
      <v-row>
        <div class="text-white">
          Copyright GW2TB
        </div>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import {useHead} from "#head";

useHead({
  title: "GW2TB Link"
});
</script>

<style>
html {
  overflow-y: auto;
}
</style>