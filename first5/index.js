/*
Write a function that:
- Accepts an array as a parameter.
- Returns a new array containing the first five elements of the passed array.
*/
function first5() {}

/* ======= TESTS - DO NOT MODIFY ===== */

test('first5 function works for more than five elements', () => {
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
  const copyOfOriginal = numbers.slice();
  expect(first5(numbers)).toEqual([1, 2, 3, 4, 5]);
  // Make sure first5 didn't change its input array.
  expect(numbers).toEqual(copyOfOriginal);
});

test('first5 function returns a a smaller array for fewer than five elements', () => {
  const letters = ['z', 'y', 'x'];
  const copyOfOriginal = letters.slice();
  expect(first5(letters)).toEqual(['z', 'y', 'x']);
  // Make sure first5 didn't change its input array.
  expect(letters).toEqual(copyOfOriginal);
});
