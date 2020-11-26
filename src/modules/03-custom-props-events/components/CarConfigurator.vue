<template>
  <div class="car-configurator">
    <h1>CarConfigurator</h1>
    <div class="chosen-config">
      <h3>Current config</h3>
      <p class="text-h5">Engine: TODO_PLACEHOLDER</p>
      <p class="text-h5">Color: TODO_PLACEHOLDER</p>
      <p class="text-h5">Drive Wheel: TODO_PLACEHOLDER</p>
    </div>
    <div>
      <car-configurator-option-picker
        label="'Choose engine type'"
        options="engines"
        optionSelect="selectEngine($event)"
      />
      <car-configurator-option-picker />
      <car-configurator-option-picker />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import CarConfiguratorOptionPicker from './CarConfiguratorOptionPicker.vue';

export default Vue.extend({
  name: 'CarConfigurator',
  components: {
    CarConfiguratorOptionPicker,
  },
  data() {
    return {
      selectedEngine: null,
      engines: ['Petrol', 'Diesel', 'Tesla'],
      selectedColor: null,
      colors: ['Black', 'White', 'Red', 'Yellow'],
      selectedDriveWheel: null,
      driveWheels: ['4X', 'Front-Wheel-Drive', 'Rear-Wheel-Drive'],
    };
  },
});
</script>

<style scoped>
.car-configurator {
  border: 1px solid #000;
  padding: 8px;
  background-color: deepskyblue;
}

.chosen-config {
  padding: 16px;
}
</style>
