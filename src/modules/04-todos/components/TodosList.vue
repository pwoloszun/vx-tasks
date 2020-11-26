<template>
  <v-card class="mx-auto" max-width="500">
    <v-toolbar color="teal" dark>
      <v-toolbar-title>TODOs</v-toolbar-title>
    </v-toolbar>
    <v-card class="d-flex justify-center my-4">
      <v-progress-circular indeterminate color="primary" />
    </v-card>

    <v-list two-line subheader>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title> TITLE_PLACEHOLDER </v-list-item-title>
          <v-list-item-subtitle class="text--primary">
            DESC_PLACEHOLDER
          </v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <v-btn color="error">Remove</v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

interface Item {
  id: number;
  title: string;
  description?: string;
}

export default Vue.extend({
  name: 'TodosList',
});
</script>

<style scoped>
</style>
