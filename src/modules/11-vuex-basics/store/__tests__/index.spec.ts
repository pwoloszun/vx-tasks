import Vuex from 'vuex';

import storeDefinition from '../index';

function createStore() {
  return new Vuex.Store(storeDefinition);
}

describe('SyncCounter: mutations', () => {
  describe('incrementSyncCounter action', function () {
    xit('should set its default value', function () {
    });

    xit('should increment SyncCounter by 1', function () {
    });
  });

  describe('decrementSyncCounter action', function () {
    xit('should decrement SyncCounter by 1', function () {
    });
  });

  describe('incrementAsyncCounter action', function () {
    xit('should increment AsyncCounter by 10', async function () {
    });
  });

  describe('decrementAsyncCounter action', function () {
    xit('should decrement AsyncCounter by 10', async function () {
    });
  });

});
