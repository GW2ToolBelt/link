<template>
  <div class="d-flex align-center">
    <v-img class="elevation-2  mb-1 me-2 mt-1" max-width="48px" height="48px" max-height="48px" :src="outfitIconSource" @loadstart="outfitIconLoading = true" @load="outfitIconLoading = false">
      <template v-slot:placeholder>
        <v-skeleton-loader class="rounded-0" type="image" :loading="outfitIconLoading" width="100%" height="100%" />
      </template>
    </v-img>

    <v-combobox
      :model-value="chatLink.data['id']"
      @update:model-value="(id: number) => updateChatLinkData('id', id)"
      :items="gameOutfits"
      item-title="name"
      item-value="id"
      :label="$t('linkTypeOutfit')"
      :return-object="false"
      variant="underlined"
    />
  </div>
</template>

<script setup lang="ts">
const chatLink = useChatLink();

const { data: outfits } = useFetch<{
  id: number,
  icon: string
}[]>("/data/outfits/index.json", {
  lazy: true,
  server: false
});

const gameOutfits = computed<any[]>(() => outfits.value ?? []);

const outfitIconLoading = ref(false);
const outfitIconSource = computed<string>(() => gameOutfits.value.find(it => chatLink.value.data['id'] == it.id)?.icon ?? "/data/placeholder.png");
</script>