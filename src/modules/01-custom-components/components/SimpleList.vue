<template>
  <div class="simple-list">
    <h3>Simple list</h3>
    <ul>
      <li>TODO</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SimpleList',
  data() {
    return {
      people: [
        { name: 'Bob', id: 1 },
        { name: 'Ed', id: 2 },
        { name: 'Batman', id: 3 },
      ],
    };
  },
  // TODO: logPerson(person)
});
</script>

<style scoped>
</style>
