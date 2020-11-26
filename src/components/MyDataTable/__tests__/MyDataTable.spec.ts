import { merge } from 'lodash';
import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MyDataTable from '../MyDataTable.vue';

function generateDataTableInputs(inputs = {}): any {
  const items = [
    { id: 100, name: 'bob', age: 12 },
    { id: 200, name: 'ed', age: 34 },
    { id: 300, name: 'kate', age: 97 },
  ];
  const metaData = [
    { value: 'age', text: 'User Age' },
    { value: 'name', text: 'Full Name' },
  ];
  const selectedItem = null;
  const defaultInputs = { items, metaData, selectedItem };
  return merge({}, defaultInputs, inputs);
}

function renderMyDataTable({ metaData = [], selectedItem = null, items = [] }) {
  return null; // TODO
}

describe('MyDataTable.vue', () => {
  describe('props', () => {
    xit('should render row for each item', async () => {
    });

    xit('should sort cells in metaData order', async () => {

    });

    xit('should highlight selected item', async () => {
    });

    xit('should highlight nothing if selectedItem undefined', async () => {
    });
  });

  describe('events', () => {
    xit('should emit item linked with clicked row', async () => {
    });
  });
});

