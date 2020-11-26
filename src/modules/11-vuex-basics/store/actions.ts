import api from '../api';

import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_INCREMENT, ASYNC_DECREMENT } from './mutation-types';

const incrementSyncCounter = (context) => {
  context.commit(SYNC_INCREMENT);
};

// TODO decrementSyncCounter

// TODO incrementAsyncCounter

const decrementAsyncCounter = (context, value) => {
  return api.ajaxCall(value).then((receivedValue) => {
    context.commit(ASYNC_DECREMENT, receivedValue);
  });
};

export default {
  incrementSyncCounter,
  // TODO
  decrementAsyncCounter,
};
