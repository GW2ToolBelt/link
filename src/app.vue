<template>
  <v-app>
    <v-main class="background">
      <div class="d-flex justify-center" style="padding-top: 20vh; padding-bottom: 20vh">
        <v-card
            color="rgba(255, 255, 255, 0.95)"
            elevation="8"
            style="width: 25vw; min-width: 350px"
        >
          <v-toolbar flat class="ps-4" color="transparent">
            <v-text-field
                v-model="chatLink"
                single-line
                class="grow"
                label="Chat link"
                variant="underlined"
            />

            <v-btn icon variant="plain" @click="copyChatLink" >
              <v-icon>mdi-content-copy</v-icon>
            </v-btn>
          </v-toolbar>

          <v-card-text class="pb-2 pt-0 ps-4 pe-4">
            <div class="d-flex justify-center">
              <v-btn-toggle
                v-model="toggle"
                color="primary"
                mandatory
                variant="text"
              >
                <v-btn @click="$i18n.setLocale('de')">🇩🇪</v-btn>
                <v-btn @click="$i18n.setLocale('en')">🇺🇸</v-btn>
                <v-btn>🇪🇸</v-btn>
              </v-btn-toggle>
            </div>

            <v-select
                v-model="linkType"
                :items="linkTypes"
                item-title="type"
                item-value="type"
                persistent-hint
                return-object
                variant="underlined"
            />

            <v-expand-transition mode="out-in" origin>
              <ChatLinkOutfit @input="chatLink = $event" />
            </v-expand-transition>
          </v-card-text>
        </v-card>
      </div>
    </v-main>

    <v-footer :app="true" absolute color="rgba(255, 255, 255, 0.85)">
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
import {ref} from "vue";

import ChatLinkOutfit from "./components/ChatLinkOutfit.vue"

const title = ref("GW2TB Link")
const toggle = ref("GW2TB Link")

const urlHomepage = "https://gw2tb.com"
const urlSocialsGitHub = "https://github.com/GW2ToolBelt/link"
const urlSocialsTwitter = "https://twitter.com/GW2ToolBelt"

const linkTypes = [
  { type: "Coin", component: ChatLinkOutfit },
  { type: "Item", component: ChatLinkOutfit },
  { type: "Outfit", component: ChatLinkOutfit }
]

const linkType = ref(linkTypes[0])

useHead({
  title
})


const chatLink = ref("[&foo]")

function copyChatLink() {
  // TODO impl
}

watch(chatLink, currentValue => {
  history.replaceState(undefined, "", currentValue)
})
</script>

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