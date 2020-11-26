import { map } from 'lodash';

import { TodoStatus } from './models/todos.models';
import { ITEM_STATUS } from '../../../components/EditableList/models/item.models';

export default {
  isFetchingMany: (state) => {
    return state.isFetchingMany;
  },
  getAllTodos: (state) => {
    return []; // TODO
  },

  // TODO
};
