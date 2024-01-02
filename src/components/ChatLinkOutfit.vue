<template>
  <div class="d-flex align-center">
    <v-img class="elevation-2  mb-1 me-2 mt-1" max-width="48px" height="48px" max-height="48px" :src="outfitIconSource" @loadstart="outfitIconLoading = true" @load="outfitIconLoading = false">
      <template v-slot:placeholder>
        <v-skeleton-loader class="rounded-0" type="image" :loading="outfitIconLoading" width="100%" height="100%" />
      </template>
    </v-img>

    <v-combobox
      v-model="outfit"
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
import type {IdLinkMeta} from "gw2e-chat-codes/src/encode/encodeIdLink";

import {encode} from "gw2e-chat-codes";
import {integer} from "vscode-languageserver-types";

const props = defineProps<{
  chatLink: IdLinkMeta | undefined
}>();

const outfit = ref(0);

watch(() => props.chatLink, async (chatLink) => {
  outfit.value = <number>(chatLink as IdLinkMeta).id ?? 0;
});

const emit = defineEmits<{
  updateChatLink: [value: string]
}>();

watch(outfit, async (outfit) => {
  const encodedChatLink = encode("outfit", outfit);

  if (encodedChatLink) {
    emit("updateChatLink", encodedChatLink);
  } else {
    console.error(`Failed to encode outfit ID: ${outfit}`);
  }
});

const { data: outfits } = useFetch<{
  id: integer,
  icon: string
}[]>("/data/outfits/index.json", {
  lazy: true,
  server: false
});

const gameOutfits = computed<any[]>(() => outfits.value ?? []);

const outfitIconLoading = ref(false);
const outfitIconSource = computed<string>(() => gameOutfits.value.find(it => outfit.value == it.id)?.icon ?? "/data/placeholder.png");
</script>