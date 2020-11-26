<template>
  <v-card>
    <v-divider />
    <v-card-title>
      <h3 class="headline mb-0">Create TODO</h3>
    </v-card-title>
    <v-card-text>
      <v-form>
        <v-text-field label="Title" required />
        <v-text-field label="Description" />
        <v-btn color="primary"> Submit </v-btn>
        <v-btn>Clear</v-btn>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TodosForm',
  data() {
    return {};
  },
});
</script>

<style scoped>
</style>
