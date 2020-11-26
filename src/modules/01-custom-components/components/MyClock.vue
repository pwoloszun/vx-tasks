<template>
  <div class="my-clock">
    <h4>My Clock</h4>
    <h2>Current time: TODO_PLACEHOLDER</h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'MyClock',
  data() {
    return {
      currentDt: new Date(),
    };
  },
  // TODO: comput formattedDate '1996-03-27 19:08:06'
  // TODO: update currentDt every 1sec
});
</script>

<style scoped>
.my-clock {
  border: 1px solid #000;
  padding: 18px;
  margin: 18px auto;
}
</style>
