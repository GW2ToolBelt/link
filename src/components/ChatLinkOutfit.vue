<template>
  <div class="d-flex align-center">
    <v-img
        class="elevation-2 mb-1 me-1 mt-1"
        :lazy-src="iconSrc"
        max-height="48px"
        max-width="48px"
    >
      <template v-slot:placeholder>
        <v-skeleton-loader
          class="mx-auto"
          type="image"
        />
      </template>
    </v-img>

    <v-combobox
        :v-model="value"
        :items="gameOutfits"
        :label="label"
        variant="underlined"
    />
  </div>
</template>

<script setup lang="ts">
import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";

const iconSrc = ref("https://wiki.guildwars2.com/images/3/38/Eternity.png")
const value = ref("foo")
const label = ref("Outfit")

const gameOutfits = ref([{
  id: "0",
  title: "foobar"
}]);


const gameOutfitNames = ref(new Map())
const selectedOutfit = ref(undefined)

const chatLink = ref("[&foo]")

// const { data: outfits } = await useFetch(() => "data/outfits/outfits.json");
</script>