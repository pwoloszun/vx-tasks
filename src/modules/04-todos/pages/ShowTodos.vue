<template>
  <v-flex xs12 sm6 lg6>
    <!-- <todos-list :items="todos" /> -->
    <hr class="my-4" />
    <!-- <todos-form /> -->
  </v-flex>
</template>

<script lang="ts">
import Vue from 'vue';

import api, { Todo } from '@/api/todos-api';
// TODO: usage example
// api.getAll().then((todos) => {
//   console.log('getAll', todos);
// });

import TodosList from '../components/TodosList.vue';
import TodosForm from '../components/TodosForm.vue';

interface Data {
  todos: Todo[];
}

export default Vue.extend({
  name: 'ShowTodos',
  components: {
    TodosForm,
    TodosList,
  },
  data(): Data {
    return {
      todos: [],
    };
  },
});
</script>

<style scoped>
</style>
