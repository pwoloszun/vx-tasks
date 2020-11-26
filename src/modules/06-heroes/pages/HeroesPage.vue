<template>
  <div>
    <h1>Heroes</h1>
    <my-data-table :items="heroes" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import api, { Hero } from '@/api/heroes-api';
import MyDataTable, { DataTableMetaData } from '@/components/MyDataTable';

const META_DATA = [
  { value: 'universe', text: 'Komiksowe Uniwersum' },
  { value: 'name', text: 'Imie' },
  { value: 'secretIdentity', text: 'Tozsamosc' },
];

interface Data {
  heroes: Hero[];
  selectedHero: Hero | null;
  tableMetaData: DataTableMetaData;
}

export default Vue.extend({
  components: { MyDataTable },
  name: 'HeroesPage',
  data(): Data {
    return {
      heroes: [],
      selectedHero: null,
      tableMetaData: META_DATA,
    };
  },
  methods: {
    selectHero(hero) {
      console.log('hero', hero.name);
      // TODO
    },
  },
  mounted() {
    // TODO: fetch heroes data
  },
});
</script>

<style scoped>
</style>
