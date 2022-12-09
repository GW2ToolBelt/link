<template>
  <div class="d-flex align-center">
    <a :href="itemUrl" style="margin-right: 16px">
      <v-img
          class="elevation-2"
          max-height="48px"
          max-width="48px"
          :src="itemIcon(modelValue)"
      />
    </a>

    <v-combobox
        v-model="modelValue"
        hide-no-data
        :items="items"
        :item-text="itemText"
        item-value="id"
        :label="label"
    >
      <template v-slot:item="data">
        <v-list-item-avatar left tile>
          <v-img
              class="elevation-2 ma-1"
              max-height="48px"
              max-width="48px"
              :src="data.item.icon"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title v-html="data.parent.genFilteredText(itemText(data.item))" />
        </v-list-item-content>
      </template>
    </v-combobox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: { type: String, required: true },
    iconSrc: { type: String, required: true },
    items: Array,
    itemIcon: { type: Function, required: true },
    itemTextIn: { type: Function, required: true },
    itemUrl: { type: String, required: true},
    required: Boolean,
    value: { required: true }
  },
  computed: {
    itemText() {
      let delegate = this.itemTextIn;
      this.$i18n.locale;

      return function(foo) {
        if (foo == undefined) return "";
        return delegate(foo);
      }
    },
    modelValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
});
</script>