'use strict';

jest.dontMock('../store');

describe('TodosStore', function () {
  describe('.getAll', function () {
    it('returns 2 objects', function () {
      var TodosStore = require('../store');
      expect(TodosStore.getAll().length).toBe(2);
    });
  });
});
