/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the same elements, except sorted.
*/
function sortArray() {}

test('sortArray function returns a sorted version of the array', () => {
  expect(sortArray(['a', 'n', 'c', 'e', 'z', 'f'])).toEqual([
    'a',
    'c',
    'e',
    'f',
    'n',
    'z',
  ]);
});

/* ======= TESTS - DO NOT MODIFY ===== */

test("sortArray function doesn't change the passed in array", () => {
  const before = ['a', 'n', 'c', 'e', 'z', 'f'];
  const copy = before.slice();
  sortArray(before);
  expect(before).toEqual(copy);
});
