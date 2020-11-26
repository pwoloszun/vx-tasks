import { produce } from 'immer';

import * as types from './mutation-types';
// import { todoEntitiesAdapter } from './index';

import { Todo, TodoStatus } from './models/todos.models';

export default {
  [types.LoadManyTodosRequest]: (state) => {
    // TODO
  },
  [types.LoadManyTodosSuccess]: (state, todos: Todo[]) => {
    // TODO
  },

  // TODO - discover other mutations

};
