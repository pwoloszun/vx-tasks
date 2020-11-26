import { EntityAdapter, Update } from 'vue-entity-adapter';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import { Todo } from './models/todos.models';

// TODO: design state shape
const state = {
};

export const NAMESPACE = 'adv-todos';

export default {
  state,
  actions,
  getters,
  mutations,
};
