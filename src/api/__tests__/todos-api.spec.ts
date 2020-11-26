import api from '@/api/todos-api';

jest.mock('axios', () => {
  const myaxios = {
    get() {
      return Promise.resolve({ data: [123] });
    }
  };
  return myaxios;
});

describe('todos-api', () => {
  it('should stub axios', async () => {
    const data = await api.getAll();
    expect(data).toEqual([123]);
  });
});
