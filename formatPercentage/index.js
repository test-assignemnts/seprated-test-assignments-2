/*
Write a function that:
- Takes an array of numbers as input.
- Returns an array of strings formatted as percentages (e.g. 10 => "10%").
- The numbers must be rounded to 2 decimal places.
- Numbers greater 100 must be replaced with 100.
*/

function formatPercentage() {}

/* ======= TESTS - DO NOT MODIFY ===== */

test('formatPercentage function works', () => {
  expect(formatPercentage([23, 18.103, 187.2, 0.372])).toEqual([
    '23.00%',
    '18.10%',
    '100%',
    '0.37%',
  ]);
});
