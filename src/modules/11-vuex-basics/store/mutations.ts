import { SYNC_INCREMENT, SYNC_DECREMENT, ASYNC_DECREMENT, ASYNC_INCREMENT } from './mutation-types';

const incrementSync = (state) => {
  state.syncCounter.value += 1;
};

// TODO decrementSync

// TODO incrementAsync

const decrementAsync = (state, value) => {
  state.asyncCounter.value -= value;
};

export default {
  [SYNC_INCREMENT]: incrementSync,
  // TODO
  [ASYNC_DECREMENT]: decrementAsync,
};
