/*
NOTE: This exercise is the same as one you did last week - try to do it again using things you learnt this week.
Think about what is better about this solution than your one last week, and what is worse.

Write a function that:
- Takes an array of strings as input.
- Removes any spaces in the beginning or end each string.
- Removes any forward slashes (/) in the strings.
- Makes the strings all lowercase.
*/
function tidyUpString() {}

/* ======= TESTS - DO NOT MODIFY ===== */

test('tidyUpString function works', () => {
  expect(
    tidyUpString([
      '/Khashayar',
      ' /Negar',
      'HaNiEh',
      'mahya',
      ' Zaynab',
      'niloofar   ',
      '   Atena  ',
      ' amir shahsahebi  ',
    ])
  ).toEqual([
    'khashayar',
    'negar',
    'hanieh',
    'mahya',
    'zaynab',
    'niloofar',
    'atena',
    'amir shahsahebi',
  ]);
});
