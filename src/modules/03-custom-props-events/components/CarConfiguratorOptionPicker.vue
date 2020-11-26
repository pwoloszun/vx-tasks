<template>
  <div class="option-picker">
    <h3>LABEL_PLACEHOLDER</h3>
    <v-btn color="success"> OPTION_PLACEHOLDER </v-btn>
    <v-btn color="success"> OPTION_PLACEHOLDER </v-btn>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

const defaultLabel = 'Choose from:';

export default Vue.extend({
  name: 'CarConfiguratorOptionPicker',
});
</script>

<style scoped>
.option-picker {
  padding: 16px;
  border: 1px solid #000;
  margin: 8px auto;
  background-color: aliceblue;
}
</style>
