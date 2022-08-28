

function filtro(arr) {

  const r = new RegExp(/[a-zA-Z0-9]/);
  return arr.filter(x => r.test(x) === true);
};

test('Filter non-alphanumeric', () => {
  expect(filtro(["_", "9", "a"])).toStrictEqual(["9", "a"]);
});

test('Filter non-alphanumeric', () => {
  expect(filtro([])).toStrictEqual([]);
});