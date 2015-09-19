jest.dontMock('../store');
jest.dontMock('../../utils/slugify');

const SLUG = 'watch-wimbledon-final';

describe('TodosStore', () => {
  describe('.getAll', () => {
    it('returns 2 objects', () => {
      const TodosStore = require('../store');
      expect(TodosStore.getAll().length).toBe(2);
    });
  });

  describe('.update', () => {
    it('updates data on an object', () => {
      const TodosStore = require('../store');

      TodosStore.update(SLUG, { completed: true });
      expect(TodosStore.get(SLUG).completed).toBe(true);
    });
  });

  describe('.remove', () => {
    it('removes an object', () => {
      const TodosStore = require('../store');

      TodosStore.remove(SLUG);
      expect(TodosStore.get(SLUG)).toBe(undefined);
    });
  });

  describe('.add', () => {
    it('adds an object', () => {
      const TodosStore = require('../store');

      TodosStore.add({ name: 'Write a test', date: 'Sept 18 2015' });
      expect(TodosStore.get('write-a-test').date).toBe('Sept 18 2015');
    });
  });
});
