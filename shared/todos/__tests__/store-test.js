jest.dontMock('../store');

describe('TodosStore', () => {
  describe('.getAll', () => {
    it('returns 2 objects', () => {
      var TodosStore = require('../store');
      expect(TodosStore.getAll().length).toBe(2);
    });
  });
});
