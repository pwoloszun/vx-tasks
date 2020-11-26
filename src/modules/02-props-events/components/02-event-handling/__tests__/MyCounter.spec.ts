import { render } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MyCounter from '../MyCounter.vue';

function renderMyCounter() {
  return render(MyCounter);
}

describe('MyCounter.vue', () => {
  xit('should render 0 as default value', () => {
  });

  describe('increment btn clicked', () => {
    xit('should render incremented value', async () => {
    });
  });

});
