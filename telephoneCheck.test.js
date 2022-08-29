function telephoneCheck(str) {
  return str.length === 0 ? false : "is possible."
}













test('telephoneCheck', () => {
  expect(telephoneCheck("")).toStrictEqual(false);
});

test('telephoneCheck', () => {
  expect(telephoneCheck("1 555-555-5555")).toStrictEqual(true);
});

test('telephoneCheck', () => {
  expect(telephoneCheck("555-5555")).toStrictEqual(false);
});

test('telephoneCheck', () => {
  expect(telephoneCheck("11 555-555-5555")).toStrictEqual(false);
});