<template>
  <div class="d-flex align-center">
    <v-skeleton-loader
      :loading="loading"
      class="elevation-2 mb-1 me-1 mt-1"
      type="image"
      height="48px"
      width="48px"
    >
      <v-img :src="iconSrc" width="48px" height="48px" @loadstart="loading = true" @load="loading = false" />
    </v-skeleton-loader>

    <v-combobox
      v-model="outfit"
      :items="gameOutfits"
      :label="label"
      :return-object="true"
      variant="underlined"
    />
  </div>
</template>

<script setup lang="ts">

const iconSrc = ref("https://wiki.guildwars2.com/images/3/38/Eternity.png")
const label = ref("Outfit")

const gameOutfits = ref([0, 1, 2]);

const loading = ref();

function getOutfitName(id: integer): string {
  if (id == 0) return "foobar";
  return id + "";
}
</script>