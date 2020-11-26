<template>
  <div class="hello">
    <h1>Hello Vue!</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    // TODO 1
    return {};
  },
  // TODO 2: computed
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-style: italic;
}
</style>

<!-- TODO this.$set(this.batman, 'id', 27) -->
