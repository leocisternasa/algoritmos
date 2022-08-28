function convertToRoman(num) {
  var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

  let accumulator = '';

  for (const key in roman) {
    const numberValue = roman[key];

    while (numberValue <= num) {
      num = num - numberValue;
      accumulator = accumulator + key;
    }
  }

  return accumulator;

}


test('convert to roman number', () => {
  expect(convertToRoman(4)).toStrictEqual("IV");
});

