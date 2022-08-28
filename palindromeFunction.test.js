function palindrome(str) {
  let newStr = str.toLowerCase().trim();

  let arr = newStr.split("");

  const r = new RegExp(/[a-zA-Z0-9]/);
  const filteredArr = arr.filter(x => r.test(x) === true);

  newStr = filteredArr.join("");
  let reversedStr = filteredArr.reverse().join("");

  if (newStr == reversedStr) {
    return true
  } else { return false }

}






test('PalindromeFunction', () => {
  expect(palindrome("eye")).toStrictEqual(true);
});

test('PalindromeFunction', () => {
  expect(palindrome("1 eye for of 1 eye.")).toStrictEqual(false);
});

test('PalindromeFunction', () => {
  expect(palindrome("0_0 (: /-\ :) 0-0")).toStrictEqual(true);
});

