<template>
  <div class="d-flex align-center">
    <v-img class="elevation-2  mb-1 me-1 mt-1" max-width="48px" height="48px" max-height="48px" @loadstart="loading = true" @load="loading = false">
      <template v-slot:placeholder>
        <v-skeleton-loader class="rounded-0" type="image" :loading="loading" width="100%" height="100%" />
      </template>
    </v-img>

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

const loading = ref(false);

function getOutfitName(id: integer): string {
  if (id == 0) return "foobar";
  return id + "";
}
</script>