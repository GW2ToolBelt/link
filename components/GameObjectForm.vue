<template>
  <div class="d-flex align-center">
    <a :href="itemUrl" style="margin-right: 16px">
      <v-img
        class="elevation-2"
        max-height="48px"
        max-width="48px"
        :src="iconSrc"
      />
    </a>

    <v-combobox
      v-model="modelValue"
      :items="items"
      :label="label"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    label: { type: String, required: true },
    iconSrc: { type: String, required: true },
    items: Array,
    itemUrl: { type: String, required: true},
    required: Boolean,
    value: { required: true }
  },
  computed: {
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