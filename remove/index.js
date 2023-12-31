/*
Write a function that:
- Takes an array and an index as input.
- Returns a new array containing the same elements, but without the element at the passed index.
*/

function remove() {}

/* ======= TESTS - DO NOT MODIFY ===== */

describe('remove function', () => {
  test('removes index 0', () => {
    expect(remove([1, 2, 3], 0)).toEqual([2, 3]);
  });

  test('removes middle index', () => {
    expect(remove([1, 2, 3, 4, 5], 2)).toEqual([1, 2, 4, 5]);
  });

  test('removes end index', () => {
    expect(remove([1, 2, 3, 4, 5], 4)).toEqual([1, 2, 3, 4]);
  });

  test('removes only index', () => {
    expect(remove(['hi'], 0)).toEqual([]);
  });

  test('ignores missing index', () => {
    expect(remove(['hi'], 10)).toEqual(['hi']);
  });

  test("doesn't modify input array", () => {
    let initial = [1, 2, 3];
    remove(initial, 1);
    expect(initial).toEqual([1, 2, 3]);
  });
});
