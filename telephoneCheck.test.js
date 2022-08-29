function telephoneCheck(str) {


  // phoneFormats = "555-555-5555",
  //   "(555)555-5555",
  //   "(555) 555-5555",
  //   "555 555 5555",
  //   "5555555555",
  //   "1 555 555 5555"

  const regExPatterns = [
    //555-555-5555
    /^\d{3}-\d{3}-\d{4}$/,
    //1 555-555-5555
    /^1 \d{3}-\d{3}-\d{4}$/,
    //1 (555) 555-5555
    /^1 \(\d{3}\) \d{3}-\d{4}$/,
    //5555555555
    /^\d{10}$/,
    //(555)555-5555
    /^\(\d{3}\)\d{3}-\d{4}$/,
    //"1(555)555-5555"
    /^1\(\d{3}\)\d{3}-\d{4}$/,
    //1 555 555 5555
    /^1 \d{3} \d{3} \d{4}$/
  ]


  return regExPatterns.some(pattern => pattern.test(str));




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

test('telephoneCheck', () => {
  expect(telephoneCheck("123**&!!asdf#")).toStrictEqual(false);
});