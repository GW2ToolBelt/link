<template>
  <v-app>
    <v-main class="background">
      <div class="d-flex justify-center" style="padding-top: 20vh; padding-bottom: 20vh">
        <v-card
            color="rgba(255, 255, 255, 0.95)"
            elevation="8"
            style="width: 25vw; min-width: 350px"
        >
          <v-toolbar flat class="ps-4 pb-4" color="transparent">
            <v-text-field
                :model-value="chatLink.encodedString"
                @update:model-value="(it: string) => updateChatLink(it)"
                single-line
                class="chatlink-field grow"
                label="Chat link"
                :rules="chatLinkValidationRules"
                variant="underlined"
            />

            <v-btn icon variant="plain" @click="copyChatLink">
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="pb-2 pt-0 ps-4 pe-4">
            <v-select
                :model-value="chatLink.type"
                @update:model-value="(it: CodeType) => updateChatLinkType(it)"
                :items="linkTypes"
                :item-title="getLinkTypeName"
                persistent-hint
                return-object
                variant="underlined"
            />

<!--            <v-expand-transition mode="out-in" origin>-->
              <ChatLinkOutfit v-if="chatLink.type == 'outfit'" />
<!--              <ChatLinkSkin v-if="linkType == 'skin'" :chat-link="chatLink" @updateChatLink="chatLink = $event" />-->
<!--            </v-expand-transition>-->
          </v-card-text>
        </v-card>
      </div>
    </v-main>

    <v-footer app style="width: 100%" absolute color="rgba(255, 255, 255, 0.85)">
      <v-row no-gutters justify="space-between">
        <v-col align-self="center" style="user-select: none">
          <v-btn class="text-h6" variant="plain" :href="urlHomepage" :ripple="false" style="padding: 0">
            GW2TB
          </v-btn>
        </v-col>

        <v-col
            align-self="center"
            class="d-flex justify-center text-overline text--secondary"
            style="user-select: none"
        >
          Copyright {{ new Date().getFullYear() }}
        </v-col>

        <v-col align-self="center" class="d-flex justify-end">
          <v-btn icon variant="plain" :href="urlSocialsGitHub" :ripple="false">
            <v-icon>mdi-github</v-icon>
          </v-btn>

<!--          <v-btn icon variant="plain" :href="urlSocialsTwitter" :ripple="false">-->
<!--            <v-icon>mdi-twitter</v-icon>-->
<!--          </v-btn>-->
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const route = useRoute();

const title = ref("GW2TB Link");

// TODO Update the homepage URL once the homepage is actually live
// const urlHomepage = "https://gw2tb.com";
const urlHomepage = "https://github.com/GW2ToolBelt";

const urlSocialsGitHub = "https://github.com/GW2ToolBelt/link";
// const urlSocialsTwitter = "https://twitter.com/GW2ToolBelt";

const linkTypes = [
    "item",
    "skin",
    "outfit"
];

useHead({
    title
});

const chatLink = useChatLink();

function copyChatLink() {
    const chatLink_ = chatLink.value;
    if (chatLink_.type == null || chatLink_.encodedString == null) return;

    navigator.clipboard.writeText(chatLink_.encodedString);
}

function getLinkTypeName(type: string) {
    switch (type) {
        case "item": return "Item";
        case "skin": return "Skin";
        case "outfit": return "Outfit";
        default: return type;
    }
}

const chatLinkValidationRules = [
    (value: string) => {
        if (chatLink.value.type == null) {
            return "Invalid chat link format";
        }

        return true;
    }
];

/* Automatically sync the currently encoded chat link to the URL path. */
watch(chatLink, value => {
    let fragment: string | null = null;
    if (value.type != null) fragment = value.encodedString;

    history.replaceState(undefined, "", fragment ?? "/");
});

/* Initialize the form with the chat link taken from the path portion of the current resource. */
onMounted(() => {
    if (route.path) {
        const path = route.path.substring(1); // Removes the '/' prefix
        updateChatLink(path);
    }
});
</script>

<style scoped>
.chatlink-field:deep(input) {
  font-family: monospace;
}
</style>

<style>
html {
  overflow: auto;
}

.background {
  background: linear-gradient(rgba(255,255,255,.25), rgba(255,255,255,.25)), url("~/assets/background-light.jpg");

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>