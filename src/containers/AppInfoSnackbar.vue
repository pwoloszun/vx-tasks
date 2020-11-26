<template>
  <v-snackbar v-model="isVisible" right top color="black">
    {{ appInfo }}
  </v-snackbar>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'AppInfoSnackbar',
  computed: {
    ...mapGetters(['hasAppInfo', 'appInfo']),
    isVisible(): boolean {
      return this.hasAppInfo;
    },
  },
});
</script>

<style scoped>
</style>
